import express from 'express'



const firstrouter = express.Router()

// middleware personalisé
function myCustomMiddleware(req,res,next) {
    console.log("Middleware de first router utilisé")
    next();
}

function authentification(req,res,next) {
    const user = req.body.name
    if(user != "christophe"){
        return res.status(401).json({message : "non autorisé"})
    }
    req.user = user;
    next();
}

firstrouter.use(myCustomMiddleware)
firstrouter.use(authentification)

firstrouter.get('/', (req,res) => {
    res.json({message : "racine de mon first router" , utilisateur : req.user})
})

firstrouter.get('/contact', (req,res) => {
    res.json({message : "contact de mon first router"})
})

firstrouter.get('/about', (req,res) => {
    res.json({message : "about de mon first router"})
})

firstrouter.get('/form', (req,res) => {
    res.json({message : "form de mon first router"})
})

export default firstrouter;