import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { CartRepository } from "domain/interactor/repository";
import { UCGetCartList } from "..";

@injectable()
export default class UCGetCartListImpl implements UCGetCartList {
    private cartRepository: CartRepository;

    constructor(@inject("CartRepository") cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    execute(): Promise<Entity.Cart[]> {
        return this.cartRepository.getCartList();
    }
}
