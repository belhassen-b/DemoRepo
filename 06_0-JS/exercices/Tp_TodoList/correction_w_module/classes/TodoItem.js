let todoCount = 0

export default class TodoItem {
  constructor(title, content) {
    this.id = ++todoCount
    this.title = title
    this.content = content
    this.isDone = false
  }
}