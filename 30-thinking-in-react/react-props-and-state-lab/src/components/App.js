import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    const petType = event.target.value
    this.setState({ filters: { type: petType}})
  }

  onFindPetsClick = (event) => {

    const petType = this.state.filters.type
    let url = ''

    if(this.state.filters.type === 'all'){
      url = '/api/pets'
    }else{
      url = `/api/pets?type=${petType}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ pets: pets}))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">

              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />

            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
