class Animal {
  constructor(animalObj){
    this.id = animalObj.id
    this.name = animalObj.name
    this.gender = animalObj.gender
    this.speciesId = animalObj.species_id
  }

  render(){
    return(`<tr id="tr-${this.id}"><td>${this.name}<button data-id=${this.id} data-action='delete' class="ui basic button" >X</button></td><td>${this.gender}</td><td>${this.speciesId}</td></tr>`)
  }
}
