import React from 'react'
import MainVideo from './MainVideo'
import VideoList from './VideoList'

export default function VideoContainer(props){
    return(<div>
            <MainVideo video={props.mainVideo}/>
            <VideoList videos={props.videos} changeMainVideo={props.changeMainVideo}/>
    </div>)
}