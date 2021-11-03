import * as Entity from "domain/entity";

export interface UserApi {
    getUser(): Promise<Entity.User>;
}
