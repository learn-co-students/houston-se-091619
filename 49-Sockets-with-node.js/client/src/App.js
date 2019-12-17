import React, {Component} from 'react';
import Header from './Header'
import PaintingList from './PaintingList'
import 'semantic-ui-css/semantic.min.css';
import paintings from './paintings';
import PaintingForm from './PaintingForm'
import socketIO from 'socket.io-client'

const io = socketIO('http://10.185.1.226:8000')

window.io = io

io.on('connect', () => {
  io.on('message', payload => console.log(payload))
})

class App extends Component{

  constructor(){
    super()
      this.state = {
        list: true,
        paintings: paintings
      }
  }


  changeList = () => {
    this.setState({
      list: !this.state.list
    })
  }

  addPainting = (e) => {
    e.preventDefault()
    let newPainting = {title: e.target[0].value, image:e.target[1].value, artist: {name:e.target[2].value}}
    let newArr = this.state.paintings
    newArr.push(newPainting)
    this.setState({
      paintings: newArr,
      list: !this.state.list
    })
   
  }

  render(){
    return (<div>
      <Header changeList={this.changeList}/>
      {this.state.list ?  <PaintingList paintings={this.state.paintings} /> : <PaintingForm addPainting={this.addPainting}/>}
     
    </div>
    )
  }
  
}

export default App;
