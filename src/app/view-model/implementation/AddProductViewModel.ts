import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { AddProductViewModel } from "app/view-model";
import { UCPostProducts } from "domain/use-case";

@injectable()
export default class AddProductViewModelImpl implements AddProductViewModel {
    private postProduct: UCPostProducts;

    constructor(@inject("UCPostProducts") postProduct: UCPostProducts) {
        this.postProduct = postProduct;
    }

    clickSave(product : Entity.Product) : Promise<Entity.Product> {
        return this.postProduct.execute(product);
    }
}