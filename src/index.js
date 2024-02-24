import ToDo from "./toDo";
import renderNav from "./renderNav";
import renderHome from "./renderInbox";
import "./style.css";

const inbox = [];
const projects = [];

export function getProjects() {
  return projects;
}

renderNav();
renderInbox();
