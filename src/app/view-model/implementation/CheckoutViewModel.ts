import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { CheckoutViewModel } from "app/view-model";
import { UCGetProducts, UCGetCategories, UCGetCartList, UCDeleteCartItem } from "domain/use-case";

@injectable()
export default class CheckoutViewModelImpl implements CheckoutViewModel {
    private getProducts: UCGetProducts;
    private getCategories: UCGetCategories;
    private getCart: UCGetCartList;
    private deleteCart: UCDeleteCartItem;
    

    constructor(@inject("UCGetCategories") getCategories: UCGetCategories, 
                @inject("UCGetProducts") getProducts: UCGetProducts, 
                @inject("UCGetCartList") getCart: UCGetCartList,
                @inject("UCDeleteCartItem") deleteCart: UCDeleteCartItem) {
        this.getProducts = getProducts;
        this.getCategories = getCategories;
        this.getCart = getCart;
        this.deleteCart = deleteCart;
    }

    getProductList(): Promise<Entity.Product[]> {
        return this.getProducts.execute();
    }

    clickAllCategories(): Promise<Entity.Category[]> {
        return this.getCategories.execute();
    }

    getCartList(): Promise<Entity.Cart[]> {
        return this.getCart.execute();
    }
    
    clickDeleteCartItem(productId: number | number): Promise<void> {
        return this.deleteCart.execute(productId);
    }
}