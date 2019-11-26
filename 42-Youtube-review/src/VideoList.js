import React from 'react'
import VideoTile from './VideoTile'

export default function VideoList(props){
    return(<div>
        {props.videos.map(video => <VideoTile {...video} changeMainVideo={props.changeMainVideo}/>)}
    </div>)

// return(<div>
//     {props.videos.map(video => {return(<div onClick={() => props.changeMainVideo(props)}>
//         <img src={props.snippet.thumbnails.default.url}/>
//         <h3>Title: {props.snippet.title}</h3>
//         <p>Description: {props.snippet.description} </p>
//     </div>)})}
// </div>)
}