import { Todo } from "./todo.js"
import { writeFileSync , readFileSync } from "fs"

export class App {
    constructor() {
        this.todos = []
        this.count = 0
        this.file = "data.json"
    }

    read(){
        const contenu = readFileSync(this.file).toString()
        this.todos = JSON.parse(contenu)
        this.count = (this.todos[this.todos.length-1] != undefined) ? this.todos[this.todos.length-1].id : 0
    }

    write(){
        writeFileSync(this.file, JSON.stringify(this.todos))
    }


    //Méthode création todo
    createTodo(title,content){
        const todo = new Todo(++this.count,title,content)
        this.todos.push(todo)
        this.write()
    }

    // Méthode recup todo par id
    findTodoById(id){
        return this.todos.find(t => t.id == id)
    }

    // Méthode pour rechercher par titre
    searchTodoByTitle(search) {
        return this.todos.filter(t => t.title.includes(search))
    }

    //Méthode supprimer todo
    deleteTodo(id) {
        const todo = this.findTodoById(id)
        if(todo != undefined){
            this.todos = this.todos.filter(t => t.id != id)
            this.write()
            return true
        }
        return false
    }

    //Méthode modif todo
    updateTodo(id,title,content){
        const todo = this.findTodoById(id)
        if(todo != undefined){
           todo.title = title
           todo.content = content
           this.write()
            return true
        }
        return false
    }

    //Méthode changement status todo
    updateTodoStatus(id){
        const todo = this.findTodoById(id)
        if(todo != undefined){
            todo.status = !todo.status
            this.write()
            return true
        }
        return false
    }
}