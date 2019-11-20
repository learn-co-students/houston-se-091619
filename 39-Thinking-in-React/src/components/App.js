import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      pets: [],
      displayPets: [],
      filters: {
        type: 'all'
      }
    }
    // console.log("I am from Constructor!!")
  }

  componentDidMount(){
    // console.log("I am from CDM!!")

    fetch('/api/pets')
    .then(res => res.json())
    .then(pets => {
      this.setState({
        displayPets: pets,
        pets // pets: pets
      })
    })

  }

  changeType = (type) => {
    // debugger
    // switch(type){
    //   case "cat":
         
    //     break;
    //   case "dog":
    //     break;
    //   case "micropig":
    //     break;
    //   case "all":
    //     break;
    //   default:
    //     console.log("Wrong choice")
    // }

    this.setState({
      filters: {
        type //type: type
      }
    })
  }

  changeDisplay = () => {
    // debugger

    let display = this.state.pets.filter(pet => pet.type === this.state.filters.type)

    this.setState({
      displayPets: display
    })
  }



  render() {
    // console.log("I am from Render!!")

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.changeType} changeDisplay={this.changeDisplay}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.displayPets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
