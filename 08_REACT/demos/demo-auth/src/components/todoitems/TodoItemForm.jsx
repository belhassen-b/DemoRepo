import { useRef } from "react"

const TodoItemForm = (props) => {

  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const dueDate = dueDateRef.current.value

    const newTodoItem = {
      title,
      description,
      dueDate,
      isDone: false
    }

    titleRef.current.value = ""
    descriptionRef.current.value = ""
    dueDateRef.current.value = ""
    
    props.addTodo(newTodoItem)

  }

  return (
    <>
      <h3>TodoForm</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre: </label>
          <input type="text" required id="title" ref={titleRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description: </label>
          <textarea required id="description" ref={descriptionRef} cols={30} rows={10} className="form-control" style={{resize: "none"}}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Date d'échance: </label>
          <input type="date" required id="dueDate" ref={dueDateRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className="btn btn-outline-light"><i className="bi bi-send"></i> Envoyer</button>
        </div>
      </form>
    </>
  )
}

export default TodoItemForm