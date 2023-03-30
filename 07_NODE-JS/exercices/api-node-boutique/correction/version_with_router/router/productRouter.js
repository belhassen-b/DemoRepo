import express from "express"
import { productService } from "../index.js"


const productRouter = express.Router()




// Création de produit
productRouter.post('/', (req, res) => {
    const { title, price, stock } = req.body
    productService.addProduct(title, price, stock)
    res.json({ message: "produit ajouté" })
})

// Récuperation produit par id
productRouter.get('/:id', (req, res) => {
    const product = productService.getProductById(req.params.id)
    if (product != undefined) {
        res.json(product)
    } else {
        res.json({ message: "aucun produit avec cet id" })
    }
})

export default productRouter;