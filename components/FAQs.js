"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import "@/public/assets/css/Components_styles/FAQs.css"

const FAQs = () => {
    const [answerTransitonState, setAnswerTransitonState] = useState(0)

    const faq = [
        {
            id: 1,
            type: 'python',
            question: 'How can I place an order?',
            answer: 'You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.'
        },
        {
            id: 2,
            type: 'python',
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose the payment method that is most convenient for you during the checkout process. We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose the payment method that is most convenient for you during the checkout process.'
        },
        {
            id: 3,
            type: 'js',
            question: 'How long does shipping take?',
            answer: 'Shipping times vary depending on your location and the shipping method you choose. Generally, orders are processed and shipped within 1-3 business days. Once shipped, you will receive a tracking number to monitor the status of your delivery.'
        },
    ]
    const [filteredItems, setFilteredItems] = useState(faq);
    const { dark } = useContext(TunisContext);

    const filterItems = (type) => {
        if (type.length) {
            const filtered = faq.filter((item) => item.type === type);
            setFilteredItems(filtered);
        }
        else {
            setFilteredItems(faq)
        }
    };
    return (
        <SectionContainer id={"faqs"}>
            <div className="w-full">
                {/* Section Title Starts */}
                <SectionTitle
                    bigTitle={"FAQs"}
                    colorTitle={"Questions"}
                    normalTitle={"Frequently Asked"}
                />


                {/* Filter Section Start */}
                <ul className="portfolio-tab-list flex justify-center mt-30 mb-10" style={{ gap: '20px' }} role="tablist">
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r0:0" data-rttab="true" tabIndex="0" onClick={() => { filterItems('') }}>ALL</li>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:1" data-rttab="true" onClick={() => { filterItems('python') }}>Python</li>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:2" data-rttab="true" onClick={() => { filterItems('js') }}>JavaScript</li>
                    <li className="px-2 py-2 cursor-pointer green" id="tab:r0:3" aria-selected="false" aria-disabled="false" aria-controls="panel:r0:3" data-rttab="true" onClick={() => { filterItems('wordpress') }}>Wordpress</li>
                </ul>
                {/* Filter Section End */}


                {/* FAQs Start */}
                <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full flex flex-col p-4 md:p-8 mx-auto">
                    <div className="flex divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 w-full" style={{ flexDirection: 'column' }}>
                        {filteredItems.map((item) => {
                            return (
                                <div key={item.id} style={{margin:'3px 0', transition:'1s ease'}}>
                                    <div className=" rounded-t-5" style={{padding: '10px 6px', background: 'rgba(128, 128, 128, 0.149)' }} key={item.id}>
                                        <div className="question outline-none cursor-pointer focus:underline text-fs-17 font-semibold" onClick={() => { if (answerTransitonState === item.id) { setAnswerTransitonState(0) } else { setAnswerTransitonState(item.id) } }}>
                                            <i className="fa fa-arrow-down px-4 text-fs-14"></i> {item.question}
                                        </div>
                                    </div>
                                    <div className="answer text-fs-14" style={{visibility: `${answerTransitonState === item.id ? 'visible' : 'hidden '}`, height: `${answerTransitonState === item.id ? 'auto' : '0 '}`, background: 'rgba(128, 128, 128, 0.149)' }} >
                                        <div className="hr" />
                                        <p style={{ height: `${answerTransitonState === item.id ? '100%' : '0 '}`, padding:'15px 10px'}}>{item.answer}</p>
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
