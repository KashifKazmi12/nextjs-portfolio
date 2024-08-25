"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FileUploader } from "react-drag-drop-files";
import { FaFileImage } from "react-icons/fa";
import Select from "react-select"
import '@/public/assets/css/Components_styles/Contact.css'
import Social from "./Social";
import { each } from "lodash";
import { toast } from "react-toastify";



// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   { value: 'biscuits', label: 'biscuits' },
//   { value: 'jelly', label: 'jelly' },
//   { value: 'Pepsi', label: 'pepsi' },
// ]

const budgetRanges = [
  { value: '15k - 70k', label: '15k - 70k' },
  { value: '25k - 90k', label: '25k - 90k' },
  { value: '40k - 100k', label: '40k - 100k' },
  { value: '50k - 1200k', label: '50k - 120k' },
  { value: '75k - 150k', label: '75k - 150k' },
  { value: '90k - 200k', label: '90k - 200k' },
]

const Contact = () => {
  const { dark, contactForm, data, contactSuccess } = useContext(TunisContext);

  const [servicesDropDown, setServicesDropDown] = useState()

  useEffect(()=>{
    const servicesDropDownData = data.services?.map(each => ({value:each.service_title, label:each.service_title}))
    console.log(servicesDropDownData)
    setServicesDropDown(servicesDropDownData)
  }, [data])

  const [formData, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    timelineFrom: "",
    timelineTo: "",
    projectDescription: "",
    file: "",
  });


  const { name, email, phone, company, services, budget, timelineFrom, timelineTo, projectDescription, file, capcha } = formData;
  const onChange = (e) => {
    setData(() => ({ ...formData, [e.target.name]: e.target.value }));
    // console.log(formData)
  }

  useEffect(()=>{
    if(contactSuccess){
        setData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          budget: "",
          timelineFrom: "",
          timelineTo: "",
          projectDescription: "",
          file: "",
        })
      }
  },[contactSuccess])

  // handleFileChange

  const handleChange = (myfile) => {
    setData((prev) => ({ ...prev, file: myfile }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    for (const field in formData) {
      if (field !== 'phone' && field !== 'company' && formData.hasOwnProperty(field) && formData[field].length === 0) {
        let message = field
        if(field === "timelineFrom" || field === "timelineTo")
          message = "Timeline"
        else if(field === "projectDescription")
          message = "Project Description"
        toast(`${message} field is Empty`)
        return
      }
    }
    contactForm(formData)
  };


  // change input type
  const [dateInputs, setDateInputs] = useState({from:'text', to:'text'});


  return (
    <SectionContainer id="contact">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"contact"}
          colorTitle={"touch"}
          normalTitle={"get in"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex down-lg:flex-col">
            {/* Contact Details Starts */}
            <div className="w-1/3 down-lg:w-full px-4 xs:px-0">
              <h3 className="text-fs-26 xs:text-fs-21 mb-16 font-semibold uppercase">
                {data.contactDetails? data.contactDetails.heading:"don't be shy !"}
              </h3>
              <p className="mb-16 font-Open-sans text-fs-15 xs:text-fs-14">
                {data.contactDetails? data.contactDetails.description: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."}
              </p>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-envelope-open absolute left-0 top-10 text-fs-33 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  mail me
                </span>
                {data.contactDetails? data.contactDetails.email:"steve@mail.com"}
              </div>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-phone-square absolute left-0 top-10 text-fs-39 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  call me
                </span>
                {data.contactDetails? data.contactDetails.phone_number:"+216 21 184 010"}
              </div>
              <Social fontSm = {true}/>
            </div>
            {/* Contact Details Ends */}
            {/* Contact Form Starts */}
            <div className="w-2/3 down-lg:w-full px-4 down-lg:px-0">
              <form
                id="contactform"
                className="contactform"
                onSubmit={(e) => onSubmit(e)}
              >
                <div className="flex flex-wrap font-normal">
                  <div className="input-item" style={{ padding: '0 5px' }}>
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Name:</label>
                    <input
                    style={{marginTop:'4px'}}
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Email:</label>
                    <input
                    style={{marginTop:'4px'}}
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      placeholder="YOUR EMAIL"
                    />
                  </div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                    <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Phone:</label>
                    <input
                      autoComplete="off"
                      style={{marginTop:'4px'}}
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      placeholder="YOUR PHONE NO. (optional)"
                    />
                  </div>

                  {/* -------- second row */}
                  <div className="input-item" style={{ padding: '0 5px'}}>
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Company:</label>
                    <input
                      autoComplete="off"
                      style={{marginTop:'4px'}}
                      className={` w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="company"
                      onChange={(e) => onChange(e)}
                      value={company}
                      placeholder="COMPANY NAME (optional)"
                    />
                  </div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Services:</label>
                    <Select
                      styles={
                      
                        {
                          control: (provided, state) => ({
                            ...provided,
                            // Change this to the desired background color
                            border: 'none',
                            backgroundColor: '#dae3ec38',
                            color: 'white !important'
                          }),
                          container: (provided, state) => ({
                            ...provided,
                            border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                            borderRadius: '25px',
                            marginTop:'4px'
                          }),
                          input: (provided, state) => ({
                            ...provided,
                            color: 'white', // Change this to the desired text color
                            borderRadius: '22px',
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: 'transparent',
                            color: dark?"white":"black",
                            '&:hover': {
                              backgroundColor: dark?"rgb(116, 116, 116)":"#cacacae5",
                              color: "white"
                            }
                          }),
                          menu: (provided, state) => ({
                            ...provided,
                            backgroundColor: dark?"rgba(99, 99, 99)":"white",

                          }),
                          placeholder: (provided, state) => ({
                            ...provided,
                            color: dark ? 'rgb(107, 107, 107)' : 'rgba(0, 0, 0, 0.54)', // Change this to the desired placeholder color
                          }),
                        }}
                      className="mb-30"
                      isMulti
                      placeholder='Select services'
                      options={servicesDropDown}
                      classNamePrefix="text-white"
                      name='services'
                      value={formData.services}
                      onChange={(selected) => {
                        setData({
                          ...formData,  // Spread the existing formData
                          ['services']: selected  // Update the services property
                        });
                      }}
                    />
                  </div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Budget:</label>
                    <Select
                      styles={
                        {
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: dark ? 'white' : 'black'
                          }),
                          container: (provided, state) => ({
                            ...provided,
                            border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                            borderRadius: '25px',
                            marginTop:'4px',

                          }),
                          input: (provided, state) => ({
                            ...provided,
                            color: 'white', // Change this to the desired text color
                            borderRadius: '22px',
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: 'transparent',
                            color: dark?"white":"black",
                            '&:hover': {
                              backgroundColor: dark?"rgb(116, 116, 116)":"#cacacae5",
                              color: "white"
                            }
                          }),
                          menu: (provided, state) => ({
                            ...provided,
                            backgroundColor: dark?"rgba(99, 99, 99)":"white",

                          }),
                          placeholder: (provided, state) => ({
                            ...provided,
                            color: dark ? 'rgb(107, 107, 107)' : 'rgba(0, 0, 0, 0.54)', // Change this to the desired placeholder color
                          }),
                          control: (provided, state) => ({
                            ...provided,
                            // Change this to the desired background color
                            border: 'none',
                            backgroundColor: '#dae3ec38',
                            color: 'white !important'
                          }),
                        }}
                      isClearable
                      placeholder='Select Budget'
                      options={budgetRanges}
                      classNamePrefix="text-white"
                      name='budget'
                      required = {true}
                      value={formData.budget}
                      className="mb-30"
                      onChange={(selected) => {
                        setData({
                          ...formData,  // Spread the existing formData
                          ['budget']: selected  // Update the services property
                        });
                      }}
                    />
                  </div>

                  {/* third row */}
                  <div className="w-full" style={{ padding: "0px 12px", color: dark ? "white" : "gray" }}>Select TimeLine:</div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type={dateInputs.from}
                      name="timelineFrom"
                      onChange={(e) => onChange(e)}
                      value={timelineFrom}
                      onFocus={()=>{setDateInputs((prev)=>({...prev,from:'date' }))}}
                      onBlur={()=>{setDateInputs((prev)=>({...prev,from:'text' }))}}
                      placeholder="from (dd-mm-yy)"
                    />

                  </div>
                  <div className="input-item" style={{ padding: '0 5px' }}>
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type={dateInputs.to}
                      name="timelineTo"
                      onChange={(e) => onChange(e)}
                      value={timelineTo}
                      placeholder="to (dd-mm-yy)"
                      onFocus={()=>{setDateInputs((prev)=>({...prev,to:'date' }))}}
                      onBlur={()=>{setDateInputs((prev)=>({...prev,to:'text' }))}}
                    />

                  </div>
                  <div className="w-full" style={{ padding: '0 5px', marginBottom: '14px' }}>
                    <FileUploader required={true} handleChange={handleChange} name="file" children={<div htmlFor='file' className='bg-gray-300/20 w-full flex justify-center items-center gap-4' style={{ border: '3px dotted rgba(69, 69, 69, 0.600)', height: '120px', padding: '0 10px' }}>
                      <FaFileImage style={{ fontSize: '20px' }} />
                      {formData.file ? <span>{formData.file.name}</span> : <div><div>Upload or drop a file right here (.doc, .docx, .pdf)</div></div>} </div>} dropMessageStyle={{ background: '#ADD8E6' }} types={["doc", "docx", "pdf", "ppt", "pptx"]} />
                    {/* <FileUploader handleChange={handleChange} name="file" dropMessageStyle={{background:'#ADD8E6'}} types={fileTypes} /> */}

                  </div>


                  <div className="w-full px-4 xs:px-0 mt-5">
                  <label htmlFor="" style={{padding:'0 12px', color: dark ? "white" : "gray" }}>Project Description:</label>
                    <textarea
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } h-160 py-11 px-26 rounded-20 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      placeholder="ENTER PROJECT DESCRIPTION"
                      name="projectDescription"
                      onChange={(e) => onChange(e)}
                      value={projectDescription}
                    />
                  </div>
                    {/* capcha field */}
                  <div className="input-item hidden" style={{padding:'0 5px'}}>
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="capcha"
                      onChange={(e) => onChange(e)}
                      value={capcha}
                      placeholder="ENTER CAPTCHA"
                    />
                  </div>


                  <div className="w-full px-4 xs:px-0 mt-30">
                    <button
                      type="submit"
                      className="button cursor-pointer group overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                      onClick={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                      }}
                    >
                      <span
                        className={`relative z-20 ${dark
                          ? "text-white"
                          : "text-black-6 group-hover:text-white transition-all duration-300"
                          }`}
                      >
                        send message
                      </span>
                      <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-send bg-accent" />
                    </button>
                  </div>
                  <div className="w-full px-4 xs:px-0">
                    <span
                      id="message"
                      className="output_message h-0 text-center leading-lh-46 rounded-30 text-white block [&.success]:h-46 [&.success]:bg-success [&.error]:h-46 [&.error]:bg-error mt-30 mb-60"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
