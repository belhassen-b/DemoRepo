const TodoItemDisplay = (props) => {
  const todo = props.todo

  const getBadgeClasses = () => {
    const timeDiff = new Date(todo.dueDate).getTime() - new Date().getTime()
    const daysDiff = Math.ceil(timeDiff / (3600 * 1000 * 24))
    return `badge bg-${daysDiff > 7 ? 'success' : timeDiff >= 0 ? 'warning' : 'danger'}`
  }

  return (
    <div className="border border-info rounded p-3 my-2">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{todo.title}</h5>
        <span className={getBadgeClasses()}>{new Date(todo.dueDate).toLocaleDateString()}</span>
      </div>
        <hr />
      <p>{todo.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <button className={`btn btn-${todo.isDone ? 'success' : 'warning'}`} onClick={() => props.switchTodoStatus(todo.id)} >{todo.isDone ? 'Done' : 'To Do'}</button>
        <button className="btn btn-danger" onClick={() => props.deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItemDisplay