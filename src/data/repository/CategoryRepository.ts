import { inject, injectable } from "inversify";
import * as Entity from "domain/entity";
import { CategoryApi } from "data/remote";
import { CategoryRepository } from "domain/interactor/repository";

@injectable()
export default class CategoryRepositoryImplent implements CategoryRepository {
    private categoryApi: CategoryApi;

    constructor(@inject("CategoryApi") categoryApi: CategoryApi) {
        this.categoryApi = categoryApi;
    }

    getCategories(): Promise<Entity.Category[]> {
        return this.categoryApi.getCategories();
    }
}