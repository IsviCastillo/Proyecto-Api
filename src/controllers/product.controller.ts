import { Request, Response } from "express";

import { ProductService } from "../services/product.service";

export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) {}

    async getAllProducts(req: Request, res: Response) {

        const products = await this.productService.getAllProducts();

        res.status(200).json({
            data: products
        });
    }

    async createProduct(req: Request, res: Response) {

        const product = req.body;

        const created = await this.productService.createProduct(product);

        res.status(201).json({
            data: created
        });
    }
}