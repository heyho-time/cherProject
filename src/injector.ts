import { Container } from "inversify";

import { ListProductViewModel, AddProductViewModel } from "app/view-model";
import AddProductViewModelImpl from "app/view-model/implementation/AddProductViewModel";
import ListProductViewModelImpl from "app/view-model/implementation/ListProductViewModel";

import { UCPostAccount, UCGetProducts, UCGetCategories, UCPostCartItem, UCGetCartList, UCPostProducts, UCDeleteCartItem } from "domain/use-case";
import UCPostAccountImplement from "domain/use-case/user/PostAccount";
import UCGetProductImplement from "domain/use-case/products/GetProducts";
import UCGetCategoriesImpl from "domain/use-case/categories/GetCategories";
import UCPostCartItemImpl from "domain/use-case/cart/postCartItem";
import UCGetCartListImpl from "domain/use-case/cart/getCartList";
import UCDeleteCartItemImpl from "domain/use-case/cart/deleteCartItem";
import UCPostProductImpl from "domain/use-case/products/PostProducts";

import { CartRepository, CategoryRepository, ProductRepository, UserRepository } from "domain/interactor/repository";
import UserRepositoryImpl from "data/repository/UserRepository";
import ProductRepositoryImplement from "data/repository/ProductRepository";
import CategoryRepositoryImplent from "data/repository/CategoryRepository";
import CartRepositoryImpl from "data/repository/CartRepository";

import {  UserApi, ProductApi, CategoryApi, CartApi } from "data/remote";
import UserApiImpl from "data/remote/api/UserApi";
import ProductApiImplement from "data/remote/api/ProductApi";
import CategoryApiImpl from "data/remote/api/CategoryApi";
import CartApiImpl from "data/remote/api/CartApi";

const container = new Container();

/* view model */
container.bind<ListProductViewModel>("ListProductViewModel").to(ListProductViewModelImpl);
container.bind<AddProductViewModel>("AddProductViewModel").to(AddProductViewModelImpl);

/* use case */
container.bind<UCPostAccount>("UCPostAccount").to(UCPostAccountImplement);
container.bind<UCGetProducts>("UCGetProducts").to(UCGetProductImplement);
container.bind<UCGetCategories>("UCGetCategories").to(UCGetCategoriesImpl);
container.bind<UCPostCartItem>("UCPostCartItem").to(UCPostCartItemImpl);
container.bind<UCGetCartList>("UCGetCartList").to(UCGetCartListImpl);
container.bind<UCDeleteCartItem>("UCDeleteCartItem").to(UCDeleteCartItemImpl);
container.bind<UCPostProducts>("UCPostProducts").to(UCPostProductImpl);

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
