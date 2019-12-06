import React, { Component } from "react";
import Header from './Header'
import Counter from './Counter'


class App extends Component {


    // state = { count: 0 };
  
    // increment = () => {
    //   // this.setState(prevState => ({ count: prevState.count + 1 }));
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // };
  
    // decrement = () => {
    //   // this.setState(prevState => ({ count: prevState.count - 1 }));
    //   this.setState({
    //     count: this.state.count - 1
    //   })
    // };
  
    render() {
      return (
        <div className="App">
          <Header />
          <Counter/> 
        </div>
      );
    }
  }

  export default App