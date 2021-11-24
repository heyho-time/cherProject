import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCDeleteProductByCategory } from "..";

@injectable()

export default class UCDeleteProductByCategoryImpl implements UCDeleteProductByCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(product: object): Promise<void> {
        return this.categoryRepository.deleteProductByCategory(product);
    }
}