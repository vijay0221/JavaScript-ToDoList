'use strict';

// variables 

const addTask=document.getElementById('adds-task');
const taskContainer=document.getElementById('task-container');
const inputTask=document.getElementById('input-task');

//evet Listner for addbutton

addTask.addEventListener('click',function(){

  let task=document.createElement('div');
  task.classList.add('task');

  let li=document.createElement('li');
  li.innerText=`${inputTask.value}`;
  task.appendChild(li);

  let checkButton=document.createElement("button");
  checkButton.innerHTML= `<i class="fa fa-check"></i>`;
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton=document.createElement("button");
  deleteButton.innerHTML=`<i class="fa fa-trash-o"></i>`
  deleteButton.classList.add('deleteTask');
  task.appendChild(deleteButton);



  if(inputTask.value===""){
    alert('please enter task')
  }else{
    taskContainer.appendChild(task)
  }
  inputTask.value="";

  checkButton.addEventListener('click',function(){
     checkButton.parentElement.style.textDecoration="line-through"//parentElemetn cuz we need  go one element up then we need to travers the DOM
  })

  deleteButton.addEventListener('click',function(e){
    let target=e.target;
    // console.log(target);
    target.parentElement.parentElement.remove();
  })
})

