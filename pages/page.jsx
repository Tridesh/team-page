// // import React, { useEffect, useRef, useState } from "react";
// // import "./style.css";

// // const Home = () => {
// //     const scroll_sectionRef = useRef(null);
// //     const [viewedPercentage, setViewedPercentage] = useState(0);

// //     useEffect(() => {
// //         const scroll_section = scroll_sectionRef.current;
// //         const scrollSpeed = 1;
// //         const intervalTime = 10;
// //         const cardWidth = scroll_section.querySelector('.card').offsetWidth;
// //         const totalCards = 10;
// //         const totalScrollableWidth = cardWidth * totalCards;

// //         let interval = setInterval(() => {
// //             scroll_section.scrollLeft += scrollSpeed;

// //             if (scroll_section.scrollLeft >= totalScrollableWidth) {
// //                 clearInterval(interval);
// //             }

// //             const currentScrollPercentage = (scroll_section.scrollLeft / totalScrollableWidth) * 100;
// //             setViewedPercentage(currentScrollPercentage);
// //         }, intervalTime);

// //         return () => clearInterval(interval);
// //     }, []);

// //     return (
// //         <div>
// //             <div className="row-1">
// //             <div className="text1">
// //                 <p className="header">Web Team</p> 
// //                 <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
// //             </div>
// //             <div className="scrollin">
// //             <div className="top-border">
// //                 <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
// //             </div>
// //             <div className="scrollBar1" ref={scroll_sectionRef}>
// //                 <div className="profileCard">
// //                     {/* <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img> */}
// //                     {[...Array(10)].map((_, index) => (
// //                         <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
// //                     ))}
// //                 </div>
// //             </div>
            
// //             </div>
// //             </div>
// //             <div className="row-2">
// //             <div className="scrollin left">
// //             <div className="top-border left">
// //                 <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
// //             </div>
// //             <div className="scrollBar1 left" ref={scroll_sectionRef}>
// //                 <div className="profileCard">
// //                     {[...Array(10)].map((_, index) => (
// //                         <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
// //                     ))}
// //                     {/* <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img>
// //                     <img className="card" src="./profileCard2.png" alt="profile cards"></img> */}
// //                 </div>
// //             </div>
// //             <div className="bottom-border left">
// //                 <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
// //             </div>
// //             </div>
// //             <div className="text1">
// //                 <p className="header">Design Team</p> 
// //                 <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
// //             </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;
// // import React, { useEffect, useRef, useState } from "react";
// // import "./style.css";

// // const Home = () => {
// //     const scrollSectionRef1 = useRef(null);
// //     const scrollSectionRef2 = useRef(null);
// //     const [viewedPercentage1, setViewedPercentage1] = useState(0);
// //     const [viewedPercentage2, setViewedPercentage2] = useState(0);

// //     const scrollSpeed = 1;
// //     const intervalTime = 10;
// //     const totalCards = 10;

// //     const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth = cardWidth * totalCards;
// //         const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
// //         setViewedPercentage(currentScrollPercentage);
// //     };

// //     useEffect(() => {
// //         const scroll_section1 = scrollSectionRef1.current;
// //         const cardWidth1 = scroll_section1.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth1 = cardWidth1 * totalCards;

// //         const interval1 = setInterval(() => {
// //             scroll_section1.scrollLeft += scrollSpeed;
// //             updateScrollPercentage(scroll_section1, setViewedPercentage1);

// //             if (scroll_section1.scrollLeft >= totalScrollableWidth1) {
// //                 clearInterval(interval1);
// //             }
// //         }, intervalTime);

// //         return () => clearInterval(interval1);
// //     }, []);

// //     useEffect(() => {
// //         const scroll_section2 = scrollSectionRef2.current;
// //         const cardWidth2 = scroll_section2.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth2 = cardWidth2 * totalCards;

// //         const interval2 = setInterval(() => {
// //             scroll_section2.scrollLeft += scrollSpeed;
// //             updateScrollPercentage(scroll_section2, setViewedPercentage2);

