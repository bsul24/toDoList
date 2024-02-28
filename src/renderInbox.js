import { getInbox } from ".";
import addInboxItem from "./handleInboxItems";
import { removeInboxItem } from "./handleInboxItems";
import renderNav from "./renderNav";
import renderTodos from "./renderTodos";
import renderInput from "./renderInput";

export default function renderInbox() {
  renderNav();
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const inbox = getInbox();

  // Create header
  const header = document.createElement("h2");
  header.textContent = "Inbox";
  content.appendChild(header);

  // Render inbox items
  renderTodos(inbox);

  // Render add item button
  const newItemBtn = document.createElement("button");
  newItemBtn.textContent = "Add Task";
  newItemBtn.classList.add("newItemBtn");
  content.appendChild(newItemBtn);

  newItemBtn.addEventListener("click", showInput);
}

function showInput() {
  renderInput(addInboxItem, renderInbox, false);
}

// function renderInput() {
//   console.log("fart");
//   const content = document.querySelector("#content");

//   // Hide new item button
//   const newItemBtn = document.querySelector(".newItemBtn");
//   newItemBtn.style.display = "none";

//   // Create input
//   const input = document.createElement("input");
//   input.classList.add("addInput");
//   content.appendChild(input);

//   // Create input buttons
//   const addBtn = document.createElement("button");
//   addBtn.textContent = "Add";
//   addBtn.classList.add(".addBtn");
//   const cancelBtn = document.createElement("button");
//   cancelBtn.textContent = "Cancel";
//   cancelBtn.classList.add("cancel");
//   content.appendChild(addBtn);
//   content.appendChild(cancelBtn);

//   addBtn.addEventListener("click", function (e) {
//     const input = document.querySelector(".addInput");
//     addInboxItem(input.value);
//     renderInbox();
//   });
//   cancelBtn.addEventListener("click", renderInbox);
// }
