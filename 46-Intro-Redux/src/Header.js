import React, { Component } from "react";
import logo from "./logo.svg";




class Header extends Component {

    // componentDidMount(){
    //   store.subscribe(() => {
    //   this.setState({})
    //   })
    // }
    renderDescription = () => {
    //   const remainder = store.getState().count % 5;
    //   const upToNext = 5 - remainder;
    //   console.log(remainder)
  
    //   return `The current count is less than ${store.getState().count + upToNext}`;
    };
  
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {/* <h3>{this.renderDescription()}</h3> */}
        </header>
      );
    }
  }

  export default Header