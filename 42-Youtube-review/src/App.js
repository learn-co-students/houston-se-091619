import React, { Component } from "react";
import VideoContainer from "./VideoContainer";
import SearchBar from "./SearchBar";
import _ from 'lodash'

const APIKey = "AIzaSyAyhnqI-X7sja4hVIgK43c5afli_lR4nzI"


class App extends Component {

  constructor(){
    super()
    this.state = {
      videos: [],
      mainVideo: null,
      searchTerm: "dogs",
      isLoading: true
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${APIKey}&q=${this.state.searchTerm}&type=video`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items,
        mainVideo: data.items[0],
        isLoading: false
      })
    })
  }

  changeMainVideo = (video) => {
    // debugger
    this.setState({
      mainVideo: video
    })
  }

  changeSearchTerm = (term) => {
    console.log(term)
    // debugger
    // this.setState({
    //   searchTerm: term
    // })

    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${APIKey}&q=${this.state.searchTerm}&type=video`)
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     videos: data.items,
    //     mainVideo: data.items[0]
    //   })
    // })
  }

  changeDisplay = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${APIKey}&q=${this.state.searchTerm}&type=video`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items,
        mainVideo: data.items[0]
      })
    })
  }



  render() {


    const videoSearch = _.debounce(term => {
      this.changeSearchTerm(term);
    }, 200);

    return <div>
      {this.state.isLoading
      ? <p>Still Loading....</p>
      : 
      <div>
        <SearchBar videoSearch={videoSearch} changeDisplay={this.changeDisplay} />
      <VideoContainer videos={this.state.videos} mainVideo={this.state.mainVideo} changeMainVideo={this.changeMainVideo} />
      </div>
    }
      
    </div>;
  }
}

export default App;
