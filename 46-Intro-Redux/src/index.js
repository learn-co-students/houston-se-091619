import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from './App'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/rootReducer'

// let initialStates = {
//   count: 0
// }


const store = createStore(reducer)
// console.log(store)

store.subscribe(() => {
  console.log("-----------------------------")
  console.log("currentState:", store.getState())
})





// class App extends Component {


//   // state = { count: 0 };

//   // increment = () => {
//   //   // this.setState(prevState => ({ count: prevState.count + 1 }));
//   //   this.setState({
//   //     count: this.state.count + 1
//   //   })
//   // };

//   // decrement = () => {
//   //   // this.setState(prevState => ({ count: prevState.count - 1 }));
//   //   this.setState({
//   //     count: this.state.count - 1
//   //   })
//   // };

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Counter/> 
//       </div>
//     );
//   }
// }





ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById("root"));
