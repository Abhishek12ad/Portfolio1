import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Abhi.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhishek Napit, Web developer based in India.</span></h1>
        <p>I am a web developer from Rajasthan, India and ,I am a Fresher.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className = 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="./resume.pdf" download="resume.pdf">
            <div className="hero-resume">My Resume</div>
            </a>
        </div>
    </div>
  )
}

export default Hero
