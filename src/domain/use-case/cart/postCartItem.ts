import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { CartRepository } from "domain/interactor/repository";
import { UCPostCartItem } from "..";

@injectable()
export default class UCPostCartItemImpl implements UCPostCartItem {
    private cartRepository: CartRepository;

    constructor(@inject("CartRepository") cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    execute(product : Entity.Cart): Promise<Entity.Cart> {
        return this.cartRepository.postCartItem(product);
    }
}
