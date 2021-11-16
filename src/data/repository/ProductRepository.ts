import { inject, injectable } from "inversify";
import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { ProductRepository } from "domain/interactor/repository";

@injectable()
export default class ProductRepositoryImplent implements ProductRepository {
    private productApi: ProductApi;

    constructor(@inject("ProductApi") productApi: ProductApi) {
        this.productApi = productApi;
    }

    getProducts(): Promise<Entity.Product[]> {
        return this.productApi.getProducts();
    }

    postAddProductInfo(Product : Entity.Product) : Promise<Entity.Product>{
        return this.productApi.postAddProductInfo(Product);
    }
}