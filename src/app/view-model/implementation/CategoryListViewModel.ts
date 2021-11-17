import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { CategoryListViewModel } from "app/view-model";
import { UCGetCategories } from "domain/use-case";

@injectable()
export default class CategoryListViewModelImpl implements CategoryListViewModel {
    private getCategories: UCGetCategories;
    

    constructor(@inject("UCGetCategories") getCategories: UCGetCategories){
        this.getCategories = getCategories;
    }

    getCategoryList(): Promise<Entity.Category[]> {
        return this.getCategories.execute();
    }
}