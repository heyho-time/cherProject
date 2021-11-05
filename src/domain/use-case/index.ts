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
    execute(product: Entity.Cart): Promise<Entity.Cart>;
}

export interface UCGetCartList {
    execute(): Promise<Entity.Cart[]>;
}

export interface UCDeleteCartItem {
    execute(productId: Entity.Cart): Promise<Entity.Cart>;
}