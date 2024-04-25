"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//some custom styling is in globals.css

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const { dark } = useContext(TunisContext);

  const handleSlideChange = (swiper) => {
    const startIndex = swiper.activeIndex;

    // Get total number of slides
    const totalSlides = swiper.slides.length;

    // Reset background color and transform for all slides
    swiper.slides.forEach((slide) => {
      slide.style.transform = 'rotateY(0deg)'; // Reset rotation
    });

    // Calculate the index of the middle slide
    const middleIndex = startIndex + Math.floor(swiper.params.slidesPerView / 2);
    // Set the middle slide to red if it exists
    if (middleIndex < totalSlides) {
      swiper.slides[middleIndex].style.perspective = '0';
      swiper.slides[middleIndex].children[0].style.transform = 'rotateY(0deg)'
      swiper.slides[middleIndex].addEventListener('mouseover', ()=>{swiper.autoplay?.stop()})
      swiper.slides[middleIndex].addEventListener('mouseleave', ()=>{swiper.autoplay?.start()})
        
    }

    // Set the left slide(s) to blue with rotation
    for (let i = startIndex; i < middleIndex; i++) {
      if (i < totalSlides) {
        swiper.slides[i].style.perspective = '1200px';
        let Element = swiper.slides[i].children[0]
        Element.style.transform = 'rotateY(20deg)'
      }
    }

    // Set the right slide(s) to green with rotation
    for (let i = middleIndex + 1; i < startIndex + swiper.params.slidesPerView; i++) {
      if (i < totalSlides) {
        swiper.slides[i].style.perspective = '1200px';
        let Element = swiper.slides[i].children[0]
        Element.style.transform = 'rotateY(-20deg)'
      }
    }
  };

  const data = [
    {
      id:1,
      type: "video",
      heading:"Heading for Video ",
      name:'Mr. John',
      company:'company',
      data: "/assets/img/projects/video.mp4"
    },
    {
      id:2,
      type: "text",
      heading:"Heading for Text",
      name:'Leo Chin',
      company:'ezy Tech',
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu neque dapibus tempus."
    },
    {
      id:3,
      type: "video",
      heading:"Heading for Video ",
      name:'Mr. Harry',
      company:'company',
      data: "/assets/img/projects/video.mp4"
    },
    {
      id:4,
      type: "text",
      heading:"Heading for Text",
      name:'name',
      company:'company',
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu neque dapibus tempus."
    },
    {
      id:5,
      type: "video",
      heading:"Heading for Video ",
      name:'name',
      company:'company',
      data: "/assets/img/projects/video.mp4"
    },
    {
      id:6,
      type: "text",
      heading:"Heading for Text",
      name:'name',
      company:'company',
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu neque dapibus tempus."
    },
    {
      id:7,
      type: "video",
      heading:"Heading for Video ",
      name:'name',
      company:'company',
      data: "/assets/img/projects/video.mp4"
    },
    {
      id:8,
      type: "text",
      heading:"Heading for Text",
      name:'name',
      company:'company',
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu neque dapibus tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula eu neque dapibus tempus."
    },
  ]

  return (
    <SectionContainer id={"testimonials"}>
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"Testimonials"}
          colorTitle={"Reviews"}
          normalTitle={"Client"}
        />

        {/* Testimonials Start */}
        {/* <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
          <div className="testimonials_item w-1/3 inline-block" style={{background:'red'}}>1</div>
        </div> */}
        <Swiper
      
        slidesPerView={1}
        breakpoints={{
          // when window width is <= 1024px (medium screens)
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={0}
        loop={true}
        
        autoplay={{delay:2500, disableOnInteraction:false}}
        
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{padding:'20px 0'}}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {data.map((e)=>{
          if(e.type === 'text')
          return <SwiperSlide key={e.id}>
            <div className="slider-item">
              {/* <h1>{e.heading}</h1> */}
              <p className="content slider-para"><FaQuoteLeft className=" text-fs-26 text-accent inline-block"/> {e.data} <FaQuoteRight className="text-fs-26 text-accent inline-block"/> </p>
              <div className="testimonial-user">
            <div className="name text-accent font-semibold" style={{fontSize:'18px'}}>{e.name}</div>
            <div className="company">@ {e.company}</div>
            </div>
            </div>
            </SwiperSlide>
          else if(e.type === 'video')
          return <SwiperSlide key={e.id}>
            <div className="slider-item">
            {/* <h1>{e.heading}</h1> */}
            <div className="content">
            <video src={e.data} controls={true}></video>
            </div>
            <div className="testimonial-user">
            <div className="name text-accent font-semibold">{e.name}</div>
            <div className="company">@ {e.company}</div>
            </div>

            </div>
            </SwiperSlide>
        })}
      </Swiper>
        {/* Testimonials End */}
        <br />
      </div>

    </SectionContainer>
  );
};
export default Testimonials;
