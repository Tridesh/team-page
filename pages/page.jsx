import React from "react";
import "./style.css";

const Home = () => {
    return (
        <div>
            This the team page
            <div className="top-border"></div>
            <div className="scrollBar1">
                <div className="profileCard">
                    <img className = "cardFirst" id="first" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                    <img className = "card" src = "./profileCard2.png" alt="profileCard"></img>
                </div>
            </div>
            <div className="bottom-border"></div>
            
        </div>
    );
};
export default Home;