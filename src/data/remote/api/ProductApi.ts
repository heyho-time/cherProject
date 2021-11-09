import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { injectable } from "inversify";
// import Axios from "axios";
//import * as ApiManager from "data/remote/ApiManager";

const products:Entity.Product[] = [
	{
		"id": "uuid",
		"image": ["url", "url", "url"],
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
		"id": "uuid",
		"image": ["url", "url", "url"],
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
