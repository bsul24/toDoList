import { getInbox } from ".";
import addInboxItem from "./handleInboxItems";
import { removeInboxItem } from "./handleInboxItems";

export default function renderInbox() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const inbox = getInbox();

  // Create header
  const header = document.createElement("h2");
  header.textContent = "Inbox";
  content.appendChild(header);

  // Render inbox items
  inbox.forEach((item) => {
    const lineContainer = document.createElement("div");
    lineContainer.classList.add("lineContainer");
    const line = document.createElement("p");
    line.textContent = item.desc;
    line.classList.add("toDoItem");
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "X";
    lineContainer.appendChild(line);
    lineContainer.appendChild(completeBtn);

    content.appendChild(lineContainer);
    completeBtn.addEventListener("click", function (e) {
      lineContainer.remove();
      removeInboxItem(item);
    });
  });

  // Render add item button
  const newItemBtn = document.createElement("button");
  newItemBtn.textContent = "Add Task";
  newItemBtn.classList.add("newItemBtn");
  content.appendChild(newItemBtn);

  newItemBtn.addEventListener("click", renderInput);
}

function renderInput() {
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
  cancelBtn.classList.add("Cancel");
  content.appendChild(addBtn);
  content.appendChild(cancelBtn);

  addBtn.addEventListener("click", function (e) {
    const input = document.querySelector(".addInput");
    addInboxItem(input.value);
    renderInbox();
  });
  cancelBtn.addEventListener("click", renderInbox);
}
