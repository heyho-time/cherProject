import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCGetProductsByCategory } from "..";

@injectable()
export default class UCGetProductsByCategoryImpl implements UCGetProductsByCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(categoryId : string): Promise<object> {
        return this.categoryRepository.getProductsByCategory(categoryId);
    }
}
