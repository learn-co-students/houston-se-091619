import React from 'react'

class Pet extends React.Component {
  // state = {
  //   test: true
  // }

  render() {
    // this.setState({
    //   test: false
    // }) NEVER DO THIS

    // let symbol = null
    // if(this.props.pet.gender === "male"){
    //   symbol = '♂'
    // }else{
    //   symbol = '♀'
    // }
    // let test = true
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂' : '♀' }

            {/* {this.props.pet.gender === "male" ? '♂' : test ? "hi" : "Not hi"} */}
            {/* {symbol} */}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted
          ?<button className="ui disabled button">Already adopted</button>
          :<button className="ui primary button" onClick={() => this.props.adoptPet(this.props.pet)}> Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
