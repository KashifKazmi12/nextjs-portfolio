"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import "@/public/assets/css/Components_styles/FAQs.css"

const FAQs = () => {
    const [answerTransitonState, setAnswerTransitonState] = useState(0)
    const { dark, data } = useContext(TunisContext);


    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(()=>{
        if(data && data.faqs){
            setFilteredItems(data.faqs)
        }
    },[data.faqs])

    const filterItems = (type) => {
        if (type.length) {
            const filtered = data.faqs.filter((item) => item.service_type.service_title === type);
            setFilteredItems(filtered);
        }
        else {
            setFilteredItems(data.faqs)
        }
    };
    return (
        <SectionContainer id={"faqs"}>
            <div className="w-full mb-32">
                {/* Section Title Starts */}
                <SectionTitle
                    bigTitle={"FAQs"}
                    colorTitle={"Questions"}
                    normalTitle={"Frequently Asked"}
                />


                {/* Filter Section Start */}
                <ul className="portfolio-tab-list flex justify-center flex-wrap mt-30 mb-10" style={{ gap: '8px' }} role="tablist">
                <li style={{background:'rgba(219, 219, 219, 0.1)', padding:'3px 8px', borderRadius:'8px'}} className="px-2 py-2 cursor-pointer green" id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" data-rttab="true" tabIndex="0" onClick={() => { filterItems('') }}>ALL</li>
                {data.services? data.services.map((service)=>{
                    if(service.service_title === "General")
                  return null
                  else
                    return(
                        <li style={{background:'rgba(219, 219, 219, 0.1)', padding:'3px 8px', borderRadius:'8px'}} className="px-2 py-2 cursor-pointer green" id="tab:r0:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true" onClick={() => { filterItems(service.service_title) }}>{service.service_title}</li>
                    )
                }) : 
                <>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true" onClick={() => { filterItems('python') }}>Python</li>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:2" data-rttab="true" onClick={() => { filterItems('js') }}>JavaScript</li>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:3" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:3" data-rttab="true" onClick={() => { filterItems('wordpress') }}>Wordpress</li>
                </>
                }
                    
                </ul>
                {/* Filter Section End */}


                {/* FAQs Start */}
                <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full flex flex-col p-4 md:p-8 mx-auto">
                    <div className="flex divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 w-full" style={{ flexDirection: 'column' }}>
                        {data.faqs &&
                            filteredItems.map((item)=>{
                                return (
                                <div key={item.id} style={{margin:'3px 0'}}>
                                    <div className=" rounded-t-5" style={{padding: '10px 6px', background: 'rgba(128, 128, 128, 0.149)' }} key={item.id}>
                                        <div className="question outline-none cursor-pointer focus:underline text-fs-17 font-semibold" onClick={() => { if (answerTransitonState === item.id) { setAnswerTransitonState(0) } else { setAnswerTransitonState(item.id) } }}>
                                            <i className="fa fa-arrow-down px-4 text-fs-14"></i> {item.faq_title}
                                        </div>
                                    </div>
                                    <div className="answer text-fs-14" style={{visibility: `${answerTransitonState === item.id ? 'visible' : 'hidden '}`, height: `${answerTransitonState === item.id ? 'auto' : '0 '}`, background: 'rgba(128, 128, 128, 0.149)' }} >
                                        <div className="hr" />
                                        <p style={{ height: `${answerTransitonState === item.id ? '100%' : '0 '}`, padding:'15px 10px'}}>{item.faq_description}</p>
                                    </div>
                                </div>
                        )
                                    
                            })}
                    </div>
                </div>



            </div>
        </SectionContainer>
    );
};
export default FAQs;
