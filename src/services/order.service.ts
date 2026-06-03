import { Repository } from "typeorm";

import { Order } from "../entities/order.entity";

import { Database } from "../database/db";

export class OrderService {

    private repository: Repository<Order>;

    constructor() {

        this.repository =
            Database.getDataBaseInstance()
                .getDataSource()
                .getRepository(Order);
    }

    async getAllOrders() {

        return await this.repository.find();
    }

    async getOrderById(id: string) {

        return await this.repository.findOne({
            where: { id }
        });
    }

    async createOrder(order: Order) {

        return await this.repository.save(order);
    }
}