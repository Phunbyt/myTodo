// getting elements
document.addEventListener("DOMContentLoaded", getTodo);

let userInput = document.querySelector(".todo-item-input");
let addItemBtn = document.querySelector(".addBtn");
let todoUl = document.querySelector(".todoList");
let filterTodo = document.querySelector(".filter-todos");

// adding the event listeners

addItemBtn.addEventListener("click", addItem);
todoUl.addEventListener("click", removeItem);
filterTodo.addEventListener("click", filtered);

// adding functions to event listeners
function addItem(e) {
    // prevent add buttton default event
    e.preventDefault();

    if (userInput.value == "") {
        userInput.placeholder = `enter a valid input`;
        return false;
    }
    // creating new elements

    // the todo div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("theList");

    // the todo li
    let todoLi = document.createElement("li");
    todoLi.classList.add("todoItem");
    todoLi.textContent = userInput.value;
    saveLocalTodo(userInput.value);

    // the todo butttons
    let taskCompletedBtn = document.createElement("button");
    taskCompletedBtn.innerHTML = `<i class="fas fa-check">`;
    taskCompletedBtn.classList.add("completedBtn");

    let taskDeletedBtn = document.createElement("button");
    taskDeletedBtn.innerHTML = `<i class="fas fa-trash">`;
    taskDeletedBtn.classList.add("deletedBtn");

    // appending elements

    todoUl.appendChild(todoDiv);

    todoDiv.appendChild(todoLi);
    todoDiv.appendChild(taskCompletedBtn);
    todoDiv.appendChild(taskDeletedBtn);

    userInput.value = ``;

    userInput.placeholder = `enter a new item`;

    // save todo input to local storage
}

// removing todo items
function removeItem(e) {
    let clickedItem = e.target;

    if (clickedItem.classList == "deletedBtn") {
        clickedItem = clickedItem.parentElement;
        clickedItem.classList.add("taskDelete");
        removeLocalTodo(todoUl);
        clickedItem.addEventListener("transitionend", e => {
            clickedItem.remove();
        });
    } else if (clickedItem.classList == "completedBtn") {
        clickedItem = clickedItem.parentElement;
        clickedItem.classList.toggle("taskComplete");
    } else {}
}

// adding todo filters
function filtered(e) {
    const todos = todoUl.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("taskComplete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("taskComplete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}

// saving and removing from local storage

// saving to local storage

function saveLocalTodo(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// removing from local

function getTodo(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo) {
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("theList");

        // the todo li
        let todoLi = document.createElement("li");
        todoLi.classList.add("todoItem");
        todoLi.textContent = todo;

        // the todo butttons
        let taskCompletedBtn = document.createElement("button");
        taskCompletedBtn.innerHTML = `<i class="fas fa-check">`;
        taskCompletedBtn.classList.add("completedBtn");

        let taskDeletedBtn = document.createElement("button");
        taskDeletedBtn.innerHTML = `<i class="fas fa-trash">`;
        taskDeletedBtn.classList.add("deletedBtn");

        // appending elements

        todoUl.appendChild(todoDiv);
        todoDiv.appendChild(todoLi);
        todoDiv.appendChild(taskCompletedBtn);
        todoDiv.appendChild(taskDeletedBtn);
    });
}

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todoUl.childNodes;
    todos.splice(todos.indexOf(todoIndex), 2);

    localStorage.setItem("todos", JSON.stringify(todos));
}

// mobile functions

// getting elements
document.addEventListener("DOMContentLoaded", getmtodo);

let muserInput = document.querySelector(".mtodo-item-input");
let maddItemBtn = document.querySelector(".maddBtn");
let mtodoUl = document.querySelector(".mtodoList");
let filtermtodo = document.querySelector(".filter-mtodos");

// maddIng the event listeners

maddItemBtn.addEventListener("click", maddItem);
mtodoUl.addEventListener("click", mremoveItem);
filtermtodo.addEventListener("click", mfiltered);