// //             if (scroll_section2.scrollLeft >= totalScrollableWidth2) {
// //                 clearInterval(interval2);
// //             }
// //         }, intervalTime);

// //         return () => clearInterval(interval2);
// //     }, []);

// //     const scrollLeft = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         scrollSection.scrollLeft -= cardWidth * 2;
// //         updateScrollPercentage(scrollSection, setViewedPercentage);
// //     };

// //     const scrollRight = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         scrollSection.scrollLeft += cardWidth * 2;
// //         updateScrollPercentage(scrollSection, setViewedPercentage);
// //     };

// //     return (
// //         <div>
// //             <div className="row-1">
// //                 <div className="text1">
// //                     <p className="header">Web Team</p>
// //                     <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
// //                 </div>
// //                 <div className="scrollin">
// //                     <div className="top-border">
// //                         <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1)}>&lt;</button>
// //                         <div className="scrollBar1" ref={scrollSectionRef1}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="row-2">
// //                 <div className="scrollin left">
// //                     <div className="top-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2)}>&lt;</button>
// //                         <div className="scrollBar1 left" ref={scrollSectionRef2}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
// //                     </div>
// //                     <div className="bottom-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                 </div>
// //                 <div className="text1">
// //                     <p className="header">Design Team</p>
// //                     <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;


// // import React, { useEffect, useRef, useState } from "react";
// // import "./style.css";

// // const Home = () => {
// //     const scrollSectionRef1 = useRef(null);
// //     const scrollSectionRef2 = useRef(null);
// //     const [viewedPercentage1, setViewedPercentage1] = useState(0);
// //     const [viewedPercentage2, setViewedPercentage2] = useState(0);

// //     const scrollSpeed = 1;
// //     const intervalTime = 10;
// //     const totalCards = 10;

// //     const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth = cardWidth * totalCards + parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight) * totalCards;
// //         const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
// //         setViewedPercentage(currentScrollPercentage);
// //     };

// //     useEffect(() => {
// //         const scroll_section1 = scrollSectionRef1.current;
// //         const cardWidth1 = scroll_section1.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth1 = cardWidth1 * totalCards + parseInt(window.getComputedStyle(scroll_section1.querySelector('.card')).marginRight) * totalCards;

// //         const interval1 = setInterval(() => {
// //             scroll_section1.scrollLeft += scrollSpeed;
// //             updateScrollPercentage(scroll_section1, setViewedPercentage1);

// //             if (scroll_section1.scrollLeft >= totalScrollableWidth1 - scroll_section1.offsetWidth) {
// //                 clearInterval(interval1);
// //             }
// //         }, intervalTime);

// //         return () => clearInterval(interval1);
// //     }, []);

// //     useEffect(() => {
// //         const scroll_section2 = scrollSectionRef2.current;
// //         const cardWidth2 = scroll_section2.querySelector('.card').offsetWidth;
// //         const totalScrollableWidth2 = cardWidth2 * totalCards + parseInt(window.getComputedStyle(scroll_section2.querySelector('.card')).marginRight) * totalCards;

// //         const interval2 = setInterval(() => {
// //             scroll_section2.scrollLeft += scrollSpeed;
// //             updateScrollPercentage(scroll_section2, setViewedPercentage2);

// //             if (scroll_section2.scrollLeft >= totalScrollableWidth2 - scroll_section2.offsetWidth) {
// //                 clearInterval(interval2);
// //             }
// //         }, intervalTime);

// //         return () => clearInterval(interval2);
// //     }, []);

// //     const smoothScroll = (element, to, duration) => {
// //         const start = element.scrollLeft;
// //         const change = to - start;
// //         const increment = 20;
// //         let currentTime = 0;

// //         const animateScroll = () => {
// //             currentTime += increment;
// //             const val = easeInOutQuad(currentTime, start, change, duration);
// //             element.scrollLeft = val;
// //             if (currentTime < duration) {
// //                 setTimeout(animateScroll, increment);
// //             }
// //         };

