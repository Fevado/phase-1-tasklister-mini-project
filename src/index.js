const task=["Eat", "Feed Cat", "Play"]
let comtainer= document.getElementById('tasks')

 task.map((todo)=>{
   let myTodo=document.createElement('li')
   myTodo.textcontent= todo
   comtainer.appendChild(myTodo)
 })

const taskInput= document.getElementById('new-task-description')
taskInput.addEventListener('input', handleAdd)

let taskName;
function handleAdd(e){
 taskName=e.target.value
}


const myForm= document.getElementById('create-task-form')
myForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault()
  task.push(taskName)
}