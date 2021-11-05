import { inject, injectable } from "inversify";
import * as Entity from "domain/entity";
import { ProductApi } from "data/remote";
import { ProductRepository } from "domain/interactor/repository";

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {
    private productApi: ProductApi;

    constructor(@inject("ProductApi") productApi: ProductApi) {
        this.productApi = productApi;
    }

    getProducts(): Promise<Entity.Product> {
        return this.productApi.getProducts();
    }
}