// maddIng functions to event listeners
function maddItem(e) {
    // prevent add buttton default event
    e.preventDefault();

    if (muserInput.value == "") {
        muserInput.placeholder = `enter a valid input`;
        return false;
    }
    // creating new elements

    // the mtodo div
    let mtodoDiv = document.createElement("div");
    mtodoDiv.classList.add("mtheList");

    // the mtodo li
    let mtodoLi = document.createElement("li");
    mtodoLi.classList.add("mtodoItem");
    mtodoLi.textContent = muserInput.value;
    saveLocalmtodo(muserInput.value);

    // the mtodo butttons
    let mtaskCompletedBtn = document.createElement("button");
    mtaskCompletedBtn.innerHTML = `<i class="fas fa-check">`;
    mtaskCompletedBtn.classList.add("mcompletedBtn");

    let mtaskDeletedBtn = document.createElement("button");
    mtaskDeletedBtn.innerHTML = `<i class="fas fa-trash">`;
    mtaskDeletedBtn.classList.add("mdeletedBtn");

    // appending elements

    mtodoUl.appendChild(mtodoDiv);

    mtodoDiv.appendChild(mtodoLi);
    mtodoDiv.appendChild(mtaskCompletedBtn);
    mtodoDiv.appendChild(mtaskDeletedBtn);

    muserInput.value = ``;

    muserInput.placeholder = `enter a new item`;

    // save mtodo input to local storage
}

// removing mtodo items
function mremoveItem(e) {
    let mclickedItem = e.target;

    if (mclickedItem.classList == "mdeletedBtn") {
        mclickedItem = mclickedItem.parentElement;
        mclickedItem.classList.add("mtaskdelete");
        removeLocalmtodo(mtodoUl);
        mclickedItem.addEventListener("transitionend", e => {
            mclickedItem.remove();
        });
    } else if (mclickedItem.classList == "mcompletedBtn") {
        mclickedItem = mclickedItem.parentElement;
        mclickedItem.classList.toggle("mtaskcomplete");
    } else {}
}

// maddIng mtodo filters
function mfiltered(e) {
    const mtodos = mtodoUl.childNodes;
    mtodos.forEach(function(mtodo) {
        switch (e.target.value) {
            case "mall":
                mtodo.style.display = "flex";
                break;
            case "mcompleted":
                if (mtodo.classList.contains("mtaskcomplete")) {
                    mtodo.style.display = "flex";
                } else {
                    mtodo.style.display = "none";
                }
                break;
            case "muncompleted":
                if (!mtodo.classList.contains("mtaskcomplete")) {
                    mtodo.style.display = "flex";
                } else {
                    mtodo.style.display = "none";
                }
        }
    });
}

// saving and removing from local storage

// saving to local storage

function saveLocalmtodo(mtodo) {
    let mtodos;

    if (localStorage.getItem("mtodos") === null) {
        mtodos = [];
    } else {
        mtodos = JSON.parse(localStorage.getItem("mtodos"));
    }
    mtodos.push(mtodo);
    localStorage.setItem("mtodos", JSON.stringify(mtodos));
}

// removing from local

function getmtodo(mtodo) {
    let mtodos;

    if (localStorage.getItem("mtodos") === null) {
        mtodos = [];
    } else {
        mtodos = JSON.parse(localStorage.getItem("mtodos"));
    }

    mtodos.forEach(function(mtodo) {
        let mtodoDiv = document.createElement("div");
        mtodoDiv.classList.add("mtheList");

        // the mtodo li
        let mtodoLi = document.createElement("li");
        mtodoLi.classList.add("mtodoItem");
        mtodoLi.textContent = mtodo;

        // the mtodo butttons
        let mtaskCompletedBtn = document.createElement("button");
        mtaskCompletedBtn.innerHTML = `<i class="fas fa-check">`;
        mtaskCompletedBtn.classList.add("mcompletedBtn");

        let mtaskDeletedBtn = document.createElement("button");
        mtaskDeletedBtn.innerHTML = `<i class="fas fa-trash">`;
        mtaskDeletedBtn.classList.add("mdeletedBtn");

        // appending elements

        mtodoUl.appendChild(mtodoDiv);
        mtodoDiv.appendChild(mtodoLi);
        mtodoDiv.appendChild(mtaskCompletedBtn);
        mtodoDiv.appendChild(mtaskDeletedBtn);
    });
}

function removeLocalmtodo(mtodo) {
    let mtodos;
    if (localStorage.getItem("mtodos") === null) {
        mtodos = [];
    } else {
        mtodos = JSON.parse(localStorage.getItem("mtodos"));
    }
    const mtodoIndex = mtodoUl.childNodes;
    mtodos.splice(mtodos.indexOf(mtodoIndex), 1);

    localStorage.setItem("mtodos", JSON.stringify(mtodos));
}