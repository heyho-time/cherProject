import * as Entity from "domain/entity";

export interface ProductRepository {
    getProducts(): Promise<Entity.Product[]>;
}

export interface UserRepository {
    postAccount(account: Entity.User): Promise<object>;
}

export interface CategoryRepository {
    getCategories(): Promise<Entity.Category[]>;
    postNewCategory(categoryName: object): Promise<object>;
    postProductsByCategory(products: object[]): Promise<void>;
    getProductsByCategory(categoryId : string): Promise<object>;
    patchProductsByCategory(products : object): Promise<void>;
    deleteCategory(categoryId : string): Promise<void>;
}

export interface CartRepository {
    getCartList(): Promise<Entity.Cart[]>;
    postCartItem(product: object): Promise<void>;
    deleteCartItem(productId: number | string): Promise<void>;
}