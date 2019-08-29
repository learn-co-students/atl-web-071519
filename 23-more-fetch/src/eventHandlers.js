function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase())
  })
  const filteredPokeHTML = renderAllPokemon(filteredPokes)
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}


function handleContainerClick(event, allPokemonData) {
  if (event.target.dataset.action === 'flip') {
    handleImageClick(event, allPokemonData)
  } else if(event.target.dataset.action === 'delete') {
    handleDeleteClick(event, allPokemonData)
  }
}

function handleDeleteClick(event, allPokemonData) {
  const pokeId = event.target.dataset.id
  const reqObj = {
    method: 'DELETE',
  }

  fetch(`http://localhost:3000/pokemon/${pokeId}`, reqObj)
    .then(resp => resp.json())
    .then(data  => {
      event.target.parentNode.parentNode.remove()
    })
}




function handleImageClick(event, allPokemonData) {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
}

function handleNewPokemon(event) {
  event.preventDefault();
  const formData = grabNewPokemonData()
  postNewPokemon(formData)
}

function postNewPokemon(formData) {
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  fetch('http://localhost:3000/pokemon', reqObj)
    .then(resp => resp.json())
    .then(data  => {
      const pokemonContainer = document.querySelector('#pokemon-container')
      const pokeCard = renderSinglePokemon(data)
      pokemonContainer.insertAdjacentHTML( 'beforeend', pokeCard);
    })
}




function grabNewPokemonData() {
  const name = document.querySelector('#name-input').value
  const spriteUrl = document.querySelector('#sprite-input').value
  return { name, sprites: { front: spriteUrl }}
}

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}

function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id="${pokemon.id}" data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}

