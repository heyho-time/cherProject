import * as Entity from "domain/entity";
import { CartApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";

const TOKEN = localStorage.getItem("token");
const USER_TOKEN = TOKEN?.slice(1, TOKEN.length-1);

const cartProducts:Entity.Cart[] = [
    {
        "id": 9,
        "quantity": 2,
        "optionKeyword": 'XL',
        "product": {
            "id": 1,
            "name": "product1",
            "quantity": 100,
            "description": "남여공용 맨투맨",
            "SKU": 11456,
            "releasePrice": 20000,
            "createdAt": "2021-11-17T00:11:31.000Z",
            "updatedAt": "2021-11-22T18:26:27.513Z",
            "image": [{"id": 1, "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"}]
        }
    },
    {
        "id": 10,
        "quantity": 3,
        "optionKeyword": 'XL',
        "product": {
            "id": 2,
            "name": "product2",
            "quantity": 90,
            "description": "쿠키스",
            "SKU": 11451,
            "releasePrice": 10000,
            "createdAt": "2021-11-17T00:11:31.000Z",
            "updatedAt": "2021-11-22T18:26:27.513Z",
            "image": [{"id": 1, "imageUrl": "https://www.clym.io/wp-content/uploads/2020/10/website-cookie.jpeg"}]
        }
    }
]

@injectable()
export default class CartApiImpl implements CartApi {
    getCartList(): Promise<Entity.Cart[]> {
        return new Promise((resolve, reject) => {
            axios.get('http://192.168.43.126:3000/cart', 
            {
                headers: {
                    authorization: USER_TOKEN,
                }
            })
            .then((res:any) => {
                resolve(res.data);
            })
            .catch((err : any) => {
                reject(err);
            })
        })
    }

    postCartItem(product : object): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log(product);

            axios.post('http://192.168.43.126:3000/cart', product, 
            {
                headers: {
                    authorization: USER_TOKEN
                }
            })
            .then((response : any) => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
        });
    }

    deleteCartItem(productId : number | string): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log(productId);
            
            axios.delete(`http://192.168.43.126:3000/cart/${typeof productId === 'number' ? productId : ""}`, 
            {
                headers: {
                    authorization: USER_TOKEN
                }
            })
            .then((response : any) => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
        });
    }
}