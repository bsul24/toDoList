export default class ToDo {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setTitle(title) {
    this.title = title;
  }

  setDesc(desc) {
    this.desc = desc;
  }
}
