'use client'
// import React from "react";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
const Home = () => {
    const scrollSectionRef1 = useRef(null);
    const scrollSectionRef2 = useRef(null);
    const scrollSectionRef3 = useRef(null);
    const scrollSectionRef4 = useRef(null);
    const [viewedPercentage1, setViewedPercentage1] = useState(0);
    const [viewedPercentage2, setViewedPercentage2] = useState(0);
    const [viewedPercentage3, setViewedPercentage3] = useState(0);
    const [viewedPercentage4, setViewedPercentage4] = useState(0);
    const scrollSpeed = 1;
    const intervalTime = 10;

    const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
        const cardWidth = scrollSection.querySelector('.card').offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
        const totalCards = scrollSection.querySelectorAll('.card').length;
        const totalScrollableWidth = (cardWidth + cardMargin) * totalCards - scrollSection.clientWidth;
        const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
        setViewedPercentage(currentScrollPercentage);
    };

    const startScrolling = (scrollSection, setViewedPercentage) => {
        const cardWidth = scrollSection.querySelector('.card').offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
        const totalCards = scrollSection.querySelectorAll('.card').length;
        const totalScrollableWidth = (cardWidth + cardMargin) * totalCards - scrollSection.clientWidth;

        const intervalId = setInterval(() => {
            scrollSection.scrollLeft += scrollSpeed;
            updateScrollPercentage(scrollSection, setViewedPercentage);

            if (scrollSection.scrollLeft >= totalScrollableWidth) {
                scrollSection.scrollLeft = 0; // Reset to beginning
                setViewedPercentage(0); // Reset progress bar
            }
        }, intervalTime);

        scrollSection.dataset.intervalId = intervalId;
    };

    const stopScrolling = (scrollSection) => {
        const intervalId = scrollSection.dataset.intervalId;
        if (intervalId) {
            clearInterval(intervalId);
            delete scrollSection.dataset.intervalId;
        }
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

    const scrollLeft = (scrollSection, setViewedPercentage) => {
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

    useEffect(() => {
        const scrollContainer1 = scrollSectionRef1.current;
        const scrollContainer2 = scrollSectionRef2.current;
        const scrollContainer3 = scrollSectionRef3.current;
        const scrollContainer4 = scrollSectionRef4.current;

        const observer1 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startScrolling(scrollContainer1, setViewedPercentage1, scrollSpeed);
                    } else {
                        stopScrolling(scrollContainer1);
                    }
                });
            },
            { threshold: 0.75 }
        );

        const observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startScrolling(scrollContainer2, setViewedPercentage2, scrollSpeed);
                    } else {
                        stopScrolling(scrollContainer2);
                    }
                });
            },
            { threshold: 0.95 }
        );

        const observer3 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startScrolling(scrollContainer3, setViewedPercentage3, scrollSpeed);
                    } else {
                        stopScrolling(scrollContainer3);
                    }
                });
            },
            { threshold: 0.8 }
        );

        const observer4 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startScrolling(scrollContainer4, setViewedPercentage4, scrollSpeed);
                    } else {
                        stopScrolling(scrollContainer4);
                    }
                });
            },
            { threshold: 0.8 }
        );

        observer1.observe(scrollContainer1);
        observer2.observe(scrollContainer2);
        observer3.observe(scrollContainer3);
        observer4.observe(scrollContainer4);

        return () => {
            observer1.disconnect();
            observer2.disconnect();
            observer3.disconnect();
            observer4.disconnect();
            clearInterval(scrollContainer1.dataset.intervalId);
            clearInterval(scrollContainer2.dataset.intervalId);
            clearInterval(scrollContainer3.dataset.intervalId);
            clearInterval(scrollContainer4.dataset.intervalId);
        };
    }, [scrollSpeed]);

    const handleMouseEnter = (scrollSection) => {
        stopScrolling(scrollSection);
    };

    const handleMouseLeave = (scrollSection) => {
        startScrolling(scrollSection, scrollSection === scrollSectionRef1.current ? setViewedPercentage1 : scrollSection === scrollSectionRef2.current ? setViewedPercentage2 : scrollSection === scrollSectionRef3.current ? setViewedPercentage3 : setViewedPercentage4, scrollSpeed);
    };

    const cardsData1 = [
        { id: "card1", name: "Jack Sparrow", designation: "Web Sub Head", imgSrc: "./pic.png" },
        { id: "card2", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card3", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card4", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card5", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card1", name: "Jack Sparrow", designation: "Web Sub Head", imgSrc: "./pic.png" },
        { id: "card2", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card3", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card4", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card5", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
    ];

    const cardsData2 = [
        { id: "card1", name: "Jack Sparrow", designation: "Web Sub Head", imgSrc: "./pic.png" },
        { id: "card2", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card3", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card4", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
        { id: "card5", name: "Jane Doe", designation: "Designer", imgSrc: "./pic.png" },
    ];
    return (
        <div>   
            <span className="rot-planet"><img className = "planet" src="./planet.png"></img></span>
            <img className = "missile" src="./missile.png"></img>
            <div className="text">
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
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1)}>&lt;</button>
                        <div className="scrollBar1" ref={scrollSectionRef1}>
                            <div className="profileCard">
                            {cardsData1.map((card) => (
                                    <div key={card.id} className="card" id={card.id}>
                                        <img className="pic1" src="./pic.png" alt="pic" />
                                        <div className="name-designation">
                                            <div className="name">Jack Sparrow</div>
                                            <div className="web-team">Web Sub Head</div>
                                        </div>
                                        <div className="links">
                                            <img src="./facebook.png" alt="fb" />
                                            <img src="./insta.png" alt="insta" />
                                            <img src="./linkedin.png" alt="in" />
                                        </div>
                                </div>
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
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2)}>&lt;</button>
                        <div className="scrollBar1 left" ref={scrollSectionRef2}>
                            <div className="profileCard">
                            {cardsData2.map((card) => (
                                    <div key={card.id} className="card" id={card.id}>
                                        {/* <img src="./star.png" className="star1" id="star"></img>
                                        <img src="./star.png" className="star2" id="star"></img>
                                        <img src="./star.png" className="star3" id="star"></img>
                                        <img src="./star.png" className="star4" id="star"></img> */}
                                        <img className="pic1" src="./pic.png" alt="pic" />
                                        <div className="name-designation">
                                            <div className="name">Jack Sparrow</div>
                                            <div className="web-team">Web Sub Head</div>
                                        </div>
                                        <div className="links">
                                        <img src="public/facebook.png" alt="fb" />
                                            <img src="public/insta.png" alt="insta" />
                                            <img src="public/linkedin.png" alt="in" />
                                        </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
                    </div>
                </div>
                <div className="text2">
                    <p className="header">Design Team</p>
                    <p className="desc">Delve into the labyrinth of code with the App Team, where every tap unfolds a new chapter of innovation. We transform ideas into interactive experiences, making technology an extension of human creativity.</p>
                </div>
            </div>
            <div className="row-3">
            <div className="text1">
                    <p className="header">App Team</p>
                    <p className="desc">Welcome to the showcase of our App Team! These tech enthusiasts turn ideas into interactive mobile experiences. With innovative designs and cutting-edge technology, they create apps that make our digital lives seamless and engaging. Let's applaud their hard work and creativity! </p>
                </div>
                <div className="scrollin">
                    <div className="top-border">
                    
                        <div className="progress" style={{ width: `${viewedPercentage3}%` }}></div>
                    </div>
                    <div className="scrollContainer">
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef3.current, setViewedPercentage3)}>&lt;</button>
                        <div className="scrollBar1" ref={scrollSectionRef3}>
                            <div className="profileCard">
                            {cardsData1.map((card) => (
                                    <div key={card.id} className="card" id={card.id}>
                                        {/* <img src="./star.png" className="star1" id="star"></img>
                                        <img src="./star.png" className="star2" id="star"></img>
                                        <img src="./star.png" className="star3" id="star"></img>
                                        <img src="./star.png" className="star4" id="star"></img> */}
                                        <img className="pic1" src="./pic.png" alt="pic" />
                                        <div className="name-designation">
                                            <div className="name">Jack Sparrow</div>
                                            <div className="web-team">Web Sub Head</div>
                                        </div>
                                        <div className="links">
                                            <img src="public/facebook.png" alt="fb" />
                                            <img src="public/insta.png" alt="insta" />
                                            <img src="public/linkedin.png" alt="in" />
                                        </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef3.current, setViewedPercentage3)}>&gt;</button>
                    </div>
                </div>
            </div>
            <div className="row-4">
                <div className="scrollin left">
                    <div className="top-border left">
                        <div className="progress" style={{ width: `${viewedPercentage4}%` }}></div>
                    </div>
                    <div className="scrollContainer">
                        <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef4.current, setViewedPercentage4)}>&lt;</button>
                        <div className="scrollBar1 left" ref={scrollSectionRef4}>
                            <div className="profileCard">
                            {cardsData2.map((card) => (
                                    <div key={card.id} className="card" id={card.id}>
                                        {/* <img src="./star.png" className="star1" id="star"></img>
                                        <img src="./star.png" className="star2" id="star"></img>
                                        <img src="./star.png" className="star3" id="star"></img>
                                        <img src="./star.png" className="star4" id="star"></img> */}
                                        <img className="pic1" src="./pic.png" alt="pic" />
                                        <div className="name-designation">
                                            <div className="name">Jack Sparrow</div>
                                            <div className="web-team">Web Sub Head</div>
                                        </div>
                                        <div className="links">
                                        <img src="public/facebook.png" alt="fb" />
                                            <img src="public/insta.png" alt="insta" />
                                            <img src="public/linkedin.png" alt="in" />
                                        </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef4.current, setViewedPercentage4)}>&gt;</button>
                    </div>
                </div>
                <div className="text2">
                    <p className="header">Events and Management Team</p>
                    <p className="desc">Delve into the labyrinth of code with the App Team, where every tap unfolds a new chapter of innovation. We transform ideas into interactive experiences, making technology an extension of human creativity.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;