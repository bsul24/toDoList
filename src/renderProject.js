import renderTodos from "./renderTodos";
// import renderInput from "./renderInput";
import { addProject } from "./handleProjects";
import ToDo from "./toDo";

export default function renderProject(project) {
  const content = document.querySelector("#content");
  // Clear out main content section
  content.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = project.title;
  content.appendChild(header);

  // renderTodos(project.todos);
  // Render ToDos
  for (const task of project.todos) {
    const lineContainer = document.createElement("div");
    lineContainer.classList.add("lineContainer");
    const line = document.createElement("p");
    line.textContent = task.desc;
    line.classList.add("toDoItem");
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "X";
    lineContainer.appendChild(line);
    lineContainer.appendChild(completeBtn);

    content.appendChild(lineContainer);
    completeBtn.addEventListener("click", function (e) {
      lineContainer.remove();
      project.removeTodo(task);
    });
  }
  const newItemBtn = document.createElement("button");
  newItemBtn.textContent = "Add Task";
  newItemBtn.classList.add("newItemBtn");
  content.appendChild(newItemBtn);

  newItemBtn.addEventListener("click", () => {
    renderInput(project);
  });
}

function renderInput(project) {
  const content = document.querySelector("#content");

  // Hide new item button
  const newItemBtn = document.querySelector(".newItemBtn");
  newItemBtn.style.display = "none";

  // Create input
  const input = document.createElement("input");
  input.classList.add("addInput");
  content.appendChild(input);

  // Create input buttons
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.classList.add(".addBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel");
  content.appendChild(addBtn);
  content.appendChild(cancelBtn);

  addBtn.addEventListener("click", function (e) {
    const input = document.querySelector(".addInput");

    project.addTodo(new ToDo(input.value));
    renderProject(project);
  });
  cancelBtn.addEventListener("click", () => {
    renderProject(project);
  });
}

// function showInput() {
//   renderInput(addProject, renderProject, false);
// }
