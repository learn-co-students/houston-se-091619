import React from 'react'

export default function MainVideo(props){
    // console.log(props)
    // let title = props.video.snippet.thumbnails.title
    let {title} = props.video.snippet
    let {description} = props.video.snippet

    const embedUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return(<div>
        <iframe src={embedUrl} />
        <h1>Title: {title}</h1>
        <h4>description: {description}</h4>
    </div>)
}