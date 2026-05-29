export class ProductService {

    async getAllProducts() {

        return [
            {
                id: "1",
                nombre: "Laptop",
                precio: 1200,
                imagen: "https://placehold.co/300"
            }
        ];
    }

    async createProduct(product: any) {

        return product;
    }
}