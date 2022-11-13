import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <form className="search-bar" onSubmit={ onSubmit }>
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search Video..."
                        value={ term }
                        onChange={(event) => setTerm(event.target.value)}
                    />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        </form>
    );

};

export default SearchBar;
