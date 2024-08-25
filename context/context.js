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
    setData(result)
    } catch (error) {
      console.log("AN ERROR OCCUR DURING FETCHING THE DATA")
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
