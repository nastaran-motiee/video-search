import React from "react";


const VideoDetails = ({ video }) => {

    if (!video) {
        return (<div>loading..</div>);
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={ videoSrc } title={video.snippet.title}></iframe>
                </div>
                <div className="ui olive segment">
                    <h2 className="ui header">
                        <img src={ video.snippet.thumbnails.medium.url } className="ui circular image" alt={video.snippet.title}/>
                        { video.snippet.title }
                    </h2>
                    <p>{ video.snippet.description }</p>
                </div>

            </div>
        );

    }


}

export default VideoDetails;