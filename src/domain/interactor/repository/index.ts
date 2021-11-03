import * as Entity from "domain/entity";

export interface UserRepository {
    getUser(): Promise<Entity.User>;
}
