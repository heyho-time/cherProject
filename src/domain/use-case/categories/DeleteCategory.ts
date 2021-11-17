import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCDeleteCategory } from "..";

@injectable()
export default class UCDeleteCategoryImpl implements UCDeleteCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(categoryId: string): Promise<void> {
        return this.categoryRepository.deleteCategory(categoryId);
    }
}
