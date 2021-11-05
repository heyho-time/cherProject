import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { injectable } from "inversify";
// import Axios from "axios";
//import * as ApiManager from "data/remote/ApiManager";

const products:Entity.Product[] = [
	{
		"id": "uuid",
		"image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"],
		"title": "cookie",
		"categoryIds" : ["1", "2"],
		"productDetail": {
			"price": 5000,
			"description": "A versatile, double stacked patch cable. For eurorack use only.",
			"category" : { "id" : "1" , "name" : "쿠키"},
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
			"category": { "id": "2", "name":"초콜릿"},
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
			"category" : { "id" : "1" , "name" : "쿠키"},
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
			"category": { "id": "2", "name":"초콜릿"},
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
			"category" : { "id" : "1" , "name" : "쿠키"},
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
