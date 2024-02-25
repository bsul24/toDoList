import { getToday } from ".";

export default function renderToday() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const today = getToday();

  // Create header
  const header = document.createElement("h2");
  header.textContent = "Today";
  content.appendChild(header);

  // Render inbox items
  today.forEach((item) => {
    const line = document.createElement("p");
    line.textContent = item;
    line.classList.add("toDoItem");
    content.appendChild(line);
  });
}
