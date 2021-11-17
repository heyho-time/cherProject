import * as Entity from "domain/entity";

export interface UCGetProducts {
    execute(): Promise<Entity.Product[]>;
}

export interface UCPostAccount {
    execute(account: Entity.User): Promise<Entity.User>;
}

export interface UCGetCategories {
    execute(): Promise<Entity.Category[]>;
}

export interface UCPostCartItem {
    execute(product: object): Promise<void>;
}

export interface UCGetCartList {
    execute(): Promise<Entity.Cart[]>;
}

export interface UCDeleteCartItem {
    execute(productId: string): Promise<void>;
}

export interface UCPostNewCategory {
    execute(categoryName: object): Promise<object>;
}

export interface UCPostProductsByCategory {
    execute(products: object[]): Promise<void>;
}

export interface UCGetProductsByCategory {
    execute(categoryId : string): Promise<Entity.Category>;
}

export interface UCPatchProductsByCategory {
    execute(products: object): Promise<void>;
}

export interface UCDeleteCategory {
    execute(categoryId: string): Promise<void>;
}