import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { ProductOptionViewModel } from "app/view-model";
import { UCPostCartItem } from "domain/use-case";

@injectable()
export default class ProductOptionViewModelImpl implements ProductOptionViewModel {
    private postCartItem: UCPostCartItem;
    

    constructor(@inject("UCPostCartItem") postCartItem: UCPostCartItem) {
        this.postCartItem = postCartItem;
    }

    clickAddToCheckout(product : object): Promise<void> {
       return this.postCartItem.execute(product);
    }
}
