import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCPatchProductsByCategory } from "..";

@injectable()
export default class UCPatchProductsByCategoryImpl implements UCPatchProductsByCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(products: object): Promise<void> {
        return this.categoryRepository.patchProductsByCategory(products);
    }
}
