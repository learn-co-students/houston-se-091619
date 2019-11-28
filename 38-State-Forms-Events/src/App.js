import React from 'react';
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css';
import paintings from './paintings'
import PaintingList from './PaintingList';
import PaintingForm from './PaintingForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      key: "value",
      displayForm: false,
      paintings: paintings
      // id: 10
    }
  }

  // state = {
  //   key: "value"
  // }
  // console.log(paintings)

  changeDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
      // id: 11
    })
  }

  addPainting = (e) => {
    e.preventDefault()
    // debugger

    let painting = { title: e.target[0].value, 
                     image: e.target[1].value,
                     artist: {
                       name: e.target[2].value
                     },
                     votes: 0 }

    this.setState({
      paintings: [...this.state.paintings, painting],
      displayForm: !this.state.displayForm
    })

  }


  render(){return (
    <BrowserRouter>
  <div>
  {/* <p>current id value: {this.state.id}</p> */}
      <NavBar />
      {/* <button className="ui inverted primary button" onClick={this.changeDisplay} > Add Painting</button>
      {this.state.displayForm 
      ? <PaintingForm addPainting={this.addPainting} />
      : <PaintingList paintings={this.state.paintings}/> 
      } */}

      {/* <Route path="/paintings" component={PaintingList} /> */}
      <Switch>
      <Route exact path="/paintings" render={() => <PaintingList paintings={this.state.paintings} /> } />

      <Route path="/paintings/new" render={ (routerProps) =><PaintingForm addPainting={this.addPainting} {...routerProps} /> } />

      {/* <Route path="/paintings/new" component={PaintingForm} /> */}
      </Switch>
     



    </div>
    </BrowserRouter>
  
  );}
}

export default App;
