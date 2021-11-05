import { inject, injectable } from "inversify";
import * as Entity from "domain/entity";
import { CartApi } from "data/remote";
import { CartRepository } from "domain/interactor/repository";

@injectable()
export default class CartRepositoryImpl implements CartRepository {
    private cartApi: CartApi;

    constructor(@inject("CartApi") cartApi: CartApi) {
        this.cartApi = cartApi;
    }

    postCartItem(product : Entity.Cart): Promise<Entity.Cart> {
        return this.cartApi.postCartItem(product);
    }

    getCartList(): Promise<Entity.Cart[]> {
        return this.cartApi.getCartList();
    }

    deleteCartItem(productId : Entity.Cart): Promise<Entity.Cart> {
        return this.cartApi.deleteCartItem(productId);
    }
}