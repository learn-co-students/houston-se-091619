import React, { Component } from "react";
import {connect} from 'react-redux'

class Counter extends Component {

    // componentDidMount() {
    //   store.subscribe(() => {
    //     this.setState({
    //       count: store.getState().count
    //     })
    //   })
    // }
  
    // increment = (amount) => {
    //   store.dispatch({type:"Increment", amount }) //amount: amount
    // }
  
    // decrement = (amount) => {
    //   store.dispatch({type:"Decrement", amount })
    // }
  
  
    render() {
      console.log(this.props)
      return (
        <div className="Counter">
          <h1>{this.props.count}</h1>
          <button onClick={() => this.decrement(1)}> - </button>
          <button onClick={() => this.props.increment(1)}> + </button>
          <button onClick={() => this.decrement(3)}> -3 </button>
          <button onClick={() => this.increment(5)}> +5 </button>
        </div>
      );
    }

  }

  const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.count
    }
}

    const mapDispatchToProps = (dispatch) => {
    // console.log("Whats this?",something)
    return{
        increment: ((amount) => dispatch({type: "Increment", amount}))
    }

    }

  export default connect(mapStateToProps, mapDispatchToProps)(Counter)