import express from "express"
import { orderService } from "../index.js"

const orderRouter = express.Router()

// Recuperation de la liste des commandes
orderRouter.get('/', (req, res) => {
    res.json(orderService.getAllOrders())
})

// Recuperation d'un commande par id
orderRouter.get('/:id', (req, res) => {
    const order = orderService.getOrderById(req.params.id)
    if (order != undefined) {
        res.json(order)
    } else {
        res.json({ message: "aucune commande avec cet id" })
    }
})


// Création d'une commande
orderRouter.post('/', (req, res) => {
    const {customerId, products} = req.body
    if(orderService.addOrder(customerId,products)){
        res.json({ message: "commande ajouté" })
    }else {
        res.json({ message: "erreur" })
    }
})


export default orderRouter