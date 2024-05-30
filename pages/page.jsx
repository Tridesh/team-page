import React from "react";
import "./style.css";
import Draggable from "react-draggable";

const Home = () => {
    return (
        <div>
            <span className="rot-planet"><img className = "planet" src="./planet.png"></img></span>
            <img className = "missile" src="./missile.png"></img>
            <div className="text">Hello I'm Tridesh</div>
        </div>
    );
}

export default Home;