import * as Entity from "domain/entity";

export interface ProductApi {
    getProducts(): Promise<Entity.Product[]>;
}