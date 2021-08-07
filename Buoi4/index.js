let listTodos = [];
let id = 0;

//acordion
$(document).ready(function(){
  $(".todo-overview").click(function(){
    $(this).find(".button-delete").animate({
      width: "toggle"
    });
  });
});

function delSlide(){
  $(".todo-overview").click(function(){
    $(this).find(".button-delete").animate({
      width: "toggle"
    });
  });
}

//create
$("#button-add").click(function (e) {
  let newTodo = $("#newTodo").val();
  
  const todo = {
    id: id, 
    name: newTodo,
  };
  
  listTodos.push(todo);
  localStorage.setItem("listTodos", JSON.stringify(listTodos));
  
  //create a html code
  let addHTML = `<div class="todo-overview"> 
    <p>${newTodo}</p> 
    <button type="button" class="button-delete" onclick='deleteTask(${id})'></button>
    </div>`

  $("#todo-list").append(addHTML);
  clearInput();
  $(".todo-overview").unbind(); 
  delSlide();
  pendingTask()
  id++; 
});

//clear input
function clearInput() {
  $("#idUpdate").val("");
  $("#newTodo").val("");
}

//Delete
function deleteTask(id) {
  $(".todo-overview").click(function () {
    $(this).remove(); 
    $(".todo-overview").unbind()
    delSlide()
  });
  let index = findIndexTask(id);
  listTodos.splice(index, 1); 
  localStorage.removeItem("listTodos"); 
  localStorage.setItem("listTodos", JSON.stringify(listTodos)); 
  pendingTask()
}

function findIndexTask(numberId) {
  let index;
  for (let i = 0; i < listTodos.length; i++) {
    if (listTodos[i].id == numberId) {
      index = i;
    }
  }
  return index;
}

//Read
function readTask() {
  listTodos = JSON.parse(localStorage.getItem("listTodos")); 
  if (listTodos === null){
    console.log("kcsp")
    return listTodos = []
  } else 
  {
    let tasksHTML = "";
    for (element of listTodos) {
      console.log(element);
      tasksHTML += `
      <div class="todo-overview"> 
      <p>${element.name}</p> 
      <button type="button" class="button-delete" onclick='deleteTask(${element.id})'></button>
      </div>
      `
    }
  document.querySelector("#todo-list").innerHTML = tasksHTML; 
  pendingTask()
  }
  
}

//Thong bao ve so task
function pendingTask(){
  document.getElementById('pending-task').innerHTML = 'You have '+listTodos.length+' pending tasks';
}

//clear all 
$("#button-clear").click(function(){
  $(".todo-overview").remove()
  localStorage.removeItem("listTodos");
  pendingTask()
})

readTask();
