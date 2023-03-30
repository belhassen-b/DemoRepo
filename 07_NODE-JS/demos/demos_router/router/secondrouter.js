import express from 'express'



const secondrouter = express.Router()

secondrouter.get('/', (req,res) => {
    res.json({message : "racine de mon second router"})
})



secondrouter.get('/about', (req,res) => {
    res.json({message : "about de mon second router"})
})



export default secondrouter;