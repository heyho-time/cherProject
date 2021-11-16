import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { ProductRepository } from "domain/interactor/repository";
import { UCPostProducts } from "..";

@injectable()
export default class UCPostProductImpl implements UCPostProducts {
    private productRepository: ProductRepository;

    constructor(@inject("ProductRepository") productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    execute(Product : Entity.Product): Promise<Entity.Product> {
        return this.productRepository.postAddProductInfo(Product);
    }
}