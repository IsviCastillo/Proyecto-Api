import { Request, Response } from "express";

import { CategoryService } from "../services/category.service";

import { ICategory } from "../interfaces/category.interface";

export class CategoryController {

    private categoryService: CategoryService;

    constructor(categoryService: CategoryService) {

        this.categoryService = categoryService;
    }

    async getAllCategories(req: Request, res: Response) {

        const categories = await this.categoryService.getAllCategories();

        res.status(200).json({
            data: categories
        });
    }

    async getCategoryById(req: Request, res: Response) {

        const { id } = req.params;

        const category = await this.categoryService.getCategoryById(id);

        if (category !== null) {

            res.status(200).json({
                data: category
            });

        } else {

            res.status(404).json({
                message: "Categoría no encontrada"
            });
        }
    }

    async createCategory(req: Request, res: Response) {

        const category: ICategory = req.body;

        await this.categoryService.createCategory(category);

        res.status(201).json({
            message: "Categoría creada correctamente"
        });
    }

    async updateCategory(req: Request, res: Response) {

        const { id } = req.params;

        const category: ICategory = req.body;

        const updatedCategory = await this.categoryService.updateCategory(id, category);

        if (updatedCategory !== null) {

            res.status(200).json({
                message: "Categoría actualizada correctamente",
                data: updatedCategory
            });

        } else {

            res.status(404).json({
                message: "Categoría no encontrada"
            });
        }
    }

    async deleteCategory(req: Request, res: Response) {

        const { id } = req.params;

        const deleted = await this.categoryService.deleteCategory(id);

        if (deleted) {

            res.status(200).json({
                message: "Categoría eliminada correctamente"
            });

        } else {

            res.status(404).json({
                message: "Categoría no encontrada"
            });
        }
    }
}