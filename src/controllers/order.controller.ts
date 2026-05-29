import { Request, Response } from "express";

import { OrderService } from "../services/order.service";

export class OrderController {

    constructor(
        private readonly orderService: OrderService
    ) {}

    async getAllOrders(req: Request, res: Response) {

        const orders = await this.orderService.getAllOrders();

        res.status(200).json({
            data: orders
        });
    }

    async getOrderById(req: Request, res: Response) {

        const id = req.params.id as string;

        const order = await this.orderService.getOrderById(id);

        res.status(200).json({
            data: order
        });
    }

    async createOrder(req: Request, res: Response) {

        const order = req.body;

        const created = await this.orderService.createOrder(order);

        res.status(201).json({
            data: created
        });
    }
}