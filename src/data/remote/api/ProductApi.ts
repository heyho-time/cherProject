import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";

const products:Entity.Product[] = [
    {
        "id": 1,
        "name": "product1",
        "description": "남여공용 맨투맨",
        "SKU": 11456,
        "releasePrice": 20000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 1,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 1,
                "category": {
                    "id": 1,
                    "name": "빅사이즈"
                }
            }
        ],
        "options": [
            {
                "id": 1,
                "name": "사이즈",
                "keyword": [
                    {
                        "id": 1,
                        "name": "M"
                    },
                    {
                        "id": 2,
                        "name": "L"
                    },
                    {
                        "id": 3,
                        "name": "XL"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "product2",
        "description": "든",
        "SKU": 99301,
        "releasePrice": 10000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 2,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 2,
                "category": {
                    "id": 2,
                    "name": "간편식"
                }
            }
        ],
        "options": [
            {
                "id": 2,
                "name": "종류",
                "keyword": [
                    {
                        "id": 4,
                        "name": "백미"
                    },
                    {
                        "id": 5,
                        "name": "현미"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "product3",
        "description": "필독",
        "SKU": 24671,
        "releasePrice": 10000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 3,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 3,
                "category": {
                    "id": 3,
                    "name": "추천도서"
                }
            }
        ],
        "options": [
            {
                "id": 3,
                "name": "종류",
                "keyword": [
                    {
                        "id": 6,
                        "name": "하드커버"
                    },
                    {
                        "id": 7,
                        "name": "종이커버"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "product4",
        "description": "해",
        "SKU": 49120,
        "releasePrice": 10000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 4,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 4,
                "category": {
                    "id": 2,
                    "name": "간편식"
                }
            }
        ],
        "options": [
            {
                "id": 4,
                "name": "종류",
                "keyword": [
                    {
                        "id": 8,
                        "name": "육개장"
                    },
                    {
                        "id": 9,
                        "name": "소고기국"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "product5",
        "description": "오곡",
        "SKU": 33165,
        "releasePrice": 5000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 5,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 5,
                "category": {
                    "id": 2,
                    "name": "간편식"
                }
            }
        ],
        "options": [
            {
                "id": 5,
                "name": "종류",
                "keyword": [
                    {
                        "id": 10,
                        "name": "아몬드"
                    },
                    {
                        "id": 11,
                        "name": "초코"
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "product6",
        "description": "아이스크림",
        "SKU": 39120,
        "releasePrice": 10000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 6,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 6,
                "category": {
                    "id": 6,
                    "name": "세"
                }
            }
        ],
        "options": [
            {
                "id": 6,
                "name": "종류",
                "keyword": [
                    {
                        "id": 12,
                        "name": "바닐라"
                    },
                    {
                        "id": 13,
                        "name": "초코"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "product7",
        "description": "남여공용",
        "SKU": 11643,
        "releasePrice": 9000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 7,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 7,
                "category": {
                    "id": 7,
                    "name": "블루라이트 차단"
                }
            }
        ],
        "options": [
            {
                "id": 7,
                "name": "사이즈",
                "keyword": [
                    {
                        "id": 14,
                        "name": "S"
                    },
                    {
                        "id": 15,
                        "name": "M"
                    },
                    {
                        "id": 16,
                        "name": "L"
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "product8",
        "description": "고사양",
        "SKU": 80012,
        "releasePrice": 500000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 8,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 8,
                "category": {
                    "id": 8,
                    "name": "고사양"
                }
            }
        ],
        "options": [
            {
                "id": 8,
                "name": "사양",
                "keyword": [
                    {
                        "id": 17,
                        "name": "GTX2060"
                    },
                    {
                        "id": 18,
                        "name": "GTX2060TI"
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "name": "product9",
        "description": "최신",
        "SKU": 60012,
        "releasePrice": 400000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 9,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 9,
                "category": {
                    "id": 8,
                    "name": "고사양"
                }
            }
        ],
        "options": [
            {
                "id": 9,
                "name": "사양",
                "keyword": [
                    {
                        "id": 19,
                        "name": "128GB"
                    },
                    {
                        "id": 20,
                        "name": "256GB"
                    }
                ]
            },
            {
                "id": 11,
                "name": "색상",
                "keyword": [
                    {
                        "id": 23,
                        "name": "실버"
                    },
                    {
                        "id": 24,
                        "name": "스페이스 그레이"
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "name": "product10",
        "description": "최신",
        "SKU": 20012,
        "releasePrice": 150000,
        "quantity": 100,
        "status": {
            "id": 2,
            "name": true
        },
        "image": [
            {
                "id": 10,
                "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"
            }
        ],
        "productCategory": [
            {
                "id": 10,
                "category": {
                    "id": 10,
                    "name": "청결"
                }
            }
        ],
        "options": [
            {
                "id": 10,
                "name": "종류",
                "keyword": [
                    {
                        "id": 21,
                        "name": "가정용"
                    },
                    {
                        "id": 22,
                        "name": "회사용"
                    }
                ]
            }
        ]
    }
];

@injectable()
export default class ProductApiImpl implements ProductApi {
    getProducts(): Promise<Entity.Product[]> {
        return new Promise((resolve, reject) => {
			axios.get('http://192.168.43.126:3000/product/list')
			.then((res:any) => {
				resolve(res.data);
			})
			.catch(err => reject(err));
        });
    }
}
