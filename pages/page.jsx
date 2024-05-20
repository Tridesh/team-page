import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Home = () => {
    const scroll_sectionRef = useRef(null);
    const [viewedPercentage, setViewedPercentage] = useState(0);

    useEffect(() => {
        const scroll_section = scroll_sectionRef.current;
        const scrollSpeed = 1;
        const intervalTime = 10;
        const cardWidth = scroll_section.querySelector('.card').offsetWidth;
        const totalCards = 10;
        const totalScrollableWidth = cardWidth * totalCards;

        let interval = setInterval(() => {
            scroll_section.scrollLeft += scrollSpeed;

            if (scroll_section.scrollLeft >= totalScrollableWidth) {
                clearInterval(interval);
            }

            const currentScrollPercentage = (scroll_section.scrollLeft / totalScrollableWidth) * 100;
            setViewedPercentage(currentScrollPercentage);
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="row-1">
            <div className="text1">
                <p className="header">Web Team</p> 
                <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
            </div>
            <div className="scrollin">
            <div className="top-border">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
            </div>
            <div className="scrollBar1" ref={scroll_sectionRef}>
                <div className="profileCard">
                    {/* <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img> */}
                    {[...Array(10)].map((_, index) => (
                        <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
                    ))}
                </div>
            </div>
            
            </div>
            </div>
            <div className="row-2">
            <div className="scrollin left">
            <div className="top-border left">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
            </div>
            <div className="scrollBar1 left" ref={scroll_sectionRef}>
                <div className="profileCard">
                    {[...Array(10)].map((_, index) => (
                        <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
                    ))}
                    {/* <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img>
                    <img className="card" src="./profileCard2.png" alt="profile cards"></img> */}
                </div>
            </div>
            <div className="bottom-border left">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
            </div>
            </div>
            <div className="text1">
                <p className="header">Design Team</p> 
                <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
            </div>
            </div>
        </div>
    );
};

export default Home;


