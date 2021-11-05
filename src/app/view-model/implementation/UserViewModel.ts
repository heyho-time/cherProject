import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UserViewModel } from "app/view-model";
import { UCPostAccount } from "domain/use-case";

@injectable()
export default class UserViewModelImpl implements UserViewModel {
    private postAccount: UCPostAccount;
    

    constructor(@inject("UCPostAccount") postAccount: UCPostAccount) {
        this.postAccount = postAccount;
    }

    clickSignIn(account : Entity.User): Promise<Entity.User> {
       return this.postAccount.execute(account);
    }
}
