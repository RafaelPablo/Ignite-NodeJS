/* eslint-disable prettier/prettier */

import { Category } from "../model/Category";
import { ICategoriesRepository, ICategoriesRepositoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICategoriesRepositoryDTO): void {
        const category = new Category();
  
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })
    
      this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);

        return category;
    }
}

export { CategoriesRepository };