import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from "./Listing"
import 'semantic-ui-css/semantic.min.css'
import restaurants from './restaurants'

class App extends React.Component {

  state = {
    restaurants: restaurants, //restaurants
    displayRestaurants: restaurants,
    searchTerm: null
  }

  changeSearch = (searchTerm) => {
    // debugger
    this.setState({
      searchTerm //searchTerm: searchTerm
    })
  }

  filterRestaurant = () => {
    // debugger
    // let res = this.state.restaurants.filter(restaurant => restaurant.name.includes(this.state.searchTerm))

    this.setState({
      displayRestaurants: this.state.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })
  }
  
  render(){return (
    <div>
      <div class="ui search">
      <div class="ui icon input">
        <input class="prompt" type="text" placeholder="search..." onChange={(e) => this.changeSearch(e.target.value)}/>
      </div>
      <i class="search icon" onClick={this.filterRestaurant}></i>

      
    </div>
    <div class="results">
    <Listing restaurants={this.state.displayRestaurants}/>
    </div>
    </div>
  )}
}

export default App;
