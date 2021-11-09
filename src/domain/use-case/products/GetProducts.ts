import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { ProductRepository } from "domain/interactor/repository";
import { UCGetProducts } from "..";

@injectable()
export default class UCGetProductsImpl implements UCGetProducts {
    private productRepository: ProductRepository;

    constructor(@inject("ProductRepository") productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    execute(): Promise<Entity.Product[]> {
        return this.productRepository.getProducts();
    }
}
