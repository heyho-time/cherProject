import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UCGetProducts } from "domain/use-case";
import { ProductViewModel } from "app/view-model";

@injectable()
export default class UserViewModelImpl implements ProductViewModel {
    private getProducts: UCGetProducts;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts) {
        this.getProducts = getProducts;
    }

    list(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }
}
