import React from "react";
import "../styles/VideoItem.css"

const VideoItem = ({ video }) => {
    return (

        <div class="video-item item">
            <img class="ui image" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.description } />
            <div class="content">
                <a class="header"> { video.snippet.title }</a>
            </div>
        </div>




    );
};

export default VideoItem;