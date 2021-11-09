import * as Entity from "domain/entity";

export interface UserViewModel {
    list: () => Promise<Entity.Product[]>;
}
