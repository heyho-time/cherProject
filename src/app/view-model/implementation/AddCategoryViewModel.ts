import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { AddCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCPostNewCategory } from "domain/use-case";

@injectable()
export default class AddCategoryViewModelImpl implements AddCategoryViewModel {
    private getProducts: UCGetProducts;
    private postCategory: UCPostNewCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCPostNewCategory") postNewCategory: UCPostNewCategory){
        this.getProducts = getProducts;
        this.postCategory = postNewCategory;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    addNewCategory(categoryName: object): Promise<object> {
        return this.postCategory.execute(categoryName);
    }
}