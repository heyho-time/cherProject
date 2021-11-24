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
    postCartItem(product: object): Promise<void>;
    getCartList(): Promise<Entity.Cart[]>;
    deleteCartItem(productId: number): Promise<void>;
}