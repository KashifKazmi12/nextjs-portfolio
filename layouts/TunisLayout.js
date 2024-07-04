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

const TunisLayout = ({ menu, loader ,children }) => {
  const { direction, popup, dark, getData } = useContext(TunisContext);
  useEffect(()=>{
    getData()
  },[])
//   const [scrollDirection, setScrollDirection] = useState('');

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
      {loader!==false && <Preloader />}
      {popup && <Popup />}
      {/* <Switcher /> */}
      <DayLight />
      {/* Live Style Switcher Ends - demo only */}

      {/* Header Starts */}

      {menu!==false && <Header />}
      {/* Header Ends */}
      {children}
      <Cursor />
    </div>
  );
};
export default TunisLayout;
