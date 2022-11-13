import React from "react";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
    state = {userInput: ""};


    onInputChange = (event) => {
        this.setState({userInput: event.target.value});
    };


    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.userInput);

    };


    render() {
        return (
            <form className="search-bar" onSubmit={this.onFormSubmit}>
                <div className="ui fluid category search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search Video..." value={this.state.userInput} onChange={this.onInputChange} />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                 
                </div>

            </form>
           

        );

    }
}


export default SearchBar;