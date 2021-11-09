import * as Entity from "domain/entity";

export interface UCGetProducts {
    execute(): Promise<Entity.Product[]>;
}