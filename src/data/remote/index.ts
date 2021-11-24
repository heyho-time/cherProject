import * as Entity from "domain/entity";

export interface ProductApi {
    getProducts(): Promise<Entity.Product[]>;
}

export interface UserApi {
    postAccount(account : Entity.User): Promise<object>;
}

export interface CategoryApi {
    getCategories(): Promise<Entity.Category[]>;
    postNewCategory(categoryName : object): Promise<object>;
    postProductsByCategory(products : object[]): Promise<void>;
    getProductsByCategory(categoryId: string): Promise<object>;
    patchProductsByCategory(products : object): Promise<void>;
    deleteCategory(categoryId : string): Promise<void>;
}

export interface CartApi {
    getCartList(): Promise<Entity.Cart[]>;
    postCartItem(product : object): Promise<void>;
    deleteCartItem(productId : number | string): Promise<void>;
}