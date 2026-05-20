import { Category } from "../entities/category.entity";
import { Database } from "../database/db";
import { ICategory } from "../interfaces/category.interface";

export class CategoryService {

    private database = Database.getDataBaseInstance();

    private categoryRepository = this.database
        .getDataSource()
        .getRepository(Category);

    getAllCategories() {

        return this.categoryRepository.find();
    }

    async getCategoryById(id: string) {

        const category = await this.categoryRepository.findOneBy({ id });

        if (category !== null) {

            return {
                id: category.id,
                nombre: category.nombre,
                descripcion: category.descripcion
            };

        } else {

            return null;
        }
    }

    createCategory(category: ICategory) {

        const newCategory = new Category();

        newCategory.nombre = category.nombre!;
        newCategory.descripcion = category.descripcion!;

        return this.categoryRepository.save(newCategory);
    }

    async updateCategory(id: string, category: ICategory) {

        const existingCategory = await this.categoryRepository.findOneBy({ id });

        if (existingCategory !== null) {

            existingCategory.nombre = category.nombre!;
            existingCategory.descripcion = category.descripcion!;

            return this.categoryRepository.save(existingCategory);

        } else {

            return null;
        }
    }

    async deleteCategory(id: string) {

        const existingCategory = await this.categoryRepository.findOneBy({ id });

        if (existingCategory !== null) {

            await this.categoryRepository.remove(existingCategory);

            return true;

        } else {

            return false;
        }
    }
}