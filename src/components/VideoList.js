import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    return (
        <div className="ui middle aligned divided list">
            { props.videos.map((video) => <VideoItem video={video}/>) }
        </div>
    );
};

export default VideoList;