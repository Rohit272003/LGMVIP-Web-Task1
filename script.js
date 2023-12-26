
// Store tasks in an array
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push({ name: task, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to mark a task as completed
function completeTask(index) {
    tasks[index].completed = true;
    displayTasks();
}

// Function to remove all tasks
function removeAllTasks() {
    tasks = [];
    displayTasks();
}

// Function to display tasks in the DOM
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task.name;
        taskText.style.fontSize = '25px';
        
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }
        listItem.appendChild(taskText);

        const completeButton = createButton('Complete', () => completeTask(index));
        const removeButton = createButton('Remove', () => removeTask(index));

        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    });

    const deleteAllButton = createButton('Delete All Tasks', removeAllTasks);
    taskList.appendChild(deleteAllButton);
}

// Function to create a button element
function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    return button;
}

// Display any existing tasks when the page loads
window.onload = displayTasks;
