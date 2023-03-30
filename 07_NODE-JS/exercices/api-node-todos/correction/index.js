import express from "express"
import { App } from "./classes/app.js"

// Un objet pour gérer des todos
const dataservice = new App()

//Notre objet express
const api = express()

//Utilisation du middleware json
api.use(express.json())

// Endpoint cree une todo
api.post('/todos', (req,res) => {
    const {title, content} = req.body
    if( title != undefined && content != undefined){
        dataservice.createTodo(title,content)
        res.json({message : "todo ajoutée"})
    }else {
        res.json({message : "Merci de transmettre un titre et un contenu"})
    }
})

// Endpoint pour récuperer toutes les todos
api.get('/todos', (req,res) => {
    res.json(dataservice.todos)
})

// Endpoint pour recuperer une seul todo
api.get('/todos/:id', (req,res) => {
    const todo = dataservice.findTodoById(req.params.id)
    if( todo != undefined){
        res.json(todo)
    }else {
        res.json({message : "todo pas trouvé"})
    }
})
// Endpoint pour la recherche d'un todo par titre
api.get('/todos/search/:search', (req,res) => {
    res.json(dataservice.searchTodoByTitle(req.params.search))
})
//Endpoint pour changement status
api.patch('/todos/:id', (req,res) => {
    if(dataservice.updateTodoStatus(req.params.id)){
        res.json({message : "statut modifié"})
    }else {
        res.json({message : "erreur"})
    }
})
// Endpoint pour modif d'une todo
api.put('/todos/:id', (req,res) => {
    const {title, content} = req.body
    if(dataservice.updateTodo(req.params.id,title,content)){
        res.json({message : "todo update"})
    }else {
        res.json({message : "erreur"})
    }
    
})
// Endpoint pour suppression d'une todo
api.delete('/todos/:id', (req,res) => {
    if(dataservice.deleteTodo(req.params.id)){
        res.json({message : "todo suppr"})
    }else {
        res.json({message : "erreur"})
    }
})

api.listen(3000, () => {
    dataservice.read()
    console.log("api todo")
})
