import { removeInboxItem } from "./handleInboxItems";

export default function renderTodos(todos) {
  console.log(todos);
  const content = document.querySelector("#content");
  for (const task of todos) {
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
      removeInboxItem(task);
    });
  }
}
