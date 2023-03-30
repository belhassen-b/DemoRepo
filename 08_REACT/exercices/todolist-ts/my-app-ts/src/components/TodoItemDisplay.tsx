import TodoItem from "../classes/TodoItem"

interface Props {
  todo: TodoItem;
  switchTodoStatus: (todoId: number) => void
  deleteTodo: (todoId: number) => void
}

const TodoItemDisplay = (props: Props) => {
  const todo = props.todo

  const getBadgeClasses = () => {
    const timeDiff = todo.dueDate.getTime() - new Date().getTime()
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return `badge bg-${dayDiff > 7 ? 'success' : dayDiff >= 0 ? 'warning' : 'danger'}`
  }

  const getButtonClasses = () => {
    return `btn btn-${todo.isDone ? 'success' : 'warning'}`
  }

  return (
    <div className="my-2 border border-info p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{todo.title}</h5>
        <span className={getBadgeClasses()}>{todo.dueDate.toLocaleDateString()}</span>
      </div>
      <hr />
      <p>{todo.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={() => props.switchTodoStatus(todo.id)} className={getButtonClasses()}>{todo.isDone ? 'Done' : 'To Do'}</button>
        <button onClick={() => props.deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}

export default TodoItemDisplay