import { Container } from "inversify";
import { ProductViewModel } from "app/view-model";
import ProductViewModelImplement from "app/view-model/implementation/ProductViewModel";

import { UCGetProducts } from "domain/use-case";
import UCGetProductImplement from "domain/use-case/products/GetProducts";

import { ProductRepository } from "domain/interactor/repository";
import ProductRepositoryImplement from "data/repository/ProductRepository";

import { ProductApi } from "data/remote";
import ProductApiImplement from "data/remote/api/ProductApi";

const container = new Container();

/* view model */
container.bind<ProductViewModel>("ProductViewModel").to(ProductViewModelImplement);

/* use case */
container.bind<UCGetProducts>("UCGetProducts").to(UCGetProductImplement);

/*repository */
container.bind<ProductRepository>("ProductRepository").to(ProductRepositoryImplement);

/* api */
container.bind<ProductApi>("ProductApi").to(ProductApiImplement);

export default container;
