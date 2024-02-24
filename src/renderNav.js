import { getProjects } from ".";

export default function renderNav() {
  const nav = document.querySelector("#nav");

  const navTitles = ["Inbox", "Today", "Upcoming"];
  const projects = getProjects();

  navTitles.forEach((title) => {
    const titleBtn = document.createElement("button");
    titleBtn.textContent = title;
    titleBtn.classList.add("navBtn");
    nav.appendChild(titleBtn);
  });

  const projectsHeader = document.createElement("h2");
  projectsHeader.textContent = "Projects";
  nav.appendChild(projectsHeader);

  projects.forEach((proj) => {
    const projBtn = document.createElement("button");
    projBtn.textContent = proj;
    projBtn.classList.add("projBtn");
    nav.appendChild(projBtn);
  });

  const newProjBtn = document.createElement("button");
  newProjBtn.textContent = "Add Project";
  nav.appendChild(newProjBtn);
}
