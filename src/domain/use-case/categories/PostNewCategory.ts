import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCPostNewCategory } from "..";

@injectable()
export default class UCPostNewCategoryImpl implements UCPostNewCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(categoryName: object): Promise<object> {
        return this.categoryRepository.postNewCategory(categoryName);
    }
}
