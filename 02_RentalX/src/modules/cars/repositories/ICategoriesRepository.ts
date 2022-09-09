/* eslint-disable prettier/prettier */

import { Category } from "../model/Category";

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICategoriesRepositoryDTO): void;
}

export { ICategoriesRepository, ICategoriesRepositoryDTO };
