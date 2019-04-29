// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-times 2x"></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
    //console.log(e.target);
    if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
    }
  }
}

// clear tasks
function clearTasks() {
    // taskList.innerhtml = '';

    // or faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //https://jsperf.com/innerhtml-vs-removechild
}

// filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('.collection-item').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}