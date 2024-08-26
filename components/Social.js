import { TunisContext } from '@/context/context'
import React, { useContext } from 'react'

const Social = ({fontSm}) => {
    const {data} = useContext(TunisContext)
  return (
    <div className={`icons flex gap-12 text-fs-26 my-20`}>
              {data.socialLinks && data.socialLinks.map((socialLink) => {
                return (
                  <a href={socialLink.link} target="_blank">
                    <div className="item cursor-pointer" style={{width:`${fontSm? "26px":"36px"}`}}><img src={`${process.env.NEXT_PUBLIC_BACKEND_IMG_HOST}/${socialLink.icon}`} /></div>
                  </a>
                )
              })}

              {/* <div className="item cursor-pointer"><FaFacebook/></div>
              <div className="item cursor-pointer"><FaWhatsapp/></div>
              <div className="item cursor-pointer"><FaInstagram/></div>
              <div className="item cursor-pointer"><FaLinkedin/></div>
              <div className="item cursor-pointer"><FaTwitter/></div> */}
            </div>
  )
}

export default Social