import { useDispatch } from "react-redux"
import { addTodoAction } from "./todoItems/todoItemsSlice"

const ChildComponent = () => {
  // Au niveau d'un composant, pour avoir accès à l'appel d'action au niveau du state global de Redux, il faut récupérer la fonctionnalité de dispatch
  const dispatch = useDispatch()


  return (
    <>
      <button className="btn btn-primary" onClick={() => dispatch(addTodoAction("Nouvelle Todo"))}>Click Me!</button>
    </>
  )
}

export default ChildComponent