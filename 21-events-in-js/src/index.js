document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.getElementById('create-task-form')
  const ulEl = document.querySelector('#tasks')

  formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    const newTaskEl = document.querySelector('#new-task-description')

    const newTask = new Task(newTaskEl.value)
    console.log(newTask)

    ulEl.append(newTask.element)

    newTaskEl.value = ''
  })

  ulEl.addEventListener('click', (e)=>{
    if (e.target.className == 'remove-btn'){
      e.target.parentNode.remove()
    }
  })
})


class Task {
  constructor(value){
    this.inputValue = value
    this.element = this.constructTaskElement()
  }

  constructTaskElement(){
    const liEl = document.createElement("li");
    liEl.innerText = this.inputValue
    const removeBtnEl = document.createElement("button");
    removeBtnEl.innerText = 'remove'
    removeBtnEl.className = 'remove-btn'
    liEl.append(removeBtnEl)
    return liEl
  }
}

