"use client";

import { createContext, useCallback, useReducer, useState } from "react";
import { toast } from "react-toastify";

// Create Context
const TunisContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  COLOR: "COLOR",
  DIRECTION: "DIRECTION",
  POPUP: "POPUP",
  DARK: "DARK",
};
const { NAV, TOGGLE, COLOR, POPUP, DIRECTION, DARK } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  color: "blue",
  direction: "top",
  popup: null,
  blogs: [
    {
      id: 1,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "How to Own Your Audience by Creating an Email List",
      img: "/assets/img/blog/blog-post-1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "Top 10 Toolkits for Deep Learning in 2020",
      img: "/assets/img/blog/blog-post-2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "Everything You Need to Know About Web Accessibility",
      img: "/assets/img/blog/blog-post-3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "How to Inject Humor & Comedy Into Your Brand",
      img: "/assets/img/blog/blog-post-4.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "Women in Web Design: How To Achieve Success",
      img: "/assets/img/blog/blog-post-5.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 6,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "Evergreen versus topical content: An overview",
      img: "/assets/img/blog/blog-post-6.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  dark: true,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case DIRECTION:
      return {
        ...state,
        direction: payload,
      };
    case POPUP:
      return {
        ...state,
        popup: payload,
      };
    case DARK:
      return {
        ...state,
        dark: payload,
      };
    default:
      return state;
  }
};

