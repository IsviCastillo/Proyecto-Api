import { Router, Request, Response } from "express";

import { ProductController } from "../controllers/product.controller";

import { ProductService } from "../services/product.service";

const productRouter = Router();

const productService = new ProductService();

const productController = new ProductController(productService);

productRouter.get(
    "/products",
    (req: Request, res: Response) =>
        productController.getAllProducts(req, res)
);

productRouter.post(
    "/products",
    (req: Request, res: Response) =>
        productController.createProduct(req, res)
);

export default productRouter;