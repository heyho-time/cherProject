import * as Entity from "domain/entity";
import { CategoryApi } from "data/remote";
import { injectable } from "inversify";
// import axios from "axios";
// import * as ApiManager from "data/remote/ApiManager";

const Categories : Entity.Category[] = [
    {
        "id": "1",
        "name": "Sweets",
        "productIds": ["uuid", "oopp", "uupd", "ootd", "ttip"]
    },
    {
        "id": "2",
        "name": "Snacks",
        "productIds": ["uuid", "uupd", "ttip"]
    },
    {
        "id": "3",
        "name": "Candies",
        "productIds": ["oopp", "ootd"]
    },
    {
        "id": "4",
        "name": "Vetetables",
        "productIds": []
    }
]

@injectable()
export default class CategoryApiImpl implements CategoryApi {
    getCategories() : Promise<Entity.Category[]> {
        return new Promise((resolve, reject) => {
            const categories : Entity.Category[] = Categories;
            resolve(categories);

            // axios.get('')
            // .then((res : any) => resolve(res))
            // .catch(() => reject("error"))
        })
    }
}