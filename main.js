const todoList =document.getElementById("todo-list");
const todoInput =document.getElementById("todo-input");
const todoButton =document.getElementById("todo-button");
const todoFilter =document.getElementById("todo-filter");

const getTodosFromStorange = () => {
    const storange = JSON.parse(localStorage.getItem('todos'));
    return (storange) ? storange : [];
}
const todos = getTodosFromStorange();
const getTodosToPage = () => {
 todos.forEach((todo) => {
 createTodoItem(todo);
});
}

const saveTodosToStorage = (todo) => {
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    createTodoItem(todo);
}
todoButton.addEventListener('click',() =>{
    const input = todoInput.value;
    if(input) saveTodosToStorage(input);
    todoInput.value =" ";
})
 window.addEventListener('load',() =>
 {
     getTodosToPage();
 })
  const removeTodo = (target) => 
  {
      const todo =target.parentNode.childNodes[0].innerHTML;
      removeTodoFromStorange(todo);
      target.parentNode.remove();

  }
  const removeTodoFromStorange = (todo) => {
      const index = todos.indexOf(todo);
      if(index > -1) {
          todos.splice(index, 1);
          localStorage.setItem('todos',JSON.stringify(todos));
      }
  }

const createTodoItem = (text) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item','todo');
    const todoItemLi =document.createElement('li');
    todoItemLi.innerHTML =text;
    const todoItemCheck =document.createElement('i');
    todoItemCheck.classList.add('fas','fa-square');
    todoItemCheck.setAttribute('onclick','checkTodo(this)');
    const todoItemRemove =document.createElement('i');
    todoItemRemove.classList.add('fas','fa-trash-alt');
    todoItemRemove.setAttribute('onclick','removeTodo(this)');
    todoItem.appendChild(todoItemLi);
    todoItem.appendChild(todoItemCheck);
    todoItem.appendChild(todoItemRemove);
    todoList.appendChild(todoItem);
}

