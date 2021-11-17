import { inject, injectable } from "inversify";
import { EditOptionViewModel } from "app/view-model";
import { UCDeleteCartItem, UCPostCartItem } from "domain/use-case";

@injectable()
export default class EditOptionViewModelImpl implements EditOptionViewModel {
    private postCartItem: UCPostCartItem;
    private deleteCartItem: UCDeleteCartItem;

    constructor(@inject("UCPostCartItem") postCartItem: UCPostCartItem, @inject("UCDeleteCartItem") deleteCartItem: UCDeleteCartItem) {
        this.postCartItem = postCartItem;
        this.deleteCartItem = deleteCartItem;
    }

    clickSaveOptions(product : object): Promise<void> {
       return this.postCartItem.execute(product);
    }

    clickRemoveCheckout(cartId: string): Promise<void> {
        return this.deleteCartItem.execute(cartId);
    }
}
