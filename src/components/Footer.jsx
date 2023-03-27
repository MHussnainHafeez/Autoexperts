import React from 'react'
import './footer.css'
import {CiFacebook} from 'react-icons/ci'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
function Footer() {
  return (
    <>
    <div className="footercolor ">
      <div className='date'>
    <span>@ AutoExperts</span> | <span>March 2023</span>
      <div className="links">
      <span className='icon'><a href="https://www.facebook.com/autorepairworkshop786?mibextid=ZbWKwL">{<CiFacebook/>}</a></span>
      <span className='icon'><a href="instagram.com">{<AiOutlineInstagram/>}</a></span>
      <span className='icon'><a href="±971508508592">{<FaWhatsapp/>}</a></span>
    </div> 
    </div>
     
    </div>
    
    </>
  )
}

export default Footer
