import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UserViewModel } from "app/view-model";
import { UCGetUser } from "domain/use-case";

@injectable()
export default class UserViewModelImpl implements UserViewModel {
    private getUser: UCGetUser;

    constructor(@inject("UCGetUser") getUser: UCGetUser) {
        this.getUser = getUser;
    }

    clickUser(): Promise<Entity.User> {
        return this.getUser.execute();
    }
}
