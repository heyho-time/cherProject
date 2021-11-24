import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { EditCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCGetProductsByCategory, UCPostProductsByCategory, UCDeleteCategory } from "domain/use-case";

@injectable()
export default class EditCategoryViewModelImpl implements EditCategoryViewModel {
    private getProducts: UCGetProducts;
    private getProductsCategory: UCGetProductsByCategory;
    private postProductsCategory: UCPostProductsByCategory;
    private deleteCategory: UCDeleteCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCGetProductsByCategory") getProductsByCategory: UCGetProductsByCategory, 
                @inject("UCPostProductsByCategory") postProductsByCategory: UCPostProductsByCategory,
                @inject("UCDeleteCategory") deleteCategory: UCDeleteCategory) {
        this.getProducts = getProducts;
        this.getProductsCategory = getProductsByCategory;
        this.postProductsCategory = postProductsByCategory;
        this.deleteCategory = deleteCategory;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    getProductsByCategory(categoryId : string): Promise<object> {
        return this.getProductsCategory.execute(categoryId);
    }

    addProductsByCategory(products: object[]): Promise<void> {
        return this.postProductsCategory.execute(products);
    }

    removeCategory(categoryId: string): Promise<void> {
        return this.deleteCategory.execute(categoryId);
    }
}
