"use client";
import DayLight from "@/components/DayLight";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import Switcher from "@/components/Switcher";
import { TunisContext } from "@/context/context";
import { tunisUtility } from "@/utility";
import { useContext, useEffect, useState } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const TunisLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(TunisContext);

//   const [scrollDirection, setScrollDirection] = useState('');

//   useEffect(() => {
//     const handleWheel = (event) => {
//       const deltaY = event.deltaY;
      
//       if (deltaY > 0) {
//         setScrollDirection('down');
        
//       } else if (deltaY < 0) {
//         setScrollDirection('up');
//       }
//     };

//     document.addEventListener('wheel', handleWheel);

//     return () => {
//       document.removeEventListener('wheel', handleWheel);
//     };
//   }, []);
// console.log("Wheel direction is ",scrollDirection);

 
const [scrollDirection, setScrollDirection] = useState('');
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     console.log("Wheel Event Detected")
  //     const deltaY = event.deltaY;
  //     const isScrollingDown = deltaY > 0;
  //     // Check if the user is at the end of the page
  //     const isAtEndOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

  //     console.log( window.innerHeight)
  //     console.log(document.body.offsetHeight)

  //     if (isAtEndOfPage && isScrollingDown) {
  //       setIsEndOfPage(true);
  //       console.log(true)
  //     } else {
  //       setIsEndOfPage(false);
  //       console.log(false)
  //     }

  //     if (isScrollingDown) {
  //       setScrollDirection('down');
  //     } else {
  //       setScrollDirection('up');
  //     }
  //   };

  //   document.addEventListener('wheel', handleWheel);

  //   return () => {
  //     document.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);

  // const handleScrollToEnd = () => {
  //   if (isEndOfPage) {
  //     // Handle the action when user scrolls at the end of the page
  //     console.log('User scrolled at the end of the page!');
  //   }
  // };

  // document.addEventListener('wheel',(e)=>{
  //     if(e.deltaY> 0)
  //     console.log("scrolling downward ...")
  //     else if(e.deltaY< 0)
  //     console.log("scrolling upward ...")
  // })



  useEffect(() => {
    tunisUtility.customCursor();
  }, []);
  return (
    <div 
    // onScroll={handleScrollToEnd}
      className={`home ${dark ? "dark" : ""} bg-${
        dark ? "black" : "white"
      } text-${
        dark ? "white" : "black-6"
      } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}
      {/* <Switcher /> */}
      <DayLight />
      {/* Live Style Switcher Ends - demo only */}

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
      <Cursor />
    </div>
  );
};
export default TunisLayout;
