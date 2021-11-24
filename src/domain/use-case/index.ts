import * as Entity from "domain/entity";

export interface UCGetProducts {
    execute(): Promise<Entity.Product[]>;
}

export interface UCPostAccount {
    execute(account: Entity.User): Promise<object>;
}

export interface UCGetCategories {
    execute(): Promise<Entity.Category[]>;
}

export interface UCGetCartList {
    execute(): Promise<Entity.Cart[]>;
}

export interface UCPostCartItem {
    execute(product: object): Promise<void>;
}

export interface UCDeleteCartItem {
    execute(productId: number | string): Promise<void>;
}

export interface UCGetProductsByCategory {
    execute(categoryId : string): Promise<object>;
}

export interface UCPostProductsByCategory {
    execute(products: object): Promise<void>;
}

export interface UCPatchProductsByCategory {
    execute(products: object): Promise<void>;
}

export interface UCDeleteCategory {
    execute(categoryId: string): Promise<void>;
}

export interface UCDeleteProductByCategory {
    execute(product: object): Promise<void>;
}

export interface UCPatchCategoryName {
    execute(categoryId: number, categoryName: string): Promise<void>;
}