// //         animateScroll();
// //     };

// //     const easeInOutQuad = (t, b, c, d) => {
// //         t /= d / 2;
// //         if (t < 1) return c / 2 * t * t + b;
// //         t--;
// //         return -c / 2 * (t * (t - 2) - 1) + b;
// //     };

// //     const scrollLeft = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         smoothScroll(scrollSection, scrollSection.scrollLeft - cardWidth * 2.5, 600);
// //         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
// //     };

// //     const scrollRight = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         smoothScroll(scrollSection, scrollSection.scrollLeft + cardWidth * 2.5, 600);
// //         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
// //     };

// //     return (
// //         <div>
// //             <div className="row-1">
// //                 <div className="text1">
// //                     <p className="header">Web Team</p>
// //                     <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
// //                 </div>
// //                 <div className="scrollin">
// //                     <div className="top-border">
// //                         <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1)}>&lt;</button>
// //                         <div className="scrollBar1" ref={scrollSectionRef1}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="row-2">
// //                 <div className="scrollin left">
// //                     <div className="top-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2)}>&lt;</button>
// //                         <div className="scrollBar1 left" ref={scrollSectionRef2}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
// //                     </div>
// //                     <div className="bottom-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                 </div>
// //                 <div className="text1">
// //                     <p className="header">Design Team</p>
// //                     <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;

// // import React, { useEffect, useRef, useState } from "react";
// // import "./style.css";

// // const Home = () => {
// //     const scrollSectionRef1 = useRef(null);
// //     const scrollSectionRef2 = useRef(null);
// //     const [viewedPercentage1, setViewedPercentage1] = useState(0);
// //     const [viewedPercentage2, setViewedPercentage2] = useState(0);
// //     const [intervalId1, setIntervalId1] = useState(null);
// //     const [intervalId2, setIntervalId2] = useState(null);

// //     const scrollSpeed = 1;
// //     const intervalTime = 10;
// //     const totalCards = 10;

// //     const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
// //         const totalScrollableWidth = (cardWidth + cardMargin) * (totalCards - 1) + cardWidth;
// //         const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
// //         setViewedPercentage(currentScrollPercentage);
// //     };

// //     useEffect(() => {
// //         startScrolling(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1);
// //         startScrolling(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2);

// //         return () => {
// //             clearInterval(intervalId1);
// //             clearInterval(intervalId2);
// //         };
// //     }, []);

// //     const startScrolling = (scrollSection, setViewedPercentage, setIntervalId) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
// //         const totalScrollableWidth = (cardWidth + cardMargin) * (totalCards - 1) + cardWidth;

// //         const interval = setInterval(() => {
// //             scrollSection.scrollLeft += scrollSpeed;
// //             updateScrollPercentage(scrollSection, setViewedPercentage);

// //             if (scrollSection.scrollLeft >= totalScrollableWidth) {
// //                 clearInterval(interval);
// //                 setIntervalId(null); // Clear interval ID when scrolling stops
// //             }
// //         }, intervalTime);

// //         setIntervalId(interval);
// //     };

// //     const smoothScroll = (element, to, duration) => {
// //         const start = element.scrollLeft;
// //         const change = to - start;
// //         const increment = 20;
// //         let currentTime = 0;

// //         const animateScroll = () => {
// //             currentTime += increment;
// //             const val = easeInOutQuad(currentTime, start, change, duration);
// //             element.scrollLeft = val;
// //             if (currentTime < duration) {
// //                 setTimeout(animateScroll, increment);
// //             }
// //         };

// //         animateScroll();
// //     };

// //     const easeInOutQuad = (t, b, c, d) => {
// //         t /= d / 2;
// //         if (t < 1) return c / 2 * t * t + b;
// //         t--;
// //         return -c / 2 * (t * (t - 2) - 1) + b;
// //     };

