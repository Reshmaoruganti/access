
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
        
        
        li.style.backgroundColor = getRandomColor();
        
        taskList.appendChild(li);
        taskInput.value = ''; 
    } else {
        alert("Please enter a task.");
    }
}


function deleteTask(element) {
    element.parentElement.remove();
}


function getRandomColor() {
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
