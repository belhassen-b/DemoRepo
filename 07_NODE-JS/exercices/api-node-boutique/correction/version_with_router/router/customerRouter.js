import express from "express"
import { customerService } from "../index.js"


const customerRouter = express.Router()


// creation client
customerRouter.post('/', (req, res) => {
    const { firstName, lastName, phone } = req.body
    customerService.addCustomer(firstName, lastName, phone)
    res.json({ message: "client ajouté" })
})

//recuperation clients
customerRouter.get('/', (req, res) => {
    res.json(customerService.getAllCustomers())
})

//recuperation client par id
customerRouter.get('/:id', (req, res) => {
    const customer = customerService.getCustomerById(req.params.id)
    if (customer != undefined) {
        res.json(customer)
    } else {
        res.json({ message: "aucun client avec cet id" })
    }
})

export default customerRouter;