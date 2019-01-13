var todoApp = {
    todoList: [],
    updateTodoName: function(index, newName) {
        this.todoList[index].name = newName;
    },
    deleteTodo: function(index) {
        this.todoList.splice(index, 1);
    },
    addTodo: function(todoName) {
        var newTodo = { name: todoName, isDone: false };
        this.todoList.push(newTodo);
    },
    toggleTodo: function(index) {
        var todoTarget = this.todoList[index];
        todoTarget.isDone = !todoTarget.isDone;
    },
    displayCompleted: function() {
        if (this.isEmpty()) {
            return;
        }
        for (var i = 0; i < this.todoList.length; i++) {
            var todoTemp = this.todoList[i];
            if (todoTemp.isDone) {
                console.log(todoTemp.name);
            }
        }
    },
    isEmpty: function() {
        if (this.todoList.length === 0) return true;
        return false;
    },
    toggleAll: function() {
        var countCompleted = 0;
        var length = this.todoList.length;
        // loop through the list, each todo completed, increase count by one

        this.todoList.forEach(function(todo) {
            if (todo.isDone) countCompleted++;
        })

        // if everything true, make everything false
        if (countCompleted === length) {
            this.todoList.forEach(function(todo) {
                todo.isDone = false;
            })
            return;
        }
        // otherwise, make everyone true
        this.todoList.forEach(function(todo) {
            todo.isDone = true;
        })
    }
}

var handlers = {
    toggleAll: function() {
        todoApp.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoInput = document.getElementById('addTodoInput');
        todoApp.addTodo(addTodoInput.value);
        addTodoInput.value = '';
        view.displayTodos();
    },
    updateTodoName: function() {
        var updateTodoIndex = document.getElementById('updateTodoIndex');
        var updateTodoName = document.getElementById('updateTodoName');
        todoApp.updateTodoName(updateTodoIndex.valueAsNumber, updateTodoName.value);
        updateTodoIndex.value = '';
        updateTodoName.value = '';
        view.displayTodos(); 
    },
    deleteTodo: function(index) {
        todoApp.deleteTodo(parseInt(index));
        view.displayTodos();
    },
    toggleTodo: function() {
        var toggleTodoIndex = document.getElementById('toggleTodoIndex');
        todoApp.toggleTodo(toggleTodoIndex.valueAsNumber);
        toggleTodoIndex.value = '';
        view.displayTodos();
    },
    handleUlClick: function(e) {
        var clickedELement = e.target;
        if (clickedELement.className = 'deleteBtn') {
            handlers.deleteTodo(clickedELement.parentNode.id);
        }
    }
}

var view = {
    displayTodos: function() {
        var todoList = document.getElementById('todoList');
        // todo: check the case empty list
        todoList.innerHTML = '';
        todoApp.todoList.forEach(function(todo, i) {
            var todoItem = document.createElement('li');
            todoItem.id = i;
            var completedText = todo.isDone ? '(x)' : '( )';
            todoItem.textContent = completedText + ' ' + todo.name;
            todoItem.appendChild(this.createDeleteBtn(i));
            todoList.appendChild(todoItem);
        }, this)
    },
    createDeleteBtn: function(id) {
        var btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.className = 'deleteBtn';
        return btn;
    }
}
