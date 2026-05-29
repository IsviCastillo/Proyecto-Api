export class OrderService {

    async getAllOrders() {

        return [
            {
                id: "1",
                cliente: "Isvi",
                total: 500
            }
        ];
    }

    async getOrderById(id: string) {

        return {
            id,
            cliente: "Isvi",
            total: 500
        };
    }

    async createOrder(order: any) {

        return order;
    }
}