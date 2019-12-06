import React from 'react';
import {connect} from 'react-redux'


class Comments extends React.Component{

    // trying = (e) => {
    //     debugger
    // }

  render(){
    return(<div>
        <h3>Likes:{this.props.likes}</h3>
        <button onClick={this.props.increaseLike}>Like</button>



        <h2>Comments</h2>
        <div className="ui input focus">
            <input type="text" placeholder="write something about the image!!" />
            <button onClick={(e) => this.props.addAComment(e.target.previousElementSibling.value)}>Submit</button>
        </div>


        {this.props.comments.map(comment => <li>{comment}</li>)}
        
      </div>)
  }
} 

const mapStateToProps = (state) => {
    return{
        likes: state.reducer.img.likes,
        comments: state.reducer.img.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addAComment: ((comment) => dispatch({type: "add a comment", comment})),
        increaseLike: (() => dispatch({type: "like"}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)