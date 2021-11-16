import * as Entity from "domain/entity";
import { CartApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";
// import * as ApiManager from "data/remote/ApiManager";

const cartProducts:Entity.Cart[] = [
    {
        "id": "1",
        "productId": "uuid",
        "image": ["https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg", "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"],
		"title": "cookie",
        "price": 5000,
        "quantity": 3,
        "option": [
            {
                "id": "1",
                "name": "color",
                "tag": [{"id": "2", "name": "Gray"}]
            },
            {
                "id": "2",
                "name": "size",
                "tag": [{"id": "1", "name": "Large"}]
            },
        ],
    },
    {
        "id": "2",
        "productId": "oopp",
        "image": ["https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3OTk5Njc1MTU5MjI1OTY1/valentines-day-chocolate-gettyimages-923430892.jpg", "url", "url"],
		"title": "chocolate",
        "price": 3000,
        "quantity": 5,
        "option": [
            {
                "id": "1",
                "name": "color",
                "tag": [{"id": "1", "name": "Blue"}]
            },
            {
                "id": "2",
                "name": "size",
                "tag": [{"id": "2", "name": "Medium"}]
            },
        ],
    }
]

@injectable()
export default class CartApiImpl implements CartApi {
    postCartItem(product : Entity.Cart): Promise<Entity.Cart> {
        return new Promise((resolve, reject) => {
            //resolve(product);

            //reject("error");

            // axios.post('http://localhost:3000/user', {
            //     "id": product.id,
            //     "quantity": product.quantity,
            //     "option": [
            //         {
            //             "id": "1",
            //             "tag": [{"id": "1"}]
            //         },
            //         {
            //             "id": "2",
            //             "tag": [{"id": "2"}]
            //         }
            //     ]
            // })
            // .then((response : any) => {
            //     resolve(response);
            // })
            // .catch(error => {
            //     reject(error);
            // })
        });
    }

    getCartList(): Promise<Entity.Cart[]> {
        return new Promise((resolve, reject) => {
            const cartList: Entity.Cart[] = cartProducts;

			resolve(cartList);
        })
    }

    deleteCartItem(productId : Entity.Cart): Promise<Entity.Cart> {
        return new Promise((resolve, reject) => {
            resolve(productId);
            // axios.post('http://localhost:3000/user', {
            //     "id": productId,
            // })
            // .then((response : any) => {
            //     resolve(response);
            // })
            // .catch(error => {
            //     reject(error);
            // })
        });
    }
}