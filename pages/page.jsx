import React, { useEffect, useRef } from "react";
import "./style.css";

const Home = () => {
    const scroll_sectionRef = useRef(null);
    
    useEffect(() => {
        const scroll_section = scroll_sectionRef.current;
        const scrollSpeed = 1;
        const scrollDirection = 1;
        const intervalTime = 10;
        let interval = setInterval(() => {
            scroll_section.scrollLeft += scrollDirection * scrollSpeed;
            if (scrollDirection === 1 && scroll_section.scrollLeft >= scroll_section.scrollWidth - scroll_section.clientWidth) {
                scroll_section.scrollLeft = 0;
            } else if (scrollDirection === -1 && scroll_section.scrollLeft <= 0) {
                scroll_section.scrollLeft = scroll_section.scrollWidth - scroll_section.clientWidth;
            }
        }, intervalTime);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            <div className="text1">Web Team 😎</div>
            <div className="top-border"></div>
            <div className="scrollBar1" ref={scroll_sectionRef}>
                <div className="profileCard">
                    <img className="cardFirst" id="first" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                    <img className="card" src="./profileCard2.png" alt="profileCard"></img>
                </div>
            </div>
            <div className="bottom-border"></div>
        </div>
    );
};
export default Home;
