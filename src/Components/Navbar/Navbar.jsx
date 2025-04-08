import AnchorLink from 'react-anchor-link-smooth-scroll'
import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setmenu] = useState("home");
  const menuRef = useRef();

  const openMenu= () =>{
    menuRef.current.style.right='0';
  }
  const closeMenu= () =>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div id='home' className='navbar'>
        <h1>Abhi <img src={underline} alt="" /></h1>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li><AnchorLink className = 'anchor-link' offset={50} href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className = 'anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about me")}>About Me</p></AnchorLink>{menu==="about me"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className = 'anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className = 'anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className = 'anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt=''/>:<></>}</li>

        </ul>
        <div className='nav-connect'><AnchorLink className = 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
