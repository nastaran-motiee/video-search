import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import WebSiteHeader from "./WebSiteHeader";


class App extends React.Component {
    state = { videos: [], selectedVideo: null };


    onFormSubmit = async (userInput) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: userInput
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[ 0 ]
            });
        } catch (error) {
            console.error(error);
        }
    };


    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };


    componentDidMount() {
        this.onFormSubmit("crazy frog");
    };

    render() {
        return (
            <div className="ui justified container grid">
                <div className="sixteen wide column">
                    <div className="row">
                        <WebSiteHeader />
                    </div>
                    <div className="row">
                        <SearchBar onFormSubmit={ this.onFormSubmit } />
                    </div>
                    <div className="ui divider" />
                    
                </div>

                <div className="row">
                    <div className="ten wide column ">
                        <VideoDetails video={ this.state.selectedVideo } />
                    </div>
                    <div className="six wide column ">
                        <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;