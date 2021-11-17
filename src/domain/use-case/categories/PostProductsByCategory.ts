import { inject, injectable } from "inversify";
import { CategoryRepository } from "domain/interactor/repository";
import { UCPostProductsByCategory} from "..";

@injectable()
export default class UCPostProductsByCategoryImpl implements UCPostProductsByCategory {
    private categoryRepository : CategoryRepository;

    constructor(@inject("CategoryRepository") categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(products: object[]): Promise<void> {
        return this.categoryRepository.postProductsByCategory(products);
    }
}
