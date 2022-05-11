const todoInput = document.getElementById('add-todo');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', (e)=>{
    e.preventDefault();  
    
    const liElement = document.createElement('li');
    const todoList = document.getElementById('todo-list');

    liElement.textContent = todoInput.value; 

    todoList.appendChild(liElement);
    todoInput.value = '';
});
