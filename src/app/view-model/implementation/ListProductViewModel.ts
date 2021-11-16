import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UCGetProducts } from "domain/use-case";
import { ListProductViewModel } from "app/view-model";

@injectable()
export default class ListProductViewModelImpl implements ListProductViewModel {
    private getProducts: UCGetProducts;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts) {
        this.getProducts = getProducts;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }
}