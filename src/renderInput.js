export default function renderInput(addFunc, renderFunc, nav, project = null) {
  let main;
  if (nav) {
    main = document.querySelector("#nav");
    const newProjBtn = document.querySelector(".newProjBtn");
    newProjBtn.style.display = "none";
  } else {
    main = document.querySelector("#content");

    // Hide new item button
    const newItemBtn = document.querySelector(".newItemBtn");
    newItemBtn.style.display = "none";
  }

  // Create input
  const input = document.createElement("input");
  input.classList.add("addInput");
  main.appendChild(input);

  // Create input buttons
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.classList.add(".addBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("cancel");
  main.appendChild(addBtn);
  main.appendChild(cancelBtn);

  addBtn.addEventListener("click", function (e) {
    const input = document.querySelector(".addInput");
    addFunc(input.value);
    if (project) {
      renderFunc(project);
    } else {
      renderFunc();
    }
  });
  cancelBtn.addEventListener("click", renderFunc);
}
