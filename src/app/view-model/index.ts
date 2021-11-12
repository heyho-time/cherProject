import * as Entity from "domain/entity";

export interface ListProductViewModel {
    getProductList() : Promise<Entity.Product[]>;
}

export interface AddProductViewModel {
    clickSave : (product: Entity.Product) => Promise<Entity.Product>;
}

export interface ProductViewModel {
    getProductList() : Promise<Entity.Product[]>;
}
export interface UserViewModel {
    clickSignIn: (account: Entity.User) => Promise<Entity.User>;
}
export interface CategoryViewModel {
    getCategory(): Promise<Entity.Category[]>;
}
export interface CheckoutViewModel {
    getCategory(): Promise<Entity.Category[]>;
    getProductList(): Promise<Entity.Product[]>;
    getCartList(): Promise<Entity.Cart[]>;
    deleteCartItem(productId: Entity.Cart): Promise<Entity.Cart>;
}
export interface ProductOptionViewModel {
    clickAddToCheckout(product: Entity.Cart): Promise<Entity.Cart>;
}