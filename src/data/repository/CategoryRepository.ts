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

    postNewCategory(categoryName: object): Promise<object> {
        return this.categoryApi.postNewCategory(categoryName);
    }

    postProductsByCategory(products: object[]): Promise<void> {
        return this.categoryApi.postProductsByCategory(products);
    }

    getProductsByCategory(categoryId : string): Promise<object> {
        return this.categoryApi.getProductsByCategory(categoryId);
    }

    patchProductsByCategory(products: object): Promise<void> {
        return this.categoryApi.patchProductsByCategory(products);
    }

    deleteCategory(categoryId: string): Promise<void> {
        return this.categoryApi.deleteCategory(categoryId);
    }
}