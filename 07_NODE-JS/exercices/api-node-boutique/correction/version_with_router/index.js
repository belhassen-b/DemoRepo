import express from "express"
import { CustomerService } from "./services/customerService.js"
import { ProductService } from "./services/productService.js"
import { OrderService } from "./services/orderService.js"
import productRouter from "./router/productRouter.js"
import customerRouter from "./router/customerRouter.js"
import orderRouter from "./router/orderRouter.js"
//npm i cors
import cors from "cors"




const app = express()

app.use(express.json())

app.use(cors({origin:"*"}))

//Création de services
export const customerService = new CustomerService()
export const productService = new ProductService()
export const orderService = new OrderService(customerService, productService)


// Endpoints

app.use('/produits',productRouter)
app.use('/clients',customerRouter)
app.use('/commandes',orderRouter)






app.listen(3000, () => {
    productService.readFromJson()
    customerService.readFromJson()
    orderService.readFromJson()
})