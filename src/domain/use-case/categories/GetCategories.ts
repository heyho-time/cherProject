import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCGetCategories } from "..";

@injectable()
export default class UCGetCategoriesImpl implements UCGetCategories {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(): Promise<Entity.Category[]> {
        return this.categoryRepository.getCategories();
    }
}
