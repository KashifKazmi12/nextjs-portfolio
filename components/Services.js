"use client";
import SectionContainer from "@/layouts/SectionContainer";
import { TunisContext } from "@/context/context";
import { useContext, useState } from "react";
import SectionTitle from "./SectionTitle";


const items = [
  {
    id: 1,
    title: "wordpress Project",
    type: "wordpress",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 2,
    title: "javascript project",
    type: "javascript",
    src: "https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer",
    img: "assets/img/projects/project-2.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 3,
    title: "python project",
    type: "python",
    src: "assets/img/projects/video.mp4",
    img: "assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 4,
    title: "python Project",
    type: "python",
    src: "",
    img: "assets/img/projects/project-4.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 5,
    title: "javascript Project",
    type: "javascript",
    src: "",
    img: "assets/img/projects/project-5.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 6,
    title: "wordpress Project",
    type: "wordpress",
    src: "",
    img: "assets/img/projects/project-6.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 7,
    title: "python Project",
    type: "python",
    src: "",
    img: "assets/img/projects/project-7.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 8,
    title: "wordpress Project",
    type: "wordpress",
    src: "",
    img: "assets/img/projects/project-8.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 9,
    title: "javascript Project",
    type: "javascript",
    src: "",
    img: "assets/img/projects/project-9.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
];

const Services = () => {
  const { popupToggle, data } = useContext(TunisContext);
  return (
    <SectionContainer id={"services"}>
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"Services"}
          colorTitle={"Services"}
          normalTitle={"Our"}
        />

        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {data.services? 
                data.services.map((item,id) => (
                  <li
                    key={id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden" style={{height:'220px'}}>
                      <img
                        className="block relative w-full h-full object-cover rounded-5 transition duration-300"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/${item.service_image}`}
                        alt=""
                      />
                      {/* <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.service_title}
                        </span>
                      </div> */}
                    </figure>
                    <div className="text-fs-16 text-center py-3 uppercase">{item.service_title}</div>
                  </li>
                ))
                :
                items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))
                }
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        
        
      </div>
    </SectionContainer>
  );
};
export default Services;
