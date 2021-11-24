import * as Entity from "domain/entity";
import { inject, injectable } from "inversify";
import { UserRepository } from "domain/interactor/repository";
import { UCPostAccount } from "..";

@injectable()
export default class UCPostAccountImpl implements UCPostAccount {
    private userRepository: UserRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    execute(account : Entity.User): Promise<object> {
        return this.userRepository.postAccount(account);
    }
}