// //     const scrollLeft = (scrollSection, setViewedPercentage, setIntervalId, intervalId) => {
// //         if (!intervalId) {
// //             startScrolling(scrollSection, setViewedPercentage, setIntervalId);
// //         }
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
// //         smoothScroll(scrollSection, scrollSection.scrollLeft - (cardWidth + cardMargin) * 2.5, 600);
// //         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
// //     };

// //     const scrollRight = (scrollSection, setViewedPercentage) => {
// //         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
// //         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
// //         smoothScroll(scrollSection, scrollSection.scrollLeft + (cardWidth + cardMargin) * 2.5, 600);
// //         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
// //     };

// //     return (
// //         <div>
// //             <div className="row-1">
// //                 <div className="text1">
// //                     <p className="header">Web Team</p>
// //                     <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
// //                 </div>
// //                 <div className="scrollin">
// //                     <div className="top-border">
// //                         <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1, intervalId1)}>&lt;</button>
// //                         <div className="scrollBar1" ref={scrollSectionRef1}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="row-2">
// //                 <div className="scrollin left">
// //                     <div className="top-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                     <div className="scrollContainer">
// //                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2, intervalId2)}>&lt;</button>
// //                         <div className="scrollBar1 left" ref={scrollSectionRef2}>
// //                             <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
// //                                     <div key={index} className="card">Card {index + 1}</div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
// //                     </div>
// //                     <div className="bottom-border left">
// //                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
// //                     </div>
// //                 </div>
// //                 <div className="text1">
// //                     <p className="header">Design Team</p>
// //                     <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// //  export default Home;

// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";

// const Home = () => {
//     const scrollSectionRef1 = useRef(null);
//     const scrollSectionRef2 = useRef(null);
//     const [viewedPercentage1, setViewedPercentage1] = useState(0);
//     const [viewedPercentage2, setViewedPercentage2] = useState(0);
//     const [intervalId1, setIntervalId1] = useState(null);
//     const [intervalId2, setIntervalId2] = useState(null);

//     const scrollSpeed = 1;
//     const intervalTime = 10;
//     const totalCards = 10;

//     const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;
//         const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
//         setViewedPercentage(currentScrollPercentage);
//     };

//     useEffect(() => {
//         startScrolling(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1);
//         startScrolling(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2);

//         return () => {
//             clearInterval(intervalId1);
//             clearInterval(intervalId2);
//         };
//     }, []);

//     const startScrolling = (scrollSection, setViewedPercentage, setIntervalId) => {
//         const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;

//         const interval = setInterval(() => {
//             scrollSection.scrollLeft += scrollSpeed;
//             updateScrollPercentage(scrollSection, setViewedPercentage);

//             if (scrollSection.scrollLeft >= totalScrollableWidth) {
//                 scrollSection.scrollLeft = 0; // Reset to beginning
//                 setViewedPercentage(0); // Reset progress bar
//             }
//         }, intervalTime);

//         setIntervalId(interval);
//     };

//     const smoothScroll = (element, to, duration) => {
//         const start = element.scrollLeft;
//         const change = to - start;
//         const increment = 20;
//         let currentTime = 0;

//         const animateScroll = () => {
//             currentTime += increment;
//             const val = easeInOutQuad(currentTime, start, change, duration);
//             element.scrollLeft = val;
//             if (currentTime < duration) {
//                 setTimeout(animateScroll, increment);
//             }
//         };

//         animateScroll();
//     };

//     const easeInOutQuad = (t, b, c, d) => {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     };

//     const scrollLeft = (scrollSection, setViewedPercentage, setIntervalId, intervalId) => {
//         if (!intervalId) {
//             startScrolling(scrollSection, setViewedPercentage, setIntervalId);
//         }
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         smoothScroll(scrollSection, scrollSection.scrollLeft - (cardWidth + cardMargin) * 2.5, 600);
//         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
//     };

//     const scrollRight = (scrollSection, setViewedPercentage) => {
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         smoothScroll(scrollSection, scrollSection.scrollLeft + (cardWidth + cardMargin) * 2.5, 600);
//         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
//     };

