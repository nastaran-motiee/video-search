import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    return (
        <div className="ui celled list">
            { videos.map((video) => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>) }
        </div>
    );
};

export default VideoList;