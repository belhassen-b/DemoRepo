import { useSelector } from "react-redux"

const TodoDisplay = ({todoItemId}) => {
  const todoItem = useSelector(state => state.todoItems.todos)
  .find(todo => todo.id === todoItemId)

  return (
    <div>
      <h3>{todoItem.title}</h3>
      <hr />
      <p>{todoItem.description}</p>
    </div>
  )
}

export default TodoDisplay