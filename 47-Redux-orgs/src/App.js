import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImgContainer from './ImgContainer';
import Comments from './Comments'
import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{
  render(){
    return(<div>
      <ImgContainer/>
      <Comments />
    </div>)
  }
} 

export default App;
