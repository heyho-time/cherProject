import * as Entity from "domain/entity";

export interface ProductApi {
    getProducts(): Promise<Entity.Product[]>;
}

export interface UserApi {
    postAccount(account : Entity.User): Promise<Entity.User>;
}

export interface CategoryApi {
    getCategories(): Promise<Entity.Category[]>;
    postNewCategory(categoryName : object): Promise<object>;
    postProductsByCategory(products : object[]): Promise<void>;
    getProductsByCategory(categoryId: string): Promise<Entity.Category>;
    patchProductsByCategory(products : object): Promise<void>;
    deleteCategory(categoryId : string): Promise<void>;
}

export interface CartApi {
    postCartItem(product : object): Promise<void>;
    getCartList(): Promise<Entity.Cart[]>;
    deleteCartItem(productId : string): Promise<void>;
}