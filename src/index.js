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

// DOM elements
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");

// Event Listeners
inboxBtn.addEventListener("click", renderInbox);
todayBtn.addEventListener("click", renderToday);
upcomingBtn.addEventListener("click", renderUpcoming);
