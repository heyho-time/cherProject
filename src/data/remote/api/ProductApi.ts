import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { injectable } from "inversify";
// import Axios from "axios";
//import * as ApiManager from "data/remote/ApiManager";

const products:Entity.Product[] = [
	{
		"id": "uuid",
		"image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "url", "url"],
		"price": 5000,
		"title": "cookie",
		"productDetail": {
			"description": "asdfasdfa",
			"categoryIds": [1, 2],
			"inventory": { "stock": 420, "sku": "SKUT"},
			"avail": 20,
			"state": "sold out",
						"option": [
						{
								"id": "uuid",
								"name": "color",
								"tag": [{"id": "uuid", "name": "blue"}, {"id": "uuid", "name": "gray"}]
							},
							{
								"id": "uuid",
								"name": "size",
								"tag": [{"id": "uuid", "name": "Large"}, {"id": "uuid", "name": "Medium"}]
							}
						]
					}
	},
	 {
		"id": "oopp",
		"image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
		"price": 5000,
		"title": "chocolate",
		"productDetail": {
						"description": "asdfasdfa",
			"categoryIds": [1, 2],
			"inventory": { "stock": 420, "sku": "SKUT"},
			"avail": 20,
			"state": "sold out",
						"option": [
							{
								"id": "uuid",
								"name": "color",
								"tag": [{"id": "uuid", "name": "blue"}, {"id": "uuid", "name": "gray"}]
							},
							{
								"id": "uuid",
								"name": "size",
								"tag": [{"id": "uuid", "name": "Large"}, {"id": "uuid", "name": "Medium"}]
							}
						]
					}
	}
];

@injectable()
export default class ProductApiImpl implements ProductApi {
    getProducts(): Promise<Entity.Product[]> {
        return new Promise((resolve) => {
            const product : Entity.Product[] = products;

				resolve(product);

			// Axios.get('')
			// .then(() => {
			// 	resolve(product)
			// })
			// .catch(()=> {
			// 	reject("error")
			// })

        });
    }
}
