import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { EditCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCDeleteCategory, UCPatchCategoryName, UCGetProductsByCategory, UCPatchProductsByCategory, UCDeleteProductByCategory } from "domain/use-case";

@injectable()
export default class EditCategoryViewModelImpl implements EditCategoryViewModel {
    private getProducts: UCGetProducts;
    private deleteCategory: UCDeleteCategory;
    private patchName: UCPatchCategoryName;
    private getProductsCategory: UCGetProductsByCategory;
    private patchProductsByCategory: UCPatchProductsByCategory;
    private deleteProduct: UCDeleteProductByCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCDeleteCategory") deleteCategory: UCDeleteCategory,
                @inject("UCPatchCategoryName") patchName: UCPatchCategoryName,
                @inject("UCGetProductsByCategory") getProductsByCategory: UCGetProductsByCategory, 
                @inject("UCPatchProductsByCategory") patchProductsByCategory: UCPatchProductsByCategory,
                @inject("UCDeleteProductByCategory") deleteProduct: UCDeleteProductByCategory){
        this.getProducts = getProducts;
        this.deleteCategory = deleteCategory;
        this.patchName = patchName;
        this.getProductsCategory = getProductsByCategory;
        this.patchProductsByCategory = patchProductsByCategory;
        this.deleteProduct = deleteProduct;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    removeCategory(categoryId: string): Promise<void> {
        return this.deleteCategory.execute(categoryId);
    }

    editCategoryName(categoryId: number, categoryName: string): Promise<void> {
        return this.patchName.execute(categoryId, categoryName);
    }

    getProductsByCategory(categoryId : string): Promise<object> {
        return this.getProductsCategory.execute(categoryId);
    }

    editProductsByCategory(products: object[]): Promise<void> {
        return this.patchProductsByCategory.execute(products);
    }

    removeProductByCategory(product: object): Promise<void> {
        return this.deleteProduct.execute(product);
    }
}
