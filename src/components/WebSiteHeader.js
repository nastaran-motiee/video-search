import React from "react";
import "../styles/WebSiteHeader.css"

const WebSiteHeader = () => {
    return (
        <div>
            <div className="header-text">
                <div className="sixteen wide column">
                    <h1 className="animate-charcter"> Video Player</h1>
                </div>

            </div>

            <div className="circles">
                <div className="ui red empty circular label" />
                <div className="ui orange empty circular label" />
                <div className="ui yellow empty circular label" />
                <div className="ui olive empty circular label" />
                <div className="ui green empty circular label" />
                <div className="ui teal empty circular label" />
                <div className="ui blue empty circular label" />
                <div className="ui violet empty circular label" />
                <div className="ui purple empty circular label" />
                <div className="ui pink empty circular label" />
                <div className="ui brown empty circular label" />
                <div className="ui grey empty circular label" />
                <div className="ui black empty circular label" />
            </div>


        </div>


    );
};

export default WebSiteHeader;