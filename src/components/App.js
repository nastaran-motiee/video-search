import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";


class App extends React.Component {
    state = { videos: [] };


    onFormSubmit = async (userInput) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: userInput
                }
            });
            this.setState({ videos: response.data.items });
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <div className="ui justified container">
                <SearchBar onFormSubmit={ this.onFormSubmit } />
                <VideoList videos={ this.state.videos } />

            </div>
        );
    }
}

export default App;