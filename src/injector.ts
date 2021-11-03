import { Container } from "inversify";

import { UserViewModel } from "app/view-model";
import UserViewModelImplement from "app/view-model/implementation/UserViewModel";

import { UCGetUser } from "domain/use-case";
import UCGetUserImplement from "domain/use-case/user/GetUser";

import { UserRepository } from "domain/interactor/repository";
import UserRepositoryImplement from "data/repository/UserRepository";

import { UserApi } from "data/remote";
import UserApiImplement from "data/remote/api/UserApi";

const container = new Container();

/**view model */
container.bind<UserViewModel>("UserViewModel").to(UserViewModelImplement);

/**use case */
container.bind<UCGetUser>("UCGetUser").to(UCGetUserImplement);

/**repository */
container.bind<UserRepository>("UserRepository").to(UserRepositoryImplement);

/**api */
container.bind<UserApi>("UserApi").to(UserApiImplement);

export default container;
