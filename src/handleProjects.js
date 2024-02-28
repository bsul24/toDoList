import { getProjects } from ".";
import Project from "./project";

export function addProject(project) {
  const projects = getProjects();
  for (const proj of projects) {
    if (proj.title === project) {
      alert("Project already exists");
      return;
    }
  }
  const newProject = new Project(project);
  projects.push(newProject);
}

export function removeProject(project) {
  const projects = getProjects();
  for (let i = 0; i < projects.length; i++) {
    if (project === projects[i]) {
      projects.splice(i, 1);
      return;
    }
  }
}
