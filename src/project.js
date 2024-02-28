export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  getTitle() {
    return this.title;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (todo === this.todos[i]) {
        this.todos.splice(i, 1);
        return;
      }
    }
  }
}
