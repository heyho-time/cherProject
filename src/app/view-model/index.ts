import * as Entity from "domain/entity";

export interface ProductViewModel {
    getProductList() : Promise<Entity.Product[]>;
}

export interface UserViewModel {
    clickSignIn: (account: Entity.User) => Promise<Entity.User>;
}

export interface CategoryViewModel {
    getCategory(): Promise<Entity.Category[]>;
}

export interface CheckoutViewModel {
    clickAllCategories(): Promise<Entity.Category[]>;
    getProductList(): Promise<Entity.Product[]>;
    getCartList(): Promise<Entity.Cart[]>;
    clickDeleteCartItem(productId: string): Promise<void>;
}

export interface ProductOptionViewModel {
    clickAddToCheckout(product: object): Promise<void>;
}

export interface EditOptionViewModel {
    clickSaveOptions(product: object): Promise<void>;
    clickRemoveCheckout(cartId: string): Promise<void>; 
}

export interface CategoryListViewModel {
    getCategoryList(): Promise<Entity.Category[]>;
}

export interface EditCategoryViewModel {
    getProductList(): Promise<Entity.Product[]>;
    getProductsByCategory(categoryId : string): Promise<Entity.Category>;
    modifyProductsByCategory(products: object): Promise<void>;
    removeCategory(categoryId: string): Promise<void>;
}

export interface AddCategoryViewModel {
    getProductList(): Promise<Entity.Product[]>;
    addNewCategory(categoryName: object): Promise<object>;
    addProductsByCategory(products: object[]): Promise<void>;
}