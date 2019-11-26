import React from 'react'

export default function SearchBar(props){
    return(<div>
        <input type="text" placeholder="searchTerm" onChange={(e) => props.videoSearch(e.target.value) } />
        <button onClick={props.changeDisplay}>Search</button>
    </div>)
}