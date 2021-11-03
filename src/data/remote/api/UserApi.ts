import * as Entity from "domain/entity";
import { UserApi } from "data/remote";
import { injectable } from "inversify";
//import * as ApiManager from "data/remote/ApiManager";

@injectable()
export default class UserApiImpl implements UserApi {
    getUser(): Promise<Entity.User> {
        return new Promise(() => {});
    }
}
