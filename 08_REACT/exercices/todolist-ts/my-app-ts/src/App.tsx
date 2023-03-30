import { useState } from "react";
import TodoItem from "./classes/TodoItem";
import TodoForm from "./components/TodoForm";
import TodoItemDisplay from "./components/TodoItemDisplay";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const sortTodos = () => {
    return todos.sort((a, b) => a.id - b.id)
  }

  const switchTodoStatus = (todoId: number) => {
    const todoToEdit = todos.find(todo => todo.id === todoId)
    if (todoToEdit) {
      const todosTmp = todos.filter(todo => todo.id !== todoId)
      todoToEdit.isDone = !todoToEdit.isDone
      setTodos([...todosTmp, todoToEdit])
    }
  }

  const deleteTodo = (todoId: number) => {
    const todoToDelete = todos.find(todo => todo.id === todoId)
    if (todoToDelete) {
      const todosTmp = todos.filter(todo => todo.id !== todoId)
      setTodos([...todosTmp])
    }
  }

  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo])
    
  }

  return (
    <div className="container">
      <div className="row my-3 g-2">
        <div className="col-4">
          <div className="bg-dark text-light rounded p-3">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
        <div className="col-8">
          <div className="bg-dark text-light rounded p-3">
            <h3>TodoList</h3>
            <hr />
            {todos.length === 0 ? 
              <p>Il n'y a pas de tâches dans la base de données !</p> :
              sortTodos().map((todo) => <TodoItemDisplay key={todo.id} deleteTodo={deleteTodo} switchTodoStatus={switchTodoStatus} todo={todo} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
