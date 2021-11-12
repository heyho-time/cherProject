import * as Entity from "domain/entity";

export interface ProductApi {
    getProducts(): Promise<Entity.Product[]>;
    postAddProductInfo(Product : Entity.Product) : Promise<Entity.Product>;
}
export interface UserApi {
    postAccount(account : Entity.User): Promise<Entity.User>;
}
export interface CategoryApi {
    getCategories(): Promise<Entity.Category[]>;
}
export interface CartApi {
    postCartItem(product : Entity.Cart): Promise<Entity.Cart>;
    getCartList(): Promise<Entity.Cart[]>;
    deleteCartItem(productId : Entity.Cart): Promise<Entity.Cart>;
}