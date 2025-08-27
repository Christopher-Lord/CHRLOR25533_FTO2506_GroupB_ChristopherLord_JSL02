// Initializing each task column as its own empty array, so we have something for our prompts to populate
let tasksTodo = [];
let tasksDoing = [];
let tasksDone = [];

// Creating a function that handles the prompt inputs/validation and assigns tasks to their respective array based on the status input
function addTask() {
  let task = {}; // Initializing an empty object to hold all the user inputs for each task

  task.title = prompt("Enter Task Title:");
  task.description = prompt("Enter Task Description:");

  /* Creating a loop to check if the entered 'status' is valid.
    If it's not valid it will alert the user and repeat the loop until a valid 'status' is entered
    If it is valid it will assign the full task to its respective array */
  do {
    task.status = prompt("Enter Task Status:").toLowerCase(); //Making the 'status' input lowercase for consistency

    // Switch statement to validate the 'status' input and assign the task to its respective array
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

    /*
    // Optional: To log each array
    console.log("TODO:\n", tasksTodo);
    console.log("Doing:\n", tasksDoing);
    console.log("Done:\n", tasksDone);
    */
  } while (
    task.status !== "todo" &&
    task.status !== "doing" &&
    task.status !== "done"
  );
}

// Loop to let you add as many tasks as you want, runs the addTasks() function until canceled
while (confirm("Would you like to add a new task?")) {
  addTask(); //Calling the function
}

/* Checking if there are any objects in the tasksDone array.
    If there are any, runs a loop to display the title and status of each task object
    If not, shows a motivational message */
if (tasksDone.length !== 0) {
  for (let i = 0; i !== tasksDone.length; i++) {
    console.log("Title: " + tasksDone[i].title + "\nStatus: Done\n\n");
  }
} else {
  console.log("No tasks complete, let's get to work!");
}

// ----------------------------------------------------------------------------------------------------------------------

/* ====================================
          Alternate Version:
   ==================================== */

/*
let numberOfTasks = 2;
let doneTasksCount = 0;
let doneTasksInfo = "";

for (let i = 1; i <= numberOfTasks; i++) {
  let taskTitle = prompt(`Enter Task ${i} Title:`);
  let taskDescription = prompt(`Enter Task ${i} Description:`);
  let taskStatus;

  do {
    taskStatus = prompt(`Enter Task ${i} Status:`).toLowerCase();

    if (
      taskStatus !== "todo" &&
      taskStatus !== "doing" &&
      taskStatus !== "done"
    ) {
      alert("Invalid status. Please enter 'todo', 'doing or 'done'.");
    }
  } while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  );

  if (taskStatus === "done") {
    doneTasksCount++;
    doneTasksInfo += `Title: ${taskTitle}\nStatus: Done\n\n`;
  }
}

if (doneTasksCount !== 0) {
  console.log(doneTasksInfo);
} else {
  console.log("No tasks complete, let's get to work!");
}
*/
