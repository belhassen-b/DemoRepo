import { FormEvent, MutableRefObject, useRef } from "react"
import TodoItem from "../classes/TodoItem"

interface Props {
  addTodo: (todo: TodoItem) => void
}

const TodoForm = (props: Props) => {
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>
  const descriptionRef = useRef() as MutableRefObject<HTMLTextAreaElement>
  const dueDateRef = useRef() as MutableRefObject<HTMLInputElement>

const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const title = titleRef.current.value
  const description = descriptionRef.current.value
  const dueDate = new Date(dueDateRef.current.value)
  // 20/02/2023 => 2023-02-20

  const newTodo: TodoItem = new TodoItem(title, description, dueDate)

  titleRef.current.value = ""
  descriptionRef.current.value = ""
  dueDateRef.current.value = ""

  props.addTodo(newTodo)
}

  return (
    <>
      <h3>TodoForm</h3>
      <hr />
      <form onSubmit={formSubmitHandler}>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre: </label>
          <input type="text" id="title" required ref={titleRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description: </label>
          <textarea id="description" cols={30} rows={10} style={{resize: "none"}} className="form-control" required ref={descriptionRef}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Date d'échéance: </label>
          <input type="date" id="dueDate" required ref={dueDateRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className="btn btn-outline-light"><i className="bi bi-send"></i> Envoyer</button>
        </div>
      </form>
    </>
  )
}

export default TodoForm