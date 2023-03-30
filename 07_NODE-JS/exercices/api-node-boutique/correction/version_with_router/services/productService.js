import { Product } from "../classes/product.js";
import { BaseService } from "./baseService.js";


export class ProductService extends BaseService {
    constructor() {
        super("data/products.json")
    }

    addProduct(title,price,stock){
        const product = new Product(++this.count,title,price,stock)
        this.data.push(product)
        this.writeToJson()
    }

    getProductById(id) {
        return this.data.find(p => p.id == id)
    }

    updateProductStockById(id,qty) {
        const product = this.getProductById(id)
        if(product != undefined){
            product.stock -= qty
            this.writeToJson()
            return true
        }
        return false
    }

}