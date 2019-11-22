import React from 'react'
import HogCard from './HogCard'

class HogList extends React.Component{
    render(){
        return(<div>
            {this.props.hogs.map(hog => <HogCard {...hog} /> )}
       
        </div>)
    }
}

export default HogList