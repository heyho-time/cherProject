import * as Entity from "domain/entity";

export interface UCGetUser {
    execute(): Promise<Entity.User>;
}
