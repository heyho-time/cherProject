import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { EditCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCGetProductsByCategory, UCPatchProductsByCategory, UCDeleteCategory } from "domain/use-case";

@injectable()
export default class EditCategoryViewModelImpl implements EditCategoryViewModel {
    private getProducts: UCGetProducts;
    private getProductsCategory: UCGetProductsByCategory;
    private patchProductsCategory: UCPatchProductsByCategory;
    private deleteCategory: UCDeleteCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCGetProductsByCategory") getProductsByCategory: UCGetProductsByCategory, 
                @inject("UCPatchProductsByCategory") patchProductsByCategory: UCPatchProductsByCategory,
                @inject("UCDeleteCategory") deleteCategory: UCDeleteCategory) {
        this.getProducts = getProducts;
        this.getProductsCategory = getProductsByCategory;
        this.patchProductsCategory = patchProductsByCategory;
        this.deleteCategory = deleteCategory;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    getProductsByCategory(categoryId : string): Promise<Entity.Category> {
        return this.getProductsCategory.execute(categoryId);
    }

    modifyProductsByCategory(products: object): Promise<void> {
        return this.patchProductsCategory.execute(products);
    }

    removeCategory(categoryId: string): Promise<void> {
        return this.deleteCategory.execute(categoryId);
    }
    
}
