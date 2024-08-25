"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import "@/public/assets/css/Components_styles/About.css"
import _debounce from 'lodash/debounce';
// import SectionSizeChecker from "@/utility/SectionSizeChecker";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "First Name", value: "Steve" },
      { id: 2, type: "Last Name", value: "Milner" },
      { id: 3, type: "Age", value: "27 Years" },
      { id: 4, type: "Nationality", value: "Tunisian" },
      { id: 5, type: "Freelance", value: "Available" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "Address", value: "Tunis" },
      { id: 7, type: "Phone", value: "+216 21 184 010" },
      { id: 8, type: "Email", value: "demo@demo.com" },
      { id: 9, type: "Skype", value: "steve.milner" },
      { id: 10, type: "Langages", value: "French, English" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: 'years of <span className="block">experience</span>',
    value: "10",
  },
  {
    id: 2,
    title: 'completed <span className="block">projects</span>',
    value: "97",
  },
  {
    id: 3,
    title: 'happy <span className="block">customers</span>',
    value: "81",
  },
];

const experiences = [
  {
    id: 1,
    date: "2018 - Present",
    title: "web developer",
    company: "envato",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 2,
    date: "2013 - 2018",
    title: "UI/UX Designer",
    company: "Themeforest",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 3,
    date: "2005 - 2013",
    title: "consultant",
    company: "Videohive",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
];

const educations = [
  {
    id: 1,
    date: "2015",
    title: "Engineer Degree",
    unv: "Oxford University",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 2,
    date: "2012",
    title: "Master Degree",
    unv: "Kiev University",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 3,
    date: "2009",
    title: "Bachelor Degree",
    unv: "Tunis High School",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
];

const skills = [
  { id: 1, name: "html", value: "25" },
  { id: 2, name: "javascript", value: "89" },
  { id: 3, name: "css", value: "70" },
  { id: 4, name: "php", value: "66" },
  { id: 5, name: "wordpress", value: "95" },
  { id: 6, name: "jquery", value: "50" },
  { id: 7, name: "angular", value: "65" },
  { id: 8, name: "react", value: "45" },
];

const About = () => {
  const { dark, data } = useContext(TunisContext);
  const [isVideoStart, setIsVideoStart] = useState(false)
  // document.body.addEventListener('scroll',SectionSizeChecker("about"))
  return (
    <SectionContainer id="about">
      <div className="w-full" >
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"resume"}
          colorTitle={"me"}
          normalTitle={"about"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className={`flex flex-row down-lg:flex-col ${data.about?.video_link?.length == 0 && ' text-center'}`}>
            {/* Personal Informations Starts */}
            <div className={`${ data.about?.video_link?.length !== 0 ? 'xl:basis-1/2 lg:basis-5/12': 'mx-auto'} down-lg:basis-full`}>
              <h3 className={`uppercase text-fs-26 xs:text-fs-21 pb-22 font-semibold ${dark
                ? "white"
                : "black-6 group-hover:text-white transition-all duration-300"
                }`}>
                {data.about ? data.about.heading : "personal infos"}
              </h3>

              <div className="flex justify-between xs:justify-start font-Open-sans">
                {/* {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))} */}
                {data.about ? data.about.description : "Description"}
              </div>
              {/* <a
                className="button group mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                href="#"
              >
                <span
                  className={`relative z-20 text-${dark
                    ? "white"
                    : "black-6 group-hover:text-white transition-all duration-300"
                    }`}
                >
                  download cv
                </span>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent" />
              </a> */}
            </div>
            {/* Personal Informations Ends */}
            {data.about?.video_link?.length > 0 && 
              <div className="video_container relative mx-auto my-20" >
              <div style={{height:'100%'}}>
              <iframe id="y_video" width="100%" height="100%" src={`https://www.youtube.com/embed/${data.about?.video_link?.split('/').pop().split('?')[0]}` } className=""  frameBorder="0" allowFullScreen ></iframe>
              {/* <iframe onClick={()=>{setIsVideoStart(true); alert("hiiii")}} id="y_video" width="560" height="315" src={`https://www.youtube.com/embed/${data.about?.video_link.split('/').pop().split('?')[0]}` } className=""  frameBorder="0" allowFullScreen ></iframe> */}
              </div>
              {isVideoStart!==true && <div className="overlay">
            
              </div>}
              {/* {isVideoStart!==true && <div className="overlay">
                <i
                  className={`fa fa-play bg-accent px-16 py-12 text-fs-39 rounded-full text-white `}
                />
              </div>} */}
            </div>
            }
          </div>

          <br />
          {/* Facts Starts */}
          <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50 w-full">
            <div className="facts_container flex down-lg:-mx-15 flex-wrap">
              {data.projectStates ?
              <>
                <div className="fact_items w-1/3 px-15">
                  <div
                    className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                  >
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      {data.projectStates.experience}
                    </h3>
                    <p
                      className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                    >years of <span>experience</span></p>
                  </div>
                </div>
                <div className="fact_items w-1/3 px-15">
                <div
                  className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                    } rounded-5 mb-30 xs:mb-25`}
                >
                  <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                    {data.projectStates.projects}
                  </h3>
                  <p
                    className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                  >years of <span>projects</span></p>
                </div>
              </div>
              <div className="fact_items w-1/3 px-15">
                  <div
                    className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                  >
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      {data.projectStates.clients}
                    </h3>
                    <p
                      className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                    >years of <span>customers</span></p>
                  </div>
                </div>
              </>
                : counters.map((counter) => (
                  <div className="fact_items w-1/3 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                        } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Facts Ends */}

          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className={`uppercase text-fs-26 xs:text-fs-21 pb-48 font-semibold text-center ${dark
            ? "white"
            : "black-6 group-hover:text-white transition-all duration-300"
            }`}>
            my skills
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {data.skills? 
            data.skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.skill_name}
              >
                <div
                  className={`c100 p${skill.percentage} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                    }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.percentage}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.skill_name}
                </h6>
              </div>
            ))
            :
            skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                    }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))
            }
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className={`uppercase text-fs-26 xs:text-fs-21 pb-48 font-semibold text-center ${dark
            ? "white"
            : "black-6 group-hover:text-white transition-all duration-300"
            }`}>
            experience &amp; education
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {data.experience? 
                data.experience.map((experience, id) => {
                  // Check if the index (id) is even
                  if (id % 2 === 0) {
                    return (
                      <li
                        key={id}
                        className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                          } after:w-1 after:h-full`}
                      >
                        <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                          <i className="fa fa-briefcase"></i>
                        </div>
                        <span
                          className={`text-${dark ? "white" : "black-6"
                            } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                            } opacity-80 font-Open-sans uppercase`}
                        >
                          {experience.start_date.split('-')[1]}/{experience.start_date.split('-')[0]} - {experience.end_date ? experience.end_date.split('-')[1] + '/' + experience.end_date.split('-')[0] : 'present'}
                        </span>
                        <h5 className="uppercase text-fs-18 mt-7 mb-10">
                          {experience.job_title}
                          <span
                            className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                              } before:left-7 before:top-9 before:opacity-80`}
                          >
                            {experience.company}
                          </span>
                        </h5>
                        <p
                          className={`font-Open-sans ${dark ? "text-light-grey" : ""
                            } text-fs-14`}
                        >
                          {experience.short_description}
                        </p>
                      </li>
                    );
                  } else {
                    return null; // Skip odd elements
                  }
                })
                :
                experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                      } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${dark ? "white" : "black-6"
                        } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                        } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                          } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    >
                      {experience.desc}
                    </p>
                  </li>
                ))
                }
                
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {data.experience? 
                  data.experience.map((experience, id) => {
                    // Check if the index (id) is even
                    if (id % 2 !== 0) {
                      return (
                        <li
                          key={id}
                          className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                            } after:w-1 after:h-full`}
                        >
                          <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                            <i className="fa fa-briefcase"></i>
                          </div>
                          <span
                            className={`text-${dark ? "white" : "black-6"
                              } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                              } opacity-80 font-Open-sans uppercase`}
                          >
                            {experience.start_date.split('-')[1]}/{experience.start_date.split('-')[0]} - {experience.end_date ? experience.end_date.split('-')[1] + '/' + experience.end_date.split('-')[0] : 'present'}
                          </span>
                          <h5 className="uppercase text-fs-18 mt-7 mb-10">
                            {experience.job_title}
                            <span
                              className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                                } before:left-7 before:top-9 before:opacity-80`}
                            >
                              {experience.company}
                            </span>
                          </h5>
                          <p
                            className={`font-Open-sans ${dark ? "text-light-grey" : ""
                              } text-fs-14`}
                          >
                            {experience.short_description}
                          </p>
                        </li>
                      );
                    } else {
                      return null; // Skip odd elements
                    }
                  })
                  
                :
                  educations.map((education) => (
                    <li
                      key={education.id}
                      className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                        } after:w-1 after:h-full`}
                    >
                      <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <span
                        className={`text-${dark ? "white" : "black-6"
                          } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                          } opacity-80 font-Open-sans uppercase`}
                      >
                        {education.date}
                      </span>
                      <h5 className="uppercase text-fs-18 mt-7 mb-10">
                        {education.title}
                        <span
                          className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                            } before:left-7 before:top-9 before:opacity-80`}
                        >
                          {education.unv}
                        </span>
                      </h5>
                      <p
                        className={`font-Open-sans ${dark ? "text-light-grey" : ""
                          } text-fs-14`}
                      >
                        {education.desc}
                      </p>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
