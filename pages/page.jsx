// import React, { useEffect, useRef } from "react";
// import "./style.css";

// const Home = () => {
//     const scroll_sectionRef = useRef(null);
    
//     useEffect(() => {
//         const scroll_section = scroll_sectionRef.current;
//         const scrollSpeed = 1;
//         const scrollDirection = 1;
//         const intervalTime = 10;
//         let interval = setInterval(() => {
//             scroll_section.scrollLeft += scrollDirection * scrollSpeed;
//             if (scrollDirection === 1 && scroll_section.scrollLeft >= scroll_section.scrollWidth - scroll_section.clientWidth) {
//                 scroll_section.scrollLeft = 0;
//             } else if (scrollDirection === -1 && scroll_section.scrollLeft <= 0) {
//                 scroll_section.scrollLeft = scroll_section.scrollWidth - scroll_section.clientWidth;
//             }
//         }, intervalTime);
//         return () => clearInterval(interval);
//     }, []);
    
//     return (
//         <div>
//             <div className="text1">Web Team 😎</div>
//             <div className="top-border"></div>
//             <div className="scrollBar1" ref={scroll_sectionRef}>
//                 <div className="profileCard">
//                     <img className="cardFirst" id="first" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                 </div>
//             </div>
//             <div className="bottom-border"></div>
//         </div>
//     );
// };
// export default Home;
// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";

// const Home = () => {
//     const scroll_sectionRef = useRef(null);
//     const [viewedPercentage, setViewedPercentage] = useState(0);
    
//     useEffect(() => {
//         const scroll_section = scroll_sectionRef.current;
//         const scrollSpeed = 1;
//         const scrollDirection = 1;
//         const intervalTime = 10;
//         let totalScrollableWidth = scroll_section.scrollWidth - scroll_section.clientWidth;

//         let interval = setInterval(() => {
//             scroll_section.scrollLeft += scrollDirection * scrollSpeed;

//             if (scroll_section.scrollLeft >= totalScrollableWidth) {
//                 scroll_section.scrollLeft = 0;
//             } else if (scroll_section.scrollLeft <= 0) {
//                 scroll_section.scrollLeft = totalScrollableWidth;
//             }

//             const currentScrollPercentage = (scroll_section.scrollLeft / totalScrollableWidth) * 100;
//             setViewedPercentage(currentScrollPercentage);
//         }, intervalTime);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <div className="text1">
//                <p className="header">Web Team 😎</p> 
//                <p className="desc"></p>
//             </div>
//             <div className="top-border">
//                 <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
//             </div>
//             <div className="scrollBar1" ref={scroll_sectionRef}>
//                 <div className="profileCard">
//                     <img className="cardFirst" id="first" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                     <img className="card" src="./profileCard2.png" alt="profileCard"></img>
//                 </div>
//             </div>
//             <div className="bottom-border">
//                 <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
//             </div>
//         </div>
//     );
// };

// export default Home;
// import React, { useEffect, useRef } from "react";
// import "./style.css";

// const Home = () => {
//     const scroll_sectionRef = useRef(null);
    
//     useEffect(() => {
//         const scroll_section = scroll_sectionRef.current;
//         const scrollSpeed = 1;
//         const intervalTime = 2000; // Adjust the interval time to your preference
//         const cardsPerScroll = 10; // Number of cards to scroll in each interval
//         const cardWidth = scroll_section.querySelector('.card').offsetWidth;
//         let currentIndex = 0;
//         let interval;

//         const scrollCards = () => {
//             if (currentIndex < scroll_section.children[0].children.length - cardsPerScroll) {
//                 scroll_section.scrollLeft += cardWidth * cardsPerScroll;
//                 currentIndex += cardsPerScroll;
//             } else {
//                 scroll_section.scrollLeft = 0;
//                 currentIndex = 0;
//             }
//         };

//         interval = setInterval(scrollCards, intervalTime);

//         return () => clearInterval(interval);
//     }, []);
    
//     return (
//         <div>
//             <div className="text1">Web Team 😎</div>
//             <div className="top-border"></div>
//             <div className="scrollBar1" ref={scroll_sectionRef}>
//                 <div className="profileCard">
//                     {[...Array(20)].map((_, index) => (
//                         <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
//                     ))}
//                 </div>
//             </div>
//             <div className="bottom-border"></div>
//         </div>
//     );
// };

// export default Home;




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
                <p className="header">Web Team 😎</p> 
                <p className="desc">Step into the realm where pixels dance and algorithms sing—the Tech Team of our club. A sanctuary for the curious minds, the inventive souls, and the digital dreamers. Here, we craft the future, line by line, pixel by pixel. From elegant code to captivating design, we thrive on the pulse of innovation. Welcome to our world, where technology is our canvas, and imagination knows no bounds</p>
            </div>
            <div className="scrollin">
            <div className="top-border">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
            </div>
            <div className="scrollBar1" ref={scroll_sectionRef}>
                <div className="profileCard">
                    {[...Array(10)].map((_, index) => (
                        <img key={index} className="card" src="./profileCard2.png" alt="profileCard" />
                    ))}
                </div>
            </div>
            <div className="bottom-border">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
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
                </div>
            </div>
            <div className="bottom-border left">
                <div className="progress" style={{ width: `${viewedPercentage}%` }}></div>
            </div>
            </div>
            <div className="text1">
                <p className="header">Design Team 😎</p> 
                <p className="desc">Welcome to the realm of boundless creativity and visionary brilliance - our Design Team. With brushes dipped in imagination and pixels imbued with magic, they craft the tapestry of our club's visual identity. From sleek logos to captivating websites, their artistry knows no bounds, elevating our brand to new heights of aesthetic grandeur. Step into a world where innovation dances with elegance, and design is not just a task but a transcendental journey.</p>
            </div>
            </div>
        </div>
    );
};

export default Home;


