import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { AddCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCPostNewCategory, UCPostProductsByCategory } from "domain/use-case";

@injectable()
export default class AddCategoryViewModelImpl implements AddCategoryViewModel {
    private getProducts: UCGetProducts;
    private postCategory: UCPostNewCategory;
    private postProductsCategory: UCPostProductsByCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCPostNewCategory") postNewCategory: UCPostNewCategory,
                @inject("UCPostProductsByCategory") postProductsByCategory: UCPostProductsByCategory){
        this.getProducts = getProducts;
        this.postCategory = postNewCategory;
        this.postProductsCategory = postProductsByCategory;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    addNewCategory(categoryName: object): Promise<object> {
        return this.postCategory.execute(categoryName);
    }

    addProductsByCategory(products: object[]): Promise<void> {
        return this.postProductsCategory.execute(products);
    }
}