// Watson State
const TunisState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //data comes from django rest backend
  const [data, setData] = useState([]);

  const [contactSuccess, setContactSuccess] = useState(false)


  const getData = async ()=>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/`, {headers:{"secret":"syedkashifkazmi"}});
    const result = await response.json();
    const newDetails = result.portfolio.map((each)=>{
      let {id} = each

      id = (parseInt(id) + 10000).toString(36).padStart(5, '0')
      return {...each, id:id}
    })
    result.portfolio = newDetails
    console.log(result)
    setData(result)
    } catch (error) {
      console.log("AN ERROR OCCUR DURING FETCHING THE DATA")
      setData({
    "header": {
        "profile_picture": "image/upload/v1741242380/ejfw11pz3smmcivc0tpq.jpg",
        "heading": "Kashif Kazmi",
        "sub_heading": "Web Developer",
        "description": "Expert in creating high-performance, visually captivating websites and applications. Transforming ideas into seamless digital experiences with precision. With a track record of delivering reliable and secure solutions, let’s build something extraordinary together."
    },
    "about": {
        "id": 1,
        "video_link": null,
        "heading": "Personal Infos",
        "description": "With solid expertise in the MERN Stack, Django/Django Rest, and modern web frameworks, I build efficient, high-performance applications tailored to real-world needs. My focus is on delivering seamless digital experiences, ensuring secure and reliable solutions for every project. While proficient in backend systems like user management and API integration, I also excel in frontend development, transforming Figma designs into sleek, responsive interfaces. Every project is approached with precision, creativity, and a commitment to delivering exceptional results."
    },
    "projectStates": {
        "experience": 2,
        "projects": 5,
        "clients": 3
    },
    "skills": [
        {
            "skill_name": "HTML/CSS",
            "percentage": 89
        },
        {
            "skill_name": "JavaScript",
            "percentage": 85
        },
        {
            "skill_name": "React/Next.js",
            "percentage": 78
        },
        {
            "skill_name": "Node.js/Express.js",
            "percentage": 74
        },
        {
            "skill_name": "Django/DRF",
            "percentage": 65
        },
        {
            "skill_name": "MySQL/MongoDB",
            "percentage": 76
        },
        {
            "skill_name": "Python",
            "percentage": 65
        },
        {
            "skill_name": "C/C++",
            "percentage": 50
        }
    ],
    "experience": [
        {
            "job_title": "Frontend Developer",
            "company": "ZH IT SOLUTIONS",
            "short_description": "I completed my frontend development training at ZH IT SOLUTIONS, where I gained hands-on experience with modern tools and technologies. I learned React, Tailwind CSS, Material-UI (MUI), and other essential frontend tools, enabling me to build responsive and dynamic web applications.",
            "start_date": "2023-11-01",
            "end_date": "2024-02-01"
        },
        {
            "job_title": "ICS",
            "company": "Govt. Emerson College, Multan",
            "short_description": "I completed my ICS (Intermediate in Computer Science), where I gained foundational knowledge in programming, databases, and computer systems—building essential skills for my journey in tech.",
            "start_date": "2018-11-01",
            "end_date": "2020-11-01"
        },
        {
            "job_title": "Full Stack Development",
            "company": "Cipher Genius",
            "short_description": "I trained in full stack development at Cipher Genius, focusing on Django and DRF, while also learning Node.js and Express to complete the MERN stack.",
            "start_date": "2024-02-01",
            "end_date": null
        },
        {
            "job_title": "BS Information Technology",
            "company": "Superior College, Multan",
            "short_description": "I'm in my final year of a Bachelor's in Information Technology, where my focus is on my final year project. I'm ready to tackle new challenges and apply my skills in real-world tech solutions.",
            "start_date": "2020-11-01",
            "end_date": null
        }
    ],
    "services": [
        {
            "service_title": "Frontend Development",
            "service_image": "image/upload/v1725034700/zio0nmop0fruiewyod95.webp"
        },
        {
            "service_title": "Backend Development",
            "service_image": "image/upload/v1725037333/rvbyrudsebgpx7w2czon.jpg"
        },
        {
            "service_title": "API Integration",
            "service_image": "image/upload/v1725037807/byqcl7cel9ymquxb3nra.webp"
        },
        {
            "service_title": "Figma to Code",
            "service_image": "image/upload/v1725038831/umlsgztqev0tkzkizzkf.webp"
        },
        {
            "service_title": "Bug Fixing and Troubleshooting",
            "service_image": "image/upload/v1725039371/ziy8suno2sbadmsgj5p2.jpg"
        },
        {
            "service_title": "General",
            "service_image": ""
        }
    ],
    "portfolio": [
        {
            "id": 1,
            "portfolio_title": "Bhuna Restaurant",
            "portfolio_image": "image/upload/v1725098139/p341jogpgoq5krky1fci.png",
            "description": "<p style=\"margin: 0 0 1em 0; line-height: 1.5;\">\r\n  This project involved developing a sophisticated restaurant website based on a detailed Figma design. The goal was to create an engaging and user-friendly online presence for the restaurant, enhancing both the visual appeal and functionality of the site. The website aimed to capture the essence of the restaurant’s brand while providing a seamless and intuitive experience for visitors.\r\n</p>\r\n\r\n<p style=\"margin: 0 0 1em 0; line-height: 1.5;\">\r\n  The development process began with a thorough translation of the Figma design into a live website. Each design element was meticulously recreated to ensure pixel-perfect accuracy, maintaining the integrity of the original design. The result is a visually cohesive site that aligns perfectly with the restaurant’s brand identity. The site was built with a responsive layout to ensure it adapts flawlessly across various devices, from desktop monitors to mobile screens.\r\n</p>\r\n\r\n<h2 style=\"margin: 1em 0; font-weight: bold;\">\r\n  Project Highlights:\r\n</h2>\r\n\r\n<ul style=\"margin: 0; padding: 0 0 0 1.5em; list-style-type: disc;\">\r\n  <li style=\"margin: 0.5em 0;\">\r\n    <strong>Design Precision:</strong> Translated intricate Figma designs into a pixel-perfect website that reflects the restaurant's brand identity.\r\n  </li>\r\n  <li style=\"margin: 0.5em 0;\">\r\n    <strong>Responsive and Adaptive Layout:</strong> Designed a dynamic layout that ensures a seamless experience on all devices, from desktops to smartphones.\r\n  </li>\r\n  <li style=\"margin: 0.5em 0;\">\r\n    <strong>Interactive Features:</strong> Integrated interactive elements such as interactive menus and reservation systems to improve user engagement and streamline navigation.\r\n  </li>\r\n</ul>\r\n\r\n<p style=\"margin: 1em 0; line-height: 1.5;\">\r\n  This project showcases how a detailed design can be effectively converted into a functional and visually appealing website for a restaurant. By focusing on both aesthetic elements and practical functionalities, the website not only enhances the dining experience but also strengthens the restaurant's online presence. For further details or potential collaboration, please feel free to reach out.\r\n</p>",
            "link": "https://www.bhunarestaurant.com/",
            "service_type": {
                "service_title": "Frontend Development",
                "service_image": "image/upload/v1725034700/zio0nmop0fruiewyod95.webp"
            },
            "video": ""
        },
        {
            "id": 2,
            "portfolio_title": "Niacom",
            "portfolio_image": "image/upload/v1725101524/lyp6i9pkrtsxjivucapu.png",
            "description": "<p style=\"margin: 0 0 1em 0; line-height: 1.5;\"> The Niacom website represents a comprehensive online presence for a local Fiber-Optic Internet Service Provider (ISP) specializing in high-speed internet solutions for residential and multi-dwelling units. Built using Django, the website seamlessly integrates advanced features to deliver a top-notch user experience that aligns with Niacom's commitment to high-quality service delivery. </p> <p style=\"margin: 0 0 1em 0; line-height: 1.5;\"> Leveraging Django's robust framework, the Niacom website offers a user-friendly interface and efficient backend functionality. Django's scalability and security features were utilized to ensure a stable and secure platform for managing customer inquiries, service requests, and community outreach. The website's design highlights Niacom's dedication to delivering the fastest, most stable, and symmetrical fiber-optic connections, supported by state-of-the-art equipment and local technical support. </p> <h2 style=\"margin: 1em 0; font-weight: bold;\"> Project Highlights: </h2> <ul style=\"margin: 0; padding: 0 0 0 1.5em; list-style-type: disc;\"> <li style=\"margin: 0.5em 0;\"> <strong>Advanced Technology Integration:</strong> Utilized Django's capabilities to build a responsive and reliable website that reflects Niacom's use of XGS-PON technology for superior internet service. </li> <li style=\"margin: 0.5em 0;\"> <strong>Scalable and Secure Architecture:</strong> Implemented Django's secure and scalable architecture to handle various aspects of service delivery, from technical support to customer management. </li> <li style=\"margin: 0.5em 0;\"> <strong>Community Focus:</strong> Designed with a focus on community outreach, the website highlights Niacom's commitment to high-quality service and local engagement. </li> </ul> <p style=\"margin: 1em 0; line-height: 1.5;\"> This project underscores how Django's powerful framework can be employed to build a sophisticated platform for an ISP, combining technical excellence with an engaging user experience. For further insights or inquiries, please feel free to reach out. </p>",
            "link": "https://www.niacom.us/",
            "service_type": {
                "service_title": "Backend Development",
                "service_image": "image/upload/v1725037333/rvbyrudsebgpx7w2czon.jpg"
            },
            "video": ""
        },
        {
            "id": 3,
            "portfolio_title": "Quest International College",
            "portfolio_image": "image/upload/v1725269101/gcu7fwg7m9sdff7mtipz.png",
            "description": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6;\">    \r\n    <h3 class=\"text-accent\" style=\"font-size: 22px; margin-bottom: 10px;\">Overview:</h3>\r\n    <p style=\"margin-bottom: 15px; font-size: 16px;\">\r\n        The Quest International College website is a dynamic and user-friendly platform designed to provide a seamless experience for prospective students, faculty, and visitors alike. This site serves as the digital face of the college, featuring comprehensive information about programs, admissions, and campus life.\r\n    </p>\r\n    \r\n    <h3 class=\"text-accent\" style=\"font-size: 22px; margin-bottom: 10px;\">My Role:</h3>\r\n    <p style=\"margin-bottom: 15px; font-size: 16px;\">\r\n        I was responsible for the complete development of the website, including both the frontend and backend. Leveraging my expertise in Django, I built the backend infrastructure to handle user authentication, database management, and secure API integrations. On the frontend, I designed an intuitive, responsive interface that delivers a smooth user experience across devices.\r\n    </p>\r\n    \r\n    <h3 class=\"text-accent\" style=\"font-size: 22px; margin-bottom: 10px;\">Key Features:</h3>\r\n    <ul style=\"margin-left: 20px; margin-bottom: 20px;\">\r\n        <li style=\"margin-bottom: 10px; font-size: 16px;\"><strong>Intuitive Navigation:</strong> Easy access to information such as course offerings, faculty directories, and campus events.</li>\r\n        <li style=\"margin-bottom: 10px; font-size: 16px;\"><strong>Interactive Admission Portal:</strong> Applicants can explore programs and apply online through a dedicated admissions portal.</li>\r\n        <li style=\"margin-bottom: 10px; font-size: 16px;\"><strong>News & Events Section:</strong> Stay updated with campus news and upcoming events.</li>\r\n        <li style=\"margin-bottom: 10px; font-size: 16px;\"><strong>Responsive Design:</strong> Optimized for all devices, from desktops to mobile phones.</li>\r\n    </ul>\r\n    \r\n    <h3 class=\"text-accent\" style=\"font-size: 22px; margin-bottom: 10px;\">Tech Stack:</h3>\r\n    <p style=\"margin-bottom: 15px; font-size: 16px;\">\r\n        This project was developed using <strong>Django</strong>, the high-level Python web framework. Django's robust architecture enabled seamless database management, secure user authentication, and modular development for scalability and easy maintenance.\r\n    </p>\r\n    \r\n    <h3 class=\"text-accent\" style=\"font-size: 22px; margin-bottom: 10px;\">Purpose:</h3>\r\n    <p style=\"margin-bottom: 15px; font-size: 16px;\">\r\n        The website's goal is to simplify information-gathering for students and streamline admissions while showcasing the vibrant campus life at Quest International College. Designed with scalability in mind, the site is prepared to expand with the college’s growth.\r\n    </p>\r\n</div>",
            "link": "https://quest.edu.np/",
            "service_type": {
                "service_title": "Backend Development",
                "service_image": "image/upload/v1725037333/rvbyrudsebgpx7w2czon.jpg"
            },
            "video": ""
        }
    ],
    "testimonials": [
        {
            "client_name": "Ahmed Khan",
            "company": "NoorTech Solutions",
            "testimonial_type": "text",
            "video": "",
            "feedback": "The level of professionalism and attention to detail was exceptional. The project was completed on time, and the results exceeded my expectations."
        },
        {
            "client_name": "Fatima Malik",
            "company": "NoorTech Solutions",
            "testimonial_type": "text",
            "video": "",
            "feedback": "Incredible work ethic and top-notch quality! The project was handled with utmost dedication and delivered exactly as requested."
        },
        {
            "client_name": "John Peterson",
            "company": "BrightPath Technologies",
            "testimonial_type": "text",
            "video": "",
            "feedback": "Professional, creative, and highly responsive. I am thrilled with the final product and would highly recommend their services."
        }
    ],
    "faqs": [
        {
            "id": 2,
            "faq_title": "What technologies do you use for front-end development?",
            "faq_description": "I primarily use React and Next.js for building dynamic and high-performance user interfaces. For styling, I work with Tailwind CSS, Bootstrap, and Material-UI (MUI) to create visually appealing and responsive designs. These technologies enable me to deliver modern, scalable, and maintainable front-end solutions.",
            "service_type": {
                "service_title": "Frontend Development",
                "service_image": "image/upload/v1725034700/zio0nmop0fruiewyod95.webp"
            }
        },
        {
            "id": 3,
            "faq_title": "Can you integrate front-end frameworks with back-end systems?",
            "faq_description": "Yes, I can integrate front-end frameworks with various back-end systems and APIs to create dynamic and interactive applications. Whether you’re using a custom back-end or a popular CMS, I ensure seamless communication between the front-end and back-end.",
            "service_type": {
                "service_title": "Frontend Development",
                "service_image": "image/upload/v1725034700/zio0nmop0fruiewyod95.webp"
            }
        },
        {
            "id": 4,
            "faq_title": "Can you assist with improving or updating existing projects?",
            "faq_description": "Yes, I can help enhance, update, or redesign your existing projects, whether it's related to front-end development, back-end development, or full-stack solutions. Whether you're looking to improve performance, add new features, update the design, or resolve issues, I can provide the expertise needed to elevate your project.",
            "service_type": {
                "service_title": "General",
                "service_image": ""
            }
        },
        {
            "id": 5,
            "faq_title": "What technologies do you use for back-end development?",
            "faq_description": "I specialize in using Django and Django REST Framework (DRF) for building robust, scalable web applications and APIs. Additionally, I work with Node.js and Express to create fast and efficient server-side applications. These technologies enable me to deliver reliable and secure back-end solutions tailored to your project's needs.",
            "service_type": {
                "service_title": "Backend Development",
                "service_image": "image/upload/v1725037333/rvbyrudsebgpx7w2czon.jpg"
            }
        },
        {
            "id": 6,
            "faq_title": "Can you build APIs for my application?",
            "faq_description": "Yes, I can develop RESTful APIs using both Django REST Framework (DRF) and Node.js/Express. These APIs will be well-structured, secure, and scalable, allowing seamless communication between the front-end and back-end of your application.",
            "service_type": {
                "service_title": "Backend Development",
                "service_image": "image/upload/v1725037333/rvbyrudsebgpx7w2czon.jpg"
            }
        },
        {
            "id": 9,
            "faq_title": "Can you integrate APIs in both front-end and back-end systems?",
            "faq_description": "Yes, I can integrate APIs into both front-end and back-end systems. Whether your project requires front-end API calls or server-side integrations, I ensure seamless and secure data exchange between systems.",
            "service_type": {
                "service_title": "API Integration",
                "service_image": "image/upload/v1725037807/byqcl7cel9ymquxb3nra.webp"
            }
        },
        {
            "id": 11,
            "faq_title": "What steps do you take to optimize API performance?",
            "faq_description": "I optimize API performance by reducing unnecessary requests and making use of pagination when retrieving large datasets. Additionally, I use asynchronous processes and batching to enhance the speed and efficiency of API calls.",
            "service_type": {
                "service_title": "API Integration",
                "service_image": "image/upload/v1725037807/byqcl7cel9ymquxb3nra.webp"
            }
        },
        {
            "id": 12,
            "faq_title": "Can you build custom APIs for my application?",
            "faq_description": "Yes, I can build custom RESTful APIs tailored to your specific needs using Django REST Framework (DRF) or Node.js/Express. These custom APIs allow your application to communicate with other systems, mobile apps, or services, ensuring smooth data exchange and functionality.",
            "service_type": {
                "service_title": "API Integration",
                "service_image": "image/upload/v1725037807/byqcl7cel9ymquxb3nra.webp"
            }
        },
        {
            "id": 13,
            "faq_title": "What is your process for converting Figma designs into code?",
            "faq_description": "My process involves analyzing the Figma design thoroughly to ensure pixel-perfect accuracy. I then break down the design into responsive components, writing clean and maintainable HTML, CSS, and JavaScript (or frameworks like React and Next.js). The result is a fully functional, high-quality web application that mirrors the design exactly.",
            "service_type": {
                "service_title": "Figma to Code",
                "service_image": "image/upload/v1725038831/umlsgztqev0tkzkizzkf.webp"
            }
        },
        {
            "id": 14,
            "faq_title": "Which technologies do you use to convert Figma designs into code?",
            "faq_description": "I primarily use HTML, CSS, JavaScript, and frameworks like React and Next.js for front-end development. For styling, I use Tailwind CSS, Bootstrap, and Material-UI (MUI). These technologies allow me to translate designs into high-performance and scalable code.",
            "service_type": {
                "service_title": "Figma to Code",
                "service_image": "image/upload/v1725038831/umlsgztqev0tkzkizzkf.webp"
            }
        },
        {
            "id": 15,
            "faq_title": "How long does it typically take to convert a Figma design into code?",
            "faq_description": "The time required depends on the complexity and size of the project. A simple landing page can be converted in a matter of days, while larger websites with multiple pages and interactions may take longer. After reviewing your design, I will provide a time estimate for the conversion.",
            "service_type": {
                "service_title": "Figma to Code",
                "service_image": "image/upload/v1725038831/umlsgztqev0tkzkizzkf.webp"
            }
        },
        {
            "id": 17,
            "faq_title": "Can you fix bugs in both front-end and back-end systems?",
            "faq_description": "I primarily focus on troubleshooting and fixing front-end issues, particularly with technologies like React and Next.js. However, I am also capable of addressing minor back-end issues in frameworks such as Django, Node.js, and Express. While my expertise is strongest in front-end development, I can handle less complex back-end problems when needed.",
            "service_type": {
                "service_title": "Bug Fixing and Troubleshooting",
                "service_image": "image/upload/v1725039371/ziy8suno2sbadmsgj5p2.jpg"
            }
        },
        {
            "id": 18,
            "faq_title": "Can you work with existing codebases?",
            "faq_description": "Yes, I am comfortable working with existing codebases. I have experience in reading and understanding other developers’ code and can effectively debug, maintain, and extend existing projects. I prioritize clean and maintainable code practices when working with legacy systems.",
            "service_type": {
                "service_title": "General",
                "service_image": ""
            }
        },
        {
            "id": 19,
            "faq_title": "What do you consider your strongest technical skills?",
            "faq_description": "My strongest technical skills are in front-end development, particularly with React and Next.js, alongside proficiency in CSS frameworks like Tailwind CSS and Bootstrap. I also have experience in back-end development using Django and Node.js, which enables me to build complete solutions and collaborate effectively across both front-end and back-end tasks. While my focus is on front-end work, my understanding of back-end technologies allows me to handle complex integrations and custom functionality with ease.",
            "service_type": {
                "service_title": "General",
                "service_image": ""
            }
        }
    ],
    "contactDetails": {
        "heading": "Don't be shy !",
        "description": "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        "email": "kashifkazmi1412@gmail.com",
        "phone_number": "+92 3017422047"
    },
    "socialLinks": [
        {
            "platform_name": "facebook",
            "icon": "image/upload/v1725104116/ky3t8atwadk3xtfzjoaw.svg",
            "link": "https://www.facebook.com/kashif.kazmi.800097"
        },
        {
            "platform_name": "linkedIn",
            "icon": "image/upload/v1725104043/sgvnfllv9g1divmiihpx.svg",
            "link": "https://www.linkedin.com/in/kashif-kazmi/"
        },
        {
            "platform_name": "github",
            "icon": "image/upload/v1725103978/lmn6kshp9auz8pz2ngan.svg",
            "link": "https://github.com/KashifKazmi12"
        },
        {
            "platform_name": "Twitter",
            "icon": "image/upload/v1725106013/kiz22ntdckvn4mpxhckh.svg",
            "link": "https://x.com/kashifkazmi1214"
        },
        {
            "platform_name": "instagram",
            "icon": "image/upload/v1725106305/mvzegxqdmu52vnuquf5b.svg",
            "link": "https://www.instagram.com/syedkashifkazmi512/"
        },
        {
            "platform_name": "TikTok",
            "icon": "image/upload/v1725110828/g9izi0rimpomk2isrtab.svg",
            "link": "https://www.tiktok.com/@kashifkazmi1412"
        }
    ],
    "freelancePlatform": []
})
    }
    
  }


  const contactForm = async (formData) => {
    const services = formData.services.map(each => each.value).join(', ');
    setContactSuccess(false)

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("company_name", formData.company);
    submitData.append("phone_number", formData.phone);
    submitData.append("services", services);
    submitData.append("budget_range", formData.budget.value);
    submitData.append("timeline", formData.timelineFrom + ' - ' + formData.timelineTo);
    submitData.append("file", formData.file);
    submitData.append("description", formData.projectDescription);

    console.log(submitData);

    
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/contact/`, {
            method: 'POST',
            headers: {
                // You may need to remove the "secret" header if not required by the backend
                "secret": "syedkashifkazmi"
            },
            body: submitData
        });

        if (!response.ok) {
            throw new Error(`Failed to submit form: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        toast("Submit Successfully")
        setContactSuccess(true)
    } catch (error) {
        console.error("An error occurred during fetching the data:", error);
    }
};


  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const changeColor = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const changeDirection = useCallback((value) => {
    dispatch({
      type: DIRECTION,
      payload: value,
    });
  }, []);

  const popupToggle = useCallback((value) => {
    dispatch({
      type: POPUP,
      payload: value,
    });
  }, []);

  const darkToggle = useCallback((value) => {
    dispatch({
      type: DARK,
      payload: value,
    });
  }, []);

  const { nav, toggle, color, direction, popup, blogs, dark } = state;


  return (
    <TunisContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
        color,
        changeColor,
        direction,
        changeDirection,
        popupToggle,
        popup,
        blogs,
        dark,
        darkToggle,
        data,
        getData,
        contactForm,
        contactSuccess
      }}
    >
      {children}
    </TunisContext.Provider>
  );
};

export default TunisState;
export { TunisContext };
