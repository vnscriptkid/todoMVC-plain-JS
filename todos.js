var todos = ['do 1', 'do 2'];

var todoManagement = {
    todoList: todos
}

function displayTodos() {
    console.log(todos);
}

function addTodo(value) {
    todos.push(value);
    displayTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function changeTodo(index, newValue) {
    todos[index] = newValue;
    displayTodos();
}

