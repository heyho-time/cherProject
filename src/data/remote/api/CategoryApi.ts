import * as Entity from "domain/entity";
import { CategoryApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";
// import * as ApiManager from "data/remote/ApiManager";

const Categories : Entity.Category[] = [
    {
        "id": "1",
        "name": "Sweets",
        "products": 
        [
            {
                "id": "uuid",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}, {"id": "3", "name" : "pink"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
            {
                "id": "oopp",
                "image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
                "title": "chocolate",
                "categoryIds" : ["1", "3"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUB"},
                    "state": {"tax" : false, "soldOut" : false, "avail" : 10},
                                "option": [
                                {
                                        "id": "uuid",
                                        "name": "color",
                                        "tag": [{"id": "uuid", "name": "blue"}, {"id": "uuid", "name": "gray"}]
                                    },
                                    {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                            }
            },
            {
                "id": "uuia",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "url", "url"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
            {
                "id": "oopt",
                "image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
                "title": "chocolate",
                "categoryIds" : ["1", "3"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUB"},
                    "state": {"tax" : false, "soldOut" : false, "avail" : 10},
                                "option": [
                                    {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                            }
            },
            {
                "id": "upto",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "url", "url"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
        ]
    },
    {
        "id": "2",
        "name": "Snacks",
        "products":
        [
            {
                "id": "uuid",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}, {"id": "3", "name" : "pink"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
            {
                "id": "uuia",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "url", "url"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
            {
                "id": "upto",
                "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "url", "url"],
                "title": "cookie",
                "categoryIds" : ["1", "2"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUA"},
                    "state": {"tax" : true, "soldOut" : false, "avail" : 20},
                    "option": [
                                {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                }
            },
        ]
    },
    {
        "id": "3",
        "name": "Candies",
        "products": 
        [
	
            {
                "id": "oopp",
                "image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
                "title": "chocolate",
                "categoryIds" : ["1", "3"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUB"},
                    "state": {"tax" : false, "soldOut" : false, "avail" : 10},
                                "option": [
                                {
                                        "id": "uuid",
                                        "name": "color",
                                        "tag": [{"id": "uuid", "name": "blue"}, {"id": "uuid", "name": "gray"}]
                                    },
                                    {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                            }
            },
            
            {
                "id": "oopt",
                "image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
                "title": "chocolate",
                "categoryIds" : ["1", "3"],
                "productDetail": {
                    "price": 5000,
                    "description": "A versatile, double stacked patch cable. For eurorack use only.",
                    "inventory": { "stock": 420, "sku": "SKUB"},
                    "state": {"tax" : false, "soldOut" : false, "avail" : 10},
                                "option": [
                                    {
                                        "id": "1",
                                        "name": "color",
                                        "tag": [{"id": "1", "name": "blue"}, {"id": "2", "name": "gray"}]
                                    },
                                    {
                                        "id": "2",
                                        "name": "size",
                                        "tag": [{"id": "1", "name": "Large"}, {"id": "2", "name": "Medium"}]
                                    }
                                ]
                            }
            },
        ]
    },
    {
        "id": "4",
        "name": "Vetetables",
        "products": []
    }
]

@injectable()
export default class CategoryApiImpl implements CategoryApi {
    getCategories() : Promise<Entity.Category[]> {
        return new Promise((resolve, reject) => {
            axios.get('http://192.168.43.127:3000/category')
            .then(res => {
                resolve(res.data)
            })
            .catch(() => reject("error"))
        })
    }

    postNewCategory(categoryName: object): Promise<object> {
        return new Promise((resolve, reject) => {
            console.log(categoryName);

            axios.post('http://192.168.43.127:3000/category', categoryName, 
            {
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnb29nbGVAZ29vZ2xlLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHAyLnk3azhMcG5sODQ3cGpkWWRNNnVuSlJEd0xHYm1mT05SODkybEhYZzFUUWg2U3VIVDYyIiwiY2xlYXJhbmNlIjp0cnVlLCJpYXQiOjE2Mzc1ODA4NDF9.KFnK4BHwerzJg4s3MmVDdSeVana2FTEvGRR5xiI2vww'
                }
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
        })
    }

    postProductsByCategory(products: object[]): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log(products);

            axios.post('http://192.168.43.127:3000/product-category', products,  
            {
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnb29nbGVAZ29vZ2xlLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHAyLnk3azhMcG5sODQ3cGpkWWRNNnVuSlJEd0xHYm1mT05SODkybEhYZzFUUWg2U3VIVDYyIiwiY2xlYXJhbmNlIjp0cnVlLCJpYXQiOjE2Mzc1ODA4NDF9.KFnK4BHwerzJg4s3MmVDdSeVana2FTEvGRR5xiI2vww'
                }
            })
            .then((res: any) => {
                resolve(res);
            })
            .catch(err => reject(err));
        })
    }

    getProductsByCategory(categoryId: string): Promise<object> {
        return new Promise((resolve, reject) => {
            axios.get(`http://192.168.43.127:3000/category/${categoryId}`, 
            {
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnb29nbGVAZ29vZ2xlLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHAyLnk3azhMcG5sODQ3cGpkWWRNNnVuSlJEd0xHYm1mT05SODkybEhYZzFUUWg2U3VIVDYyIiwiY2xlYXJhbmNlIjp0cnVlLCJpYXQiOjE2Mzc1ODA4NDF9.KFnK4BHwerzJg4s3MmVDdSeVana2FTEvGRR5xiI2vww'
                }
            })
            .then(res => resolve(res.data[0]))
            .catch(err => reject(err));
        })
    }

    patchProductsByCategory(products: object): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log(products);

            axios.patch(`http://192.168.43.127:3000/category/${categoryId}`, products, 
            {
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnb29nbGVAZ29vZ2xlLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHAyLnk3azhMcG5sODQ3cGpkWWRNNnVuSlJEd0xHYm1mT05SODkybEhYZzFUUWg2U3VIVDYyIiwiY2xlYXJhbmNlIjp0cnVlLCJpYXQiOjE2Mzc1ODA4NDF9.KFnK4BHwerzJg4s3MmVDdSeVana2FTEvGRR5xiI2vww'
                }
            })
            .then((res:any) => resolve(res))
            .catch(err => reject(err));
        })
    }

    
    deleteCategory(categoryId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            axios.delete(`http://192.168.43.127:3000/category/${categoryId}`, 
            {
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJnb29nbGVAZ29vZ2xlLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHAyLnk3azhMcG5sODQ3cGpkWWRNNnVuSlJEd0xHYm1mT05SODkybEhYZzFUUWg2U3VIVDYyIiwiY2xlYXJhbmNlIjp0cnVlLCJpYXQiOjE2Mzc1ODA4NDF9.KFnK4BHwerzJg4s3MmVDdSeVana2FTEvGRR5xiI2vww'
                }
            })
            .then((res:any) => resolve(res))
            .catch(err => reject(err));
        })
    }
    
}