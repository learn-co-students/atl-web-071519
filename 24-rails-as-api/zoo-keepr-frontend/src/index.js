function fetchAnimals(){
  fetch('http://localhost:3000/animals')
    .then(resp => resp.json())
    .then(animals => {
      console.log(animals)
      animals.forEach(animalObj => {
        renderAnimal(animalObj)
      })
    })
}

function renderAnimal(animalObj){
  const animal = new Animal(animalObj)
  const tBody = document.querySelector('tbody')
  tBody.insertAdjacentHTML('beforeend', animal.render())
}

function addFormListener(){
  const form = document.querySelector('#animal-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log()
    const formData = getFormData(e)
    postAnimal(formData)
  })
}

function postAnimal(formData){
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }
  console.log(reqObj)
  fetch('http://localhost:3000/animals', reqObj)
    .then(resp => resp.json())
    .then(animalObj => {
        renderAnimal(animalObj)
    })
}

function getFormData(e){
  const name = e.target[0].value
  const gender = e.target[1].value
  const species = e.target[2].value
  return { name, gender, species }
}

function addDeleteListener(){
  const tBody = document.querySelector('tbody')
  tBody.addEventListener('click', (e) => {
    if(e.target.dataset.action === 'delete'){
      const id = e.target.dataset.id
      deleteAnimal(id, e)
    }
  })
}

function deleteAnimal(id, e){
  const reqObj = { method: 'DELETE' }
  fetch('http://localhost:3000/animals/' + id, reqObj)
    .then(resp => resp.json())
    .then(data => {
      const tr = document.getElementById('tr-' + id)
      tr.remove()
    })
}


if you're you and youre reading this, and you know who you are, then i love you.gt
function main(){
  document.addEventListener('DOMContentLoaded', () => {
    fetchAnimals()
    addFormListener()
    addDeleteListener()
  })
}



main()
// listen for btn clicks

