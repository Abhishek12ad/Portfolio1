import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/A.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Passionate and detail-oriented Web Developer with a strong foundation in front-end and back- end               
                technologies.</p>
                <p>Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js .</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>CSS</p><hr style={{width:"30%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"20%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Python Internship</h1>
            <p>August 22, 2024</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>AI/ML Geodata Analysis</h1>
            <p>IIRS/ISRO, 2024</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Java Basic's</h1>
            <p> Infosys 2024</p>
        </div>
      </div>
    </div>
  )
}

export default About
