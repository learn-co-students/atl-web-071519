function fetchAnimals() {
  fetch('http://localhost:3000/animals')
    .then(resp => resp.json())
    .then(data => renderAnimals(data))
}

function renderAnimals(animals){
  animals.forEach((animalObj) => {
    renderAnimal(animalObj)
  })
}

function renderAnimal(animalObj){
  const animal = new Animal(animalObj)
  const tBody = document.querySelector('tbody')
  tBody.insertAdjacentHTML('beforeend', animal.render());
}

function createFormListener(){
  const animalForm = document.querySelector('#animal-form')
  animalForm.addEventListener('submit', (e) => handleFormSubmit(e))
}

function handleFormSubmit(e){
  e.preventDefault();
  const newAnimal = scrapeFormData(e);
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnimal),
  }

  renderAnimal(data)

  fetch('http://localhost:3000/animals', reqObj)
    .then(resp => resp.json())
    .then(data => {
      console.log('succesfully created new animal', data)
    })
}

function scrapeFormData(e){
  const name = e.target[0].value
  const gender = e.target[1].value
  const species = e.target[2].value
  return { name, gender, species }
}

function createDestroyListener(){
  const table = document.querySelector('table')
  table.addEventListener('click', (e) => handleDelete(e));
}

function handleDelete(e){
  if (e.target.id === 'delete-btn') {
    const reqObj = { method: 'DELETE' }
    const animalId = e.target.dataset.id

    fetch(`http://localhost:3000/animals/${animalId}`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        const row = e.target.parentNode.parentNode
        row.remove()
      }
    )
  }
}

function main() {
  document.addEventListener('DOMContentLoaded', () => {
    fetchAnimals();
    createFormListener();
    createDestroyListener();
  })
}

main()

class Animal {
  constructor(animalObj){
    console.log(animalObj)
    this.id = animalObj.id
    this.name = animalObj.name
    this.gender = animalObj.gender;
    this.speciesId = animalObj.species_id;
  }

  render(){
    return (`<tr>
      <td>${this.name}<button data-id=${this.id} id='delete-btn' class="ui basic button" type="submit">X</button></td>
      <td>${this.gender}</td>
      <td>${this.speciesId}</td>
    </tr>`)
  }
}
