import * as Entity from "domain/entity";
import { UserApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";
// import * as ApiManager from "data/remote/ApiManager";

@injectable()
export default class UserApiImpl implements UserApi {
    postAccount(account : Entity.User): Promise<Entity.User> {
        return new Promise((resolve, reject) => {
            //resolve(account);
            //reject("error");

            axios.post('http://192.168.213.20:3000/user/login', {
                "email": account.email,
                "password": account.password
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