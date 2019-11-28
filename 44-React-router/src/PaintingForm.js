import React from 'react'
import {Link} from 'react-router-dom'

class PaintingForm extends React.Component{

    handleSubmit = () => {
        this.props.history.push("/paintings")
    }

    render(){
        // console.log(this.props)
        return(<div>
            <form onSubmit={(e) => {
                this.props.addPainting(e)
                this.handleSubmit()
                }}>
                <input type='text' placeholder='Painting Title'/>
                <input type='text' placeholder='Painting Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Painting'/>
            </form>
            <Link to="/paintings">Go to Home</Link>
        </div>)
    }
}

export default PaintingForm