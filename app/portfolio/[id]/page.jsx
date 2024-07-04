// pages/[id].js
'use client'

import { TunisContext } from '@/context/context';
import SectionContainer from "@/layouts/SectionContainer";
import TunisLayout from '@/layouts/TunisLayout';
import React, { useContext } from 'react';
import Portfolio from '@/app/portfolio/[id]/portfolio.css';
import { FaArrowLeft, FaLink } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Social from '@/components/Social';
// import {useRouter} from "next/router"


const Page = ({ params }) => {
    const router = useRouter()
    const { id } = params
    const { changeNav, data, dark } = useContext(TunisContext)

    return (
        <TunisLayout menu={false} loader={false}>
            <section className='porfolio_main_section'>
                {data && data.portfolio && data.portfolio.map((item) => {
                    if (item.id == id)
                        return (
                            <>
                                <div className="portfolio-headerSection relative" style={{ padding: '70px 26px', borderRadius: "0 0 30px 30px", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${process.env.NEXT_PUBLIC_BACKEND_HOST}/${item.portfolio_image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='flex items-center absolute gap-4' style={{ top: '10px', left: '26px', backgroundColor: 'rgb(255,255,255,0.3)', color: 'white', padding: '4px 8px', cursor: 'pointer' }} onClick={() => router.push('../')}><FaArrowLeft /> <span>Go Back</span></div>
                                    <h1 class="mb-4 font-extrabold leading-none tracking-tight text-white font-Poppins md:text-fs-20">{item.portfolio_title}</h1>
                                    <p class="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48" style={{ color: 'rgb(240, 240, 240)' }}>{item.service_type.service_title}</p>
                                </div>

                                <a className='link' href={item.link} target='_blank'>Project Link: <span className=' underline flex items-center gap-5'>{item.link} <FaLink /></span></a>
                                <div className="portfolio_details flex font-Open-sans">
                                    <div className="left">
                                        <h1 className=' text-fs-33 font-bold'>What is <span className='text-accent'>{item.portfolio_title}?</span></h1>
                                        <p className={`${dark ? 'portfolio_para_dark' : ''}`}>{item.description}</p>
                                        <Social fontSm={true}/>
                                        <button onClick={()=>{
                                            router.push( '/');
                                            changeNav('contact')
                                            }} className='bg-accent text-white'>Discuss CTA</button>
                                    </div>
                                    {item.video && <div className="right">
                                        <video controls={true} className='' src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/${item.video}`} poster="https://assets.markup.io/app/uploads/2022/08/Annotate-video-header.jpg"></video>
                                    </div>}

                                </div>
                            </>
                        )
                })}
            </section>
        </TunisLayout>
    );
}

export default Page;
