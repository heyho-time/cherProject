import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCPatchCategoryName } from "..";

@injectable()
export default class UCPatchCategoryNameImpl implements UCPatchCategoryName {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(categoryId: number, categoryName: string): Promise<void> {
        return this.categoryRepository.patchCategoryName(categoryId, categoryName);
    }
}
