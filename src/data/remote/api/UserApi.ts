import * as Entity from "domain/entity";
import { UserApi } from "data/remote";
import { injectable } from "inversify";
import axios from "axios";

@injectable()
export default class UserApiImpl implements UserApi {
    postAccount(account : Entity.User): Promise<object> {
        return new Promise((resolve, reject) => {
            axios.post('http://192.168.43.126:3000/user/login', {
                "email": account.email,
                "password": account.password
            })
            .then(response => {
                resolve(response.data.token);
            })
            .catch(error => {
                reject(error);
            })
        });
    }
}