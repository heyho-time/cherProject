import * as Entity from "domain/entity";

export interface ProductViewModel {
    getProductList() : Promise<Entity.Product[]>;
}

export interface UserViewModel {
    clickSignIn: (account: Entity.User) => Promise<object>;
}

export interface CategoryViewModel {
    getCategory(): Promise<Entity.Category[]>;
}

export interface CheckoutViewModel {
    getProductList(): Promise<Entity.Product[]>;
    clickAllCategories(): Promise<Entity.Category[]>;
    getCartList(): Promise<Entity.Cart[]>;
    clickDeleteCartItem(productId: number | string): Promise<void>;
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
    removeCategory(categoryId: string): Promise<void>;
    editCategoryName(categoryId: number, categoryName: string): Promise<void>;
    getProductsByCategory(categoryId : string): Promise<object>;
    editProductsByCategory(products: object[]): Promise<void>;
    removeProductByCategory(product: object): Promise<void>;
}

export interface AddCategoryViewModel {
    getProductList(): Promise<Entity.Product[]>;
    addProductsByCategory(products: object): Promise<void>;
}