//     return (
//         <div>
//             <div className="row-1">
//                 <div className="text1">
//                     <p className="header">Web Team</p>
//                     <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
//                 </div>
//                 <div className="scrollin">
//                     <div className="top-border">
//                         <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
//                     </div>
//                     <div className="scrollContainer">
//                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1, intervalId1)}>&lt;</button>
//                         <div className="scrollBar1" ref={scrollSectionRef1}>
//                             <div className="profileCard">
//                             <div className="profileCard">
//                                 <div className="scroll-bar">
//                                     <div className="card" id="card1">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card2">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card3">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card4">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card5">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card6">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card7">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card8">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card9">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                     <div className="card" id="card10">
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                 </div>
//                         </div>

//                             </div>
//                         </div>
//                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="row-2">
//                 <div className="scrollin left">
//                     <div className="top-border left">
//                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
//                     </div>
//                     <div className="scrollContainer">
//                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2, intervalId2)}>&lt;</button>
//                         <div className="scrollBar1 left" ref={scrollSectionRef2}>
//                             <div className="profileCard">
//                                 {[...Array(10)].map((_, index) => (
//                                     <div key={index} className="card">Card {index + 1}</div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
//                     </div>
//                     <div className="bottom-border left">
//                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
//                     </div>
//                 </div>
//                 <div className="text1">
//                     <p className="header">Design Team</p>
//                     <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;


// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";

// const Home = () => {
//     const scrollSectionRef1 = useRef(null);
//     const scrollSectionRef2 = useRef(null);
//     const [viewedPercentage1, setViewedPercentage1] = useState(0);
//     const [viewedPercentage2, setViewedPercentage2] = useState(0);
//     const [intervalId1, setIntervalId1] = useState(null);
//     const [intervalId2, setIntervalId2] = useState(null);
//     const [isHovered, setIsHovered] = useState(false);

//     const scrollSpeed = 1;
//     const intervalTime = 10;
//     const totalCards = 10;

    

//     const updateScrollPercentage = (scrollSection, setViewedPercentage) => {
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;
//         const currentScrollPercentage = (scrollSection.scrollLeft / totalScrollableWidth) * 100;
//         setViewedPercentage(currentScrollPercentage);
//     };

//     useEffect(() => {
//         startScrolling(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1);
//         startScrolling(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2);

//         return () => {
//             clearInterval(intervalId1);
//             clearInterval(intervalId2);
//         };
//     }, []);

//     const startScrolling = (scrollSection, setViewedPercentage, setIntervalId) => {
//         const totalScrollableWidth = scrollSection.scrollWidth - scrollSection.clientWidth;

//         const interval = setInterval(() => {
//             scrollSection.scrollLeft += scrollSpeed;
//             updateScrollPercentage(scrollSection, setViewedPercentage);

//             if (scrollSection.scrollLeft >= totalScrollableWidth) {
//                 scrollSection.scrollLeft = 0; // Reset to beginning
//                 setViewedPercentage(0); // Reset progress bar
//             }
//         }, intervalTime);

//         setIntervalId(interval);
//     };

//     const smoothScroll = (element, to, duration) => {
//         const start = element.scrollLeft;
//         const change = to - start;
//         const increment = 20;
//         let currentTime = 0;

//         const animateScroll = () => {
//             currentTime += increment;
//             const val = easeInOutQuad(currentTime, start, change, duration);
//             element.scrollLeft = val;
//             if (currentTime < duration) {
//                 setTimeout(animateScroll, increment);
//             }
//         };

//         animateScroll();
//     };

//     const easeInOutQuad = (t, b, c, d) => {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     };

//     const scrollLeft = (scrollSection, setViewedPercentage, setIntervalId, intervalId) => {
//         if (!intervalId) {
//             startScrolling(scrollSection, setViewedPercentage, setIntervalId);
//         }
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         smoothScroll(scrollSection, scrollSection.scrollLeft - (cardWidth + cardMargin) * 2.5, 600);
//         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
//     };

