import * as Entity from "domain/entity";

export interface ProductRepository {
    getProducts(): Promise<Entity.Product[]>;
}

export interface UserRepository {
    postAccount(account: Entity.User): Promise<Entity.User>;
}

export interface CategoryRepository {
    getCategories(): Promise<Entity.Category[]>;
}

export interface CartRepository {
    postCartItem(product: Entity.Cart): Promise<Entity.Cart>;
    getCartList(): Promise<Entity.Cart[]>;
    deleteCartItem(productId: Entity.Cart): Promise<Entity.Cart>;
}