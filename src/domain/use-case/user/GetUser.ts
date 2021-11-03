import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UserRepository } from "domain/interactor/repository";
import { UCGetUser } from "..";

@injectable()
export default class UCGetUserImpl implements UCGetUser {
    private userRepository: UserRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    execute(): Promise<Entity.User> {
        return this.userRepository.getUser();
    }
}
