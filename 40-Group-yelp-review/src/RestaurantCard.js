import React from 'react'

function RestaurantCard(props){
    console.log(props)
    return(
        <div class="ui card">
  <div class="image">
    <img src={props.restaurant.img} />
  </div>
  <div class="content">
<div class="header">{props.restaurant.name}</div>
  </div>
  <div class="extra content">
    <a>
      <i aria-hidden="true" class="user icon"></i>
      Rating: {props.restaurant.rating}/5
    </a>
  </div>
</div>)
}

export default RestaurantCard