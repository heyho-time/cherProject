import * as Entity from "domain/entity";

export interface UserViewModel {
    clickUser: () => Promise<Entity.User>;
}
