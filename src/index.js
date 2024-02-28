import ToDo from "./toDo";
import renderNav from "./renderNav";
import renderInbox from "./renderInbox";
import renderToday from "./renderToday";
import renderUpcoming from "./renderUpcoming";
import "./style.css";

const inbox = [];
const today = [];
const upcoming = [];
const projects = [];

export function getProjects() {
  return projects;
}

export function getInbox() {
  return inbox;
}

export function getToday() {
  return today;
}

export function getUpcoming() {
  return upcoming;
}

renderNav();
renderInbox();
