let tasksTodo = [];
let tasksDoing = [];
let tasksDone = [];

function addTask() {
  let task = {};
  task.title = prompt("Enter Task Title");
  task.description = prompt("Enter Task Description");

  do {
    task.status = prompt("Enter Task Status");
    task.status = task.status.toLowerCase();

    switch (task.status) {
      case "todo":
        tasksTodo[tasksTodo.length] = task;
        break;

      case "doing":
        tasksDoing[tasksDoing.length] = task;
        break;

      case "done":
        tasksDone[tasksDone.length] = task;
        break;

      default:
        alert("Invalid status. Please enter 'todo', 'doing or 'done'.");
    }
  } while (
    task.status !== "todo" &&
    task.status !== "doing" &&
    task.status !== "done"
  );
}

while (confirm("Would you like to add a new task?")) {
  addTask();

  if (tasksDone.length != 0) {
    for (let i = 0; i !== tasksDone.length; i++) {
      console.log("Title: " + tasksDone[i].title + "\nStatus: Done");
    }
  } else {
    console.log("No tasks complete, let's get to work!");
  }

  console.clear();
}
