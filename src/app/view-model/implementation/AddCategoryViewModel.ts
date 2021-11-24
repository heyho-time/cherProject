import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { AddCategoryViewModel } from "app/view-model";
import { UCGetProducts, UCPostProductsByCategory } from "domain/use-case";

@injectable()
export default class AddCategoryViewModelImpl implements AddCategoryViewModel {
    private getProducts: UCGetProducts;
    private postProductsCategory: UCPostProductsByCategory;

    constructor(@inject("UCGetProducts") getProducts: UCGetProducts,
                @inject("UCPostProductsByCategory") postProducts: UCPostProductsByCategory){
        this.getProducts = getProducts;
        this.postProductsCategory = postProducts;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    addProductsByCategory(products: object): Promise<void> {
        return this.postProductsCategory.execute(products);
    }
}