import { getProjects } from ".";
import { addProject } from "./handleProjects";
import { removeProject } from "./handleProjects";
import renderInbox from "./renderInbox";
import renderToday from "./renderToday";
import renderUpcoming from "./renderUpcoming";
import renderProject from "./renderProject";

export default function renderNav() {
  const nav = document.querySelector("#nav");
  nav.innerHTML = "";

  const projects = getProjects();

  const inboxBtn = document.createElement("button");
  inboxBtn.textContent = "Inbox";
  inboxBtn.classList.add("navBtn");
  inboxBtn.classList.add("inboxBtn");
  nav.appendChild(inboxBtn);
  inboxBtn.addEventListener("click", renderInbox);

  const todayBtn = document.createElement("button");
  todayBtn.textContent = "Today";
  todayBtn.classList.add("navBtn");
  todayBtn.classList.add("todayBtn");
  nav.appendChild(todayBtn);
  todayBtn.addEventListener("click", renderToday);

  const upcomingBtn = document.createElement("button");
  upcomingBtn.textContent = "Upcoming";
  upcomingBtn.classList.add("navBtn");
  upcomingBtn.classList.add("upcomingBtn");
  nav.appendChild(upcomingBtn);
  upcomingBtn.addEventListener("click", renderUpcoming);

  const projectsHeader = document.createElement("h2");
  projectsHeader.textContent = "Projects";
  nav.appendChild(projectsHeader);

  projects.forEach((proj) => {
    const projContainer = document.createElement("div");
    projContainer.classList.add("projContainer");
    const projTitle = document.createElement("p");
    projTitle.textContent = proj.title;
    projTitle.classList.add("projTitle");
    const removeProjBtn = document.createElement("button");
    removeProjBtn.textContent = "X";
    projContainer.appendChild(projTitle);
    projContainer.appendChild(removeProjBtn);
    nav.appendChild(projContainer);
    removeProjBtn.addEventListener("click", (e) => {
      projContainer.remove();
      removeProject(proj);
      renderInbox();
    });
    projContainer.addEventListener("click", showProject);
  });

  const newProjBtn = document.createElement("button");
  newProjBtn.textContent = "Add Project";
  newProjBtn.classList.add("newProjBtn");
  nav.appendChild(newProjBtn);
  newProjBtn.addEventListener("click", renderInput);
}

// function showInput() {
//   renderInput(addProject, renderNav, true);
// }

function renderInput() {
  const nav = document.querySelector("#nav");
  // Hide new item button
  const newProjBtn = document.querySelector(".newProjBtn");
  newProjBtn.style.display = "none";

  // Create input
  const input = document.createElement("input");
  input.classList.add("addInput");
  nav.appendChild(input);

  // Create input buttons
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.classList.add(".addBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel");
  nav.appendChild(addBtn);
  nav.appendChild(cancelBtn);

  addBtn.addEventListener("click", function (e) {
    const input = document.querySelector(".addInput");
    addProject(input.value);
    renderNav();
  });
  cancelBtn.addEventListener("click", renderNav);
}

function showProject(e) {
  // Don't run this code if the finish button was clicked
  if (e.target.tagName === "BUTTON") return;

  const projects = document.querySelectorAll(".projContainer");
  const projectTitle = e.target.textContent;
  // Add "selected" class to the project that was clicked
  for (const project of projects) {
    if (project === e.target.parentNode) {
      project.classList.add("selected");
    } else {
      project.classList.remove("selected");
    }
  }

  const allProjects = getProjects();
  for (const project of allProjects) {
    if (projectTitle === project.title) {
      renderProject(project);
      return;
    }
  }
}
