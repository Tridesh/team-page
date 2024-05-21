import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Home = () => {
    const scrollSectionRef1 = useRef(null);
    const scrollSectionRef2 = useRef(null);
    const [viewedPercentage1, setViewedPercentage1] = useState(0);
    const [viewedPercentage2, setViewedPercentage2] = useState(0);
    const [intervalId1, setIntervalId1] = useState(null);
    const [intervalId2, setIntervalId2] = useState(null);

    const scrollSpeed = 1;
    const intervalTime = 10;
    const totalCards = 10;

    const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
        const cardWidth = scrollSection.querySelector('.card').offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
        const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;
        const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
        setViewedPercentage(currentScrollPercentage);
    };

    useEffect(() => {
        startScrolling(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1);
        startScrolling(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2);

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
        };
    }, []);

    const startScrolling = (scrollSection, setViewedPercentage, setIntervalId) => {
        const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;

        const interval = setInterval(() => {
            scrollSection.scrollLeft += scrollSpeed;
            updateScrollPercentage(scrollSection, setViewedPercentage);

            if (scrollSection.scrollLeft >= totalScrollableWidth) {
                scrollSection.scrollLeft = 0; // Reset to beginning
                setViewedPercentage(0); // Reset progress bar
            }
        }, intervalTime);

        setIntervalId(interval);
    };

    const smoothScroll = (element, to, duration) => {
        const start = element.scrollLeft;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;
            const val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    };

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scrollLeft = (scrollSection, setViewedPercentage, setIntervalId, intervalId) => {
        if (!intervalId) {
            startScrolling(scrollSection, setViewedPercentage, setIntervalId);
        }
        const cardWidth = scrollSection.querySelector('.card').offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
        smoothScroll(scrollSection, scrollSection.scrollLeft - (cardWidth + cardMargin) * 2.5, 600);
        setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
    };

    const scrollRight = (scrollSection, setViewedPercentage) => {
        const cardWidth = scrollSection.querySelector('.card').offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
        smoothScroll(scrollSection, scrollSection.scrollLeft + (cardWidth + cardMargin) * 2.5, 600);
        setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
    };

    return (
        <div>
            <div className="row-1">
                <div className="text1">
                    <p className="header">Web Team</p>
                    <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
                </div>
                <div className="scrollin">
                    <div className="top-border">
                        <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
                    </div>
                    <div className="scrollContainer">
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1, intervalId1)}>&lt;</button>
                        <div className="scrollBar1" ref={scrollSectionRef1}>
                            <div className="profileCard">
                                {[...Array(10)].map((_, index) => (
                                    <div key={index} className="card">Card {index + 1}</div>
                                ))}
                            </div>
                        </div>
                        <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
                    </div>
                </div>
            </div>
            <div className="row-2">
                <div className="scrollin left">
                    <div className="top-border left">
                        <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
                    </div>
                    <div className="scrollContainer">
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2, intervalId2)}>&lt;</button>
                        <div className="scrollBar1 left" ref={scrollSectionRef2}>
                            <div className="profileCard">
                                {[...Array(10)].map((_, index) => (
                                    <div key={index} className="card">Card {index + 1}</div>
                                ))}
                            </div>
                        </div>
                        <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
                    </div>
                    <div className="bottom-border left">
                        <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
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