//     const scrollRight = (scrollSection, setViewedPercentage) => {
//         const cardWidth = scrollSection.querySelector('.card').offsetWidth;
//         const cardMargin = parseInt(window.getComputedStyle(scrollSection.querySelector('.card')).marginRight);
//         smoothScroll(scrollSection, scrollSection.scrollLeft + (cardWidth + cardMargin) * 2.5, 600);
//         setTimeout(() => updateScrollPercentage(scrollSection, setViewedPercentage), 600);
//     };

//     return (
//         <div>
//             <div className="row-1">
//                 <div className="text1">
//                     <p className="header">Web Team</p>
//                     <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. </p>
//                 </div>
//                 <div className="scrollin">
//                     <div className="top-border">
//                         <div className="progress" style={{ width: `${viewedPercentage1}%` }}></div>
//                     </div>
//                     <div className="scrollContainer">
//                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef1.current, setViewedPercentage1, setIntervalId1, intervalId1)}>&lt;</button>
//                         <div className="scrollBar1" ref={scrollSectionRef1}>
//                         <div className="profileCard">
// //                                 {[...Array(10)].map((_, index) => (
//                                     <div key={index} className="card" id={`card${index + 1}`}>
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                         <div className="wave-parts"></div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef1.current, setViewedPercentage1)}>&gt;</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="row-2">
//                 <div className="scrollin left">
//                     <div className="top-border left">
//                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
//                     </div>
//                     <div className="scrollContainer">
//                         <button className="scrollButton left" onClick={() => scrollLeft(scrollSectionRef2.current, setViewedPercentage2, setIntervalId2, intervalId2)}>&lt;</button>
//                         <div className="scrollBar1 left" ref={scrollSectionRef2}>
//                         <div className="profileCard">
//                                    {[...Array(10)].map((_, index) => (
//                                     <div key={index} className="card" id={`card${index + 1}`}>
//                                         <div className="commet" id="commet1"></div>
//                                         <div className="commet" id="commet2"></div>
//                                         <div className="commet" id="commet3"></div>
//                                         <div className="commet" id="commet4"></div>
//                                         <div className="star" id="star1"></div>
//                                         <div className="star" id="star2"></div>
//                                         <div className="star" id="star3"></div>
//                                         <div className="text">
//                                             <div className="name">Jack Sparrow</div>
//                                             <div className="designation">Web Sub Head</div>
//                                         </div>
//                                         <img className="pic1" src="./pic.png" alt="pic" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button className="scrollButton right" onClick={() => scrollRight(scrollSectionRef2.current, setViewedPercentage2)}>&gt;</button>
//                     </div>
//                     {/* <div className="bottom-border left">
//                         <div className="progress" style={{ width: `${viewedPercentage2}%` }}></div>
//                     </div> */}
//                 </div>
//                 <div className="text1">
//                     <p className="header">Design Team</p>
//                     <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from "react";
import "./style.css";

const Home = () => {
    return(
        <div>
            <div className="heading">
                <div className="team-text">Our Team</div>
                <div className="sub-heads">Sub Heads</div>
            </div>
            
            <div className="scrollBar1">
                {/* Card 1 */}
                <div className="card" id="card1">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card" id="card2">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card" id="card3">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="card" id="card4">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="card" id="card5">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="card" id="card6">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 7 */}
                <div className="card" id="card7">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
                {/* Card 8 */}
                <div className="card" id="card8">
                    <div className="image-back">
                        <img src="./pic.png"></img>
                    </div>
                    <div className="name-designation">
                        <div className="name">Jack Sparrow</div>
                        <div className="web-team">Web Sub Head</div>
                    </div>
                    <div className="links">
                        <img src="./insta.png" alt="insta"></img>
                        <img src="./linkedin.png" alt="linkedin"></img>
                        <img src="./facebook.png" alt="facebook"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;