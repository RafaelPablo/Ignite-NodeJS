/* eslint-disable prettier/prettier */

import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";



class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        const categories = this.specificationRepository.list();
        
        return categories;
    }
}

export { ListSpecificationsUseCase };
