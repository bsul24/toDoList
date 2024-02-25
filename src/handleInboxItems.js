import ToDo from "./toDo";
import { getInbox } from ".";

export default function addInboxItem(item) {
  const inbox = getInbox();
  for (const task of inbox) {
    if (task.desc === item) {
      alert("Task already exists");
      return;
    }
  }
  const toDo = new ToDo(item);
  inbox.push(toDo);
}

export function removeInboxItem(item) {
  const inbox = getInbox();
  for (let i = 0; i < inbox.length; i++) {
    if (inbox[i] === item) {
      inbox.splice(i, 1);
      return;
    }
  }
}
