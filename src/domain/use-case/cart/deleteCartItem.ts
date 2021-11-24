import { inject, injectable } from "inversify";
import { CartRepository } from "domain/interactor/repository";
import { UCDeleteCartItem } from "..";

@injectable()
export default class UCDeleteCartItemImpl implements UCDeleteCartItem {
    private cartRepository: CartRepository;

    constructor(@inject("CartRepository") cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    execute(productId : number): Promise<void> {
        return this.cartRepository.deleteCartItem(productId);
    }
}
