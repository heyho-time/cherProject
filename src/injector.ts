import { Container } from "inversify";

import { UserViewModel, ProductViewModel, CheckoutViewModel, ProductOptionViewModel, EditOptionViewModel, CategoryListViewModel, AddCategoryViewModel, EditCategoryViewModel} from "app/view-model";
import UserViewModelImpl from "app/view-model/implementation/UserViewModel";
import ProductViewModelImplement from "app/view-model/implementation/ProductViewModel";
import ProductOptionViewModelImpl from "app/view-model/implementation/ProductOptionViewModel";
import CheckoutViewModelImpl from "app/view-model/implementation/CheckoutViewModel";
import EditOptionViewModelImpl from "app/view-model/implementation/EditOptionViewModel";
import AddCategoryViewModelImpl from "app/view-model/implementation/AddCategoryViewModel";
import EditCategoryViewModelImpl from "app/view-model/implementation/EditCategoryViewModel";

import { UCPostAccount, UCGetProducts, UCGetCategories, UCPostCartItem, UCGetCartList, UCDeleteCartItem, UCPostProductsByCategory, UCGetProductsByCategory, UCPatchProductsByCategory, UCDeleteCategory, UCDeleteProductByCategory, UCPatchCategoryName } from "domain/use-case";
import UCPostAccountImplement from "domain/use-case/user/PostAccount";
import UCGetProductImplement from "domain/use-case/products/GetProducts";
import UCGetCategoriesImpl from "domain/use-case/categories/GetCategories";
import UCPostCartItemImpl from "domain/use-case/cart/postCartItem";
import UCGetCartListImpl from "domain/use-case/cart/getCartList";
import UCDeleteCartItemImpl from "domain/use-case/cart/deleteCartItem";
import UCPostProductsByCategoryImpl from "domain/use-case/categories/PostProductsByCategory";
import UCGetProductsByCategoryImpl from "domain/use-case/categories/GetProductsByCategory";
import UCPatchProductsByCategoryImpl from "domain/use-case/categories/PatchProductsByCategory";
import UCDeleteCategoryImpl from "domain/use-case/categories/DeleteCategory";
import UCDeleteProductByCategoryImpl from "domain/use-case/categories/DeleteProductByCategory";
import UCPatchCategoryNameImpl from "domain/use-case/categories/PatchCategoryName";

import { CartRepository, CategoryRepository, ProductRepository, UserRepository } from "domain/interactor/repository";
import UserRepositoryImpl from "data/repository/UserRepository";
import ProductRepositoryImplement from "data/repository/ProductRepository";
import CategoryRepositoryImplent from "data/repository/CategoryRepository";
import CartRepositoryImpl from "data/repository/CartRepository";
import CategoryListViewModelImpl from "app/view-model/implementation/CategoryListViewModel";

import {  UserApi, ProductApi, CategoryApi, CartApi } from "data/remote";
import UserApiImpl from "data/remote/api/UserApi";
import ProductApiImplement from "data/remote/api/ProductApi";
import CategoryApiImpl from "data/remote/api/CategoryApi";
import CartApiImpl from "data/remote/api/CartApi";

const container = new Container();

/* view model */
container.bind<UserViewModel>("UserViewModel").to(UserViewModelImpl);
container.bind<ProductViewModel>("ProductViewModel").to(ProductViewModelImplement);
container.bind<CheckoutViewModel>("CheckoutViewModel").to(CheckoutViewModelImpl);
container.bind<ProductOptionViewModel>("ProductOptionViewModel").to(ProductOptionViewModelImpl);
container.bind<EditOptionViewModel>("EditOptionViewModel").to(EditOptionViewModelImpl);
container.bind<CategoryListViewModel>("CategoryListViewModel").to(CategoryListViewModelImpl);
container.bind<AddCategoryViewModel>("AddCategoryViewModel").to(AddCategoryViewModelImpl);
container.bind<EditCategoryViewModel>("EditCategoryViewModel").to(EditCategoryViewModelImpl);

/* use case */
container.bind<UCPostAccount>("UCPostAccount").to(UCPostAccountImplement);
container.bind<UCGetProducts>("UCGetProducts").to(UCGetProductImplement);
container.bind<UCGetCategories>("UCGetCategories").to(UCGetCategoriesImpl);
container.bind<UCPostCartItem>("UCPostCartItem").to(UCPostCartItemImpl);
container.bind<UCGetCartList>("UCGetCartList").to(UCGetCartListImpl);
container.bind<UCDeleteCartItem>("UCDeleteCartItem").to(UCDeleteCartItemImpl);
container.bind<UCPostProductsByCategory>("UCPostProductsByCategory").to(UCPostProductsByCategoryImpl);
container.bind<UCGetProductsByCategory>("UCGetProductsByCategory").to(UCGetProductsByCategoryImpl);
container.bind<UCPatchProductsByCategory>("UCPatchProductsByCategory").to(UCPatchProductsByCategoryImpl);
container.bind<UCDeleteCategory>("UCDeleteCategory").to(UCDeleteCategoryImpl);
container.bind<UCDeleteProductByCategory>("UCDeleteProductByCategory").to(UCDeleteProductByCategoryImpl);
container.bind<UCPatchCategoryName>("UCPatchCategoryName").to(UCPatchCategoryNameImpl);

/*repository */
container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<ProductRepository>("ProductRepository").to(ProductRepositoryImplement);
container.bind<CategoryRepository>("CategoryRepository").to(CategoryRepositoryImplent);
container.bind<CartRepository>("CartRepository").to(CartRepositoryImpl);

/* api */
container.bind<UserApi>("UserApi").to(UserApiImpl);
container.bind<ProductApi>("ProductApi").to(ProductApiImplement);
container.bind<CategoryApi>("CategoryApi").to(CategoryApiImpl);
container.bind<CartApi>("CartApi").to(CartApiImpl);

export default container;
