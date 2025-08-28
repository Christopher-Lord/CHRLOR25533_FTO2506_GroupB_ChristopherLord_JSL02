# JSL02 Project: Task Input and Status Validation System

## Project Description

This project involves implementing a JavaScript-based task entry system where users can input a number of tasks with complete details, ensuring data consistency and validation. The system will guide users through entering valid task titles, descriptions, and statuses, enforcing correct formatting while maintaining code clarity and maintainability.

## Setup Instructions

1. Clone or download this repo
2. If downloaded, extract files and open index.html either in VSCode or straight in your browser
3. If opened in VSCode, use the Live Server extension to view the web page

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Multiple task entry system through prompts
- Able to enter task title, description and status
- All task info gets stored in an array depending on status
- Status validation system so no invalid status can be stored
- Display of completed tasks in the console
- Display of motivational message if no tasks are complete

## Usage Examples

- Entering and storing multiple different tasks
- Keeping track of which tasks you have completed

## Usage instructions

- When the first prompt pops up, select 'OK' to start entering tasks
- Select cancel after entering any **full** task (Title, description and status) to stop the task entry
- Or continue to select 'OK' to keep entering as many tasks as you like

## Important Prerequisite

1. Before starting this challenge, ensure that you have **corrected your JSL01 project (HTML and CSS)** using the solution provided. This will help maintain consistency and ensure you build on a solid foundation.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Key Objectives

### Logic & User Interaction

- Ensure the JavaScript file is correctly linked to the HTML document.
- Prompt the user to enter details (title, description, status) for two separate tasks and store them in variables.
- Convert all status inputs to lowercase automatically for consistency.
- Validate the status input to allow only "todo", "doing", or "done" and repeatedly prompt the user until a valid status is entered.
- Display the title and status of completed tasks (status: "done") in the console.
- If no tasks are marked as "done", show a motivational message in the console: "No tasks completed, let's get to work!".

## Code Quality & Maintainability

- Use descriptive variable names to enhance readability and maintainability.
- Include clear comments explaining complex logic and functionality for easier understanding.

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)
