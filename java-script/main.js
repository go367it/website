//selectors
const todoinput= document.querySelector(".todo-input");
const todobutton= document.querySelector(".todo-button");
const todolist= document.querySelector(".todo-list");

//event listeners
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);

//functions
function addtodo(event){
event.preventDefault();

//todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
//create li
const newtodo = document.createElement('li');
newtodo.innerText = todoinput.value;
newtodo.classList.add('todo-item');
todoDiv.appendChild(newtodo);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//append todo list
todolist.appendChild(todoDiv);
//clear todo input value
todoinput.value= "";
}

function deletecheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === "trash-btn"){
      const todo = item.parentElement;
      //animation
      todo.classList.add('fall');
      todo.addEventListener('transitionend', function(){
      todo.remove();
      })
  }
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}
