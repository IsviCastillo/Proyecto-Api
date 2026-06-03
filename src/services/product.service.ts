import { Repository } from "typeorm";

import { Product } from "../entities/product.entity";

import { Database } from "../database/db";


export class ProductService {

    private repository: Repository<Product>;

    constructor() {

        this.repository =
            Database.getDataBaseInstance()
                .getDataSource()
                .getRepository(Product);
    }

    async getAllProducts() {

        return await this.repository.find();
    }

    async createProduct(product: Product) {

        return await this.repository.save(product);
    }
}
