import { useDispatch, useSelector } from "react-redux";
import { setContactsAction } from "./components/contacts/contactsSlice";
import ParentComponent from "./components/ParentComponent";
import { removeTodoAction, setTodosAction } from "./components/todoItems/todoItemsSlice";

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoItems.todos)
  const contacts = useSelector(state => state.contacts.contacts)

  const fetchContactHandler = async () => {
    try {
      const response = await fetch("https://m2i-corr-econtacts-default-rtdb.europe-west1.firebasedatabase.app/contacts.json")

      if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de la récup des contacts !")
      }

      const data = await response.json()

      const tmpArray = []

      for (const key in data) {
        tmpArray.push({id: key, ...data[key]})
      }

      dispatch(setContactsAction(tmpArray))
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="App">
      <main className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <h3>Demo Redux</h3>
            <hr />
            {contacts.length === 0 && <button className="btn btn-danger" onClick={fetchContactHandler}>Fetch Contacts</button>}
            <ParentComponent />
            {todos.length === 0 ? 
            <>
            <p>Il n'y a pas de tâches !</p>
            <button className="btn btn-warning" onClick={() => dispatch(setTodosAction(["Toto", "Blabla", "Titi", "Zaza"]))}>Init</button>
            </> : 
            todos.map((todo) => <p key={todo.id} onClick={() => dispatch(removeTodoAction(todo.id))}>{todo.title}</p>)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
