import React from "react";
import "./Home.css";
import config from "../../config/config";

const Home = () => {
    return (
        <div className="container">
            <div className="Home">
                <div className="content">
                    <h2>{config.hello}</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
