import * as Entity from "domain/entity";

export interface ProductRepository {
    getProducts(): Promise<Entity.Product[]>;
}

export interface UserRepository {
    postAccount(account: Entity.User): Promise<object>;
}

export interface CategoryRepository {
    getCategories(): Promise<Entity.Category[]>;
    deleteCategory(categoryId : string): Promise<void>;
    patchCategoryName(categoryId: number, categoryName: string): Promise<void>;
    getProductsByCategory(categoryId : string): Promise<object>;
    postProductsByCategory(products: object): Promise<void>;
    deleteProductByCategory(product: object): Promise<void>
    patchProductsByCategory(products : object): Promise<void>;
}

export interface CartRepository {
    getCartList(): Promise<Entity.Cart[]>;
    postCartItem(product: object): Promise<void>;
    deleteCartItem(productId: number | string): Promise<void>;
}