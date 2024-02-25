import { getUpcoming } from ".";

export default function renderUpcoming() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const upcoming = getUpcoming();

  // Create header
  const header = document.createElement("h2");
  header.textContent = "Upcoming";
  content.appendChild(header);

  // Render inbox items
  upcoming.forEach((item) => {
    const line = document.createElement("p");
    line.textContent = item;
    line.classList.add("toDoItem");
    content.appendChild(line);
  });
}
