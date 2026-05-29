import { Router, Request, Response } from "express";

import { OrderController } from "../controllers/order.controller";

import { OrderService } from "../services/order.service";

const orderRouter = Router();

const orderService = new OrderService();

const orderController = new OrderController(orderService);

orderRouter.get(
    "/orders",
    (req: Request, res: Response) =>
        orderController.getAllOrders(req, res)
);

orderRouter.get(
    "/orders/:id",
    (req: Request, res: Response) =>
        orderController.getOrderById(req, res)
);

orderRouter.post(
    "/orders",
    (req: Request, res: Response) =>
        orderController.createOrder(req, res)
);

export default orderRouter;