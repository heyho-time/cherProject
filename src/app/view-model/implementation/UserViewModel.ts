import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UCGetProducts } from "domain/use-case";
import { UserViewModel } from "app/view-model";

@injectable()
export default class UserViewModelImpl implements UserViewModel {
    private getProducts: UCGetProducts;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts) {
        this.getProducts = getProducts;
    }

    list(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }
}
