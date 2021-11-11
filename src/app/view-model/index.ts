import * as Entity from "domain/entity";

export interface ProductViewModel {
    list() : Promise<Entity.Product[]>;
}
