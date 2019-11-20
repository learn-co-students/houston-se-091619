import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props)
    return <div className="ui cards">

      {this.props.pets.map(pet => <Pet pet={pet} adoptPet={this.props.adoptPet} />)}
      
    </div>
  }
}

export default PetBrowser