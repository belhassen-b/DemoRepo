import { useDispatch, useSelector } from "react-redux";
import TodoDisplay from "./components/todoItems/TodoDisplay";
import { addTodoAction } from "./components/todoItems/todoItemsSlice";
import { BASE_DB_URL } from './firebaseConfig'

function App() {
  const todos = useSelector(state => state.todoItems.todos)
  const dispatch = useDispatch()

  const addTodoHandler = async () => {
    try {
      const newTodo = {
        title: "TodoTitle", 
        description: "Description de TodoTitle"
      }

      const response = await fetch(`${BASE_DB_URL}todoItems.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })

      if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de l'ajout d'une tâche !")
      }

      const data = await response.json()

      dispatch(addTodoAction({...newTodo, id: data.name}))
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="App">
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 bg-dark text-light p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h3>TodoList App</h3>
              <button className="btn btn-success" onClick={addTodoHandler}><i className="bi bi-plus-circle"></i> Add</button>
            </div>
            <hr />
            {todos.length === 0 ?
            <p>Il n'y a pas de tâche dans la base de données !</p>:
            todos.map(todo => <TodoDisplay key={todo.id} todoItemId={todo.id} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
