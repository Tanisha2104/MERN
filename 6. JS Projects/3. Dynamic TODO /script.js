let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("add");
let taskList = document.getElementById("taskList");
let selectedFilter = "all";
function inputValue() {
  if (taskInput.value != "") {
    let trimmedValue = taskInput.value.trim();
    return trimmedValue;
  } else {
    return null;
  }
}

function addTask() {
  let taskText = inputValue();
  if (taskText === null) {
    return;
  }
  let list = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    list.classList.toggle("completed");
    applyFilter();
  });
  let span = document.createElement("span");
  let deletebtn = document.createElement("button");
  list.appendChild(checkbox);
  list.appendChild(span);
  list.appendChild(deletebtn);
  list.classList.add("task-item");
  deletebtn.classList.add("delete-btn");
  deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deletebtn.addEventListener("click", function () {
    list.remove();
  });
  span.innerHTML = taskText;

  taskList.appendChild(list);
  applyFilter();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

let filterRows = document.querySelectorAll(".filter-btn");
filterRows.forEach((element) => {
  element.addEventListener("click", function () {
    filterRows.forEach((row) => {
      row.classList.remove("active");
    });
    element.classList.add("active");

    selectedFilter = element.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  taskList.querySelectorAll(".task-item").forEach((task) => {
    if (selectedFilter == "all") {
      task.style.display = "flex";
    } else if (selectedFilter == "active") {
      if (task.classList.contains("completed")) {
        task.style.display = "none";
      } else {
        task.style.display = "flex";
      }
    } else if (selectedFilter == "completed") {
      if (task.classList.contains("completed")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    }
  });
}

//JS Completed