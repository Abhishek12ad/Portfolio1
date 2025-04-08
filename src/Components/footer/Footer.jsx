import React from 'react'
import './Footer.css'
import underline from '../../assets/nav_underline.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Abhi</h1>
                <img src={underline} alt="" />
                <p>I am a Web developer from, Jaipur</p>
            </div>
            {/*<div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>*/}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Abhishek Napit. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privecy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
