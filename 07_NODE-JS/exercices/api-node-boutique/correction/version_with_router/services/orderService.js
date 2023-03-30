import { Order } from "../classes/order.js";
import { OrderProduct } from "../classes/orderProduct.js";
import { BaseService } from "./baseService.js";



export class OrderService extends BaseService {
    constructor(customerService,productService){
        super("data/orders.json")

        this.customerService = customerService,
        this.productService = productService

    }

    addOrder(customerId, products){
        const customer = this.customerService.getCustomerById(customerId)
        if(customer != undefined){
            const orderProducts = []
            products.forEach(p => {
                const product = this.productService.getProductById(p.id)
                if(product != undefined && p.qty > 0){
                    if( product.stock >= p.qty){
                      //  orderProducts.push({product : product, qty : p.qty})
                        orderProducts.push(new OrderProduct(product.id,product.title,product.price,p.qty))
                        this.productService.updateProductStockById(p.id,p.qty)
                    }
                }
            });
            const order = new Order(++this.count,customer,orderProducts)
            this.data.push(order)
            this.writeToJson()
            return true
        }
        return false
    }

    getOrderById(id){
        return this.data.find(o => o.id == id)
    }

    getAllOrders(){
        return this.data
    }

}