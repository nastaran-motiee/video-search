import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import WebSiteHeader from "./WebSiteHeader";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('crazy frog');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);


    return (
        <div className="ui justified container grid">
            <div className="sixteen wide column">
                <div className="row">
                    <WebSiteHeader />
                </div>
                <div className="row">
                    <SearchBar onFormSubmit={ search } />
                </div>
                <div className="ui divider" />

            </div>

            <div className="row">
                <div className="ten wide column ">
                    <VideoDetails video={ selectedVideo } />
                </div>
                <div className="six wide column ">
                    <VideoList videos={ videos } onVideoSelect={ setSelectedVideo } />
                </div>
            </div>
        </div>
    );

};


export default App;