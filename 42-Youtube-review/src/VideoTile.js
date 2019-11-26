import React from 'react'

export default function VideoTile(props){
    return(<div onClick={() => props.changeMainVideo(props)}>
        <img src={props.snippet.thumbnails.default.url}/>
        <h3>Title: {props.snippet.title}</h3>
        <p>Description: {props.snippet.description} </p>
    </div>)
}