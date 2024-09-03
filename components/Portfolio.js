"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 2,
    title: "youtube project",
    type: "youtube",
    src: "https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer",
    img: "assets/img/projects/project-2.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 3,
    title: "Local Video project",
    type: "local_video",
    src: "assets/img/projects/video.mp4",
    img: "assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 4,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-4.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 5,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-5.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 6,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-6.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 7,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-7.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 8,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-8.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 9,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-9.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
];


const Portfolio = () => {
  const { popupToggle, data } = useContext(TunisContext);
  const [filteredItems, setFilteredItems] = useState(items);

  const [portfolioData, setPortfolioData] = useState([])

  useEffect(() => {
    filteredData('all')
  }, [data.portfolio])

  //filter used for the data comes from django API
  const filteredData = (type) => {
    console.log(data.portfolio)
    if (type === 'all') {
      console.log(true)
      setPortfolioData(data.portfolio)
      return
    }
    const filtered = data.portfolio.filter((item) => item.service_type.service_title === type);
    setPortfolioData(filtered);
  }

  //default filter
  const filterItems = (type) => {
    if (type.length) {
      const filtered = items.filter((item) => item.type === type);
      setFilteredItems(filtered);
    }
    else {
      setFilteredItems(items)
    }
  };
  return (
    <SectionContainer id="portfolio">
      <div className="text-center text-whit down-lg:hidden">
        <div className=" bg-black-2 text-white items-center leading-none flex lg:rounded-full justify-center py-3 mb-3" role="alert">
          <div style={{ padding: "6px", background: "white", borderRadius: "50%", marginRight: "10px" }}>
            <svg className="fill-current" style={{ width: "15px", height: "15px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
          </div>
          <span className="font-semibold mr-2 text-left flex-auto">Some complex projects are confidential, so the displayed projects may not fully represent my skills
            {/* <svg className="fill-current" fill="white" style={{ width: "18px", height: "18px", display: "inline" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg> */}
          </span>
        </div>
      </div>
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Filter Section Start */}
        <ul className="portfolio-tab-list flex justify-center flex-wrap" style={{ gap: '8px' }} role="tablist">
          {data.services && <li style={{ background: 'rgb(219, 219, 219, 0.1)', padding: '3px 8px', borderRadius: '8px' }} className="px-2 py-2 cursor-pointer green" id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" data-rttab="true" tabIndex="0" onClick={() => { filteredData("all") }}>All</li>}
          {data.services ? data.services.map((service) => {
            if (service.service_title === "General")
              return null
            else
              return (
                <li className="px-2 py-2 cursor-pointer green" style={{ background: 'rgba(219, 219, 219, 0.1)', padding: '3px 8px', borderRadius: '8px' }} id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" data-rttab="true" tabIndex="0" onClick={() => { filteredData(service.service_title) }}>{service.service_title}</li>

              )
          }) :
            <>
              <li className="px-2 py-2 cursor-pointer green" id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" data-rttab="true" tabIndex="0" onClick={() => { filterItems('') }}>ALL</li>
              <li className="px-2 py-2 cursor-pointer green" id="tab:r0:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true" onClick={() => { filterItems('img') }}>Images</li>
              <li className="px-2 py-2 cursor-pointer green" id="tab:r0:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:2" data-rttab="true" onClick={() => { filterItems('local_video') }}>VIDEO</li>
              <li className="px-2 py-2 cursor-pointer green" id="tab:r0:3" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:3" data-rttab="true" onClick={() => { filterItems('youtube') }}>GRAPHIC DESIGN</li>
              <li className="px-2 py-2 cursor-pointer green" id="tab:r0:4" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:4" data-rttab="true" onClick={() => { filterItems('') }}>MOCKUP</li>
            </>
          }
        </ul>
        {/* Filter Section End */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >

            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {data.portfolio ?
                  portfolioData && portfolioData.map((item) => (
                    <Link href={`/portfolio/${item.id}`}>
                      <li
                        key={item.id}
                        className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                      >
                        <figure className="transition duration-300 rounded-5 relative overflow-hidden" style={{ height: '220px' }}>
                          <img
                            className="block relative w-full h-full object-cover rounded-5 transition duration-300"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_IMG_HOST}/${item.portfolio_image}`}
                            alt=""
                          />
                          <div className="absolute w-full h-full flex items-center justify-center gap-3 bg-accent" style={{flexDirection:'column'}}>
                            <span className="uppercase text-fs-18 text-white text-center">
                              {item.portfolio_title}
                            </span>
                            <button className="bg-accent py-2 ">view more <i className="fa fa-location-arrow" /></button>
                          </div>
                        </figure>
                        <div className="text-fs-18 text-center py-3 uppercase">{item.portfolio_title}</div>
                      </li>
                    </Link>
                  ))
                  :
                  filteredItems.map((item) => (
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
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
