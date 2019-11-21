import React from 'react'
import RestaurantCard from './RestaurantCard'

function Listing(props){
    console.log(props)
    return(<div>
        {props.restaurants.map(restaurant =>  <RestaurantCard restaurant={restaurant} /> )}
       
    </div>)
}

export default Listing