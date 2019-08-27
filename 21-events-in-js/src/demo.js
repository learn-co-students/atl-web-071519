document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('#create-task-form')
    const unorderedList = document.querySelector("#tasks");

  formEl.addEventListener('submit', (e) =>{
    e.preventDefault()

    const newTask = document.querySelector('#new-task-description')
    const task = new Task(newTask.value)
    console.log(task)

    unorderedList.append(task.element)
    newTask.value = '';
  })


  unorderedList.addEventListener('click', (e)=>{
    if(e.target.className === 'remove-btn') {
      e.target.parentNode.remove()
    }
  })
})

class Task {
  constructor(value){
    this.element = this.createTaskElement(value)
  }

  createTaskElement(value) {
    const newTaskEl = document.createElement("li");
    newTaskEl.innerText = value;
    const removeButton = document.createElement("button");
    removeButton.innerText = 'Remove';
    removeButton.className= 'remove-btn';
    newTaskEl.append(removeButton)
    return newTaskEl
  }
}






