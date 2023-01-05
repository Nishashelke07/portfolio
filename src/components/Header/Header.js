import React, {useState, useEffect} from 'react'
import './header.scss'
import logo from '../../dist/img/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setbutton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
      setClick(false)
    }

    const showbutton = () => {
      if (window.innerWidth <= 960) {
        setbutton(false)
      }
      else {
        setbutton(true)
      }
    }

    const handleScroll=() => {
        const offset=window.scrollY;
        // const offX = window.scrollX;
        if(offset > 715 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        handleScroll();
        showbutton();
      })

      window.addEventListener('scroll',handleScroll)
      window.addEventListener('resize', showbutton)

    return (
      <>
        
      
        <div className={(scrolled)? 'header-scrolled' : 'header-contact'}>
            <img src={logo} alt='logo' id='logo' onClick={scroll.scrollToTop} ></img>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                {button}
            </div>
            <nav className={click ? 'mobile-menu' : 'main-nav'}>               
                    <Link activeClass="active" to="Home_A" spy={true} smooth={true} offset={0} onClick={closeMobileMenu} duration={500}  className="link_home">  Home </Link>
                    <Link activeClass="active" to="About_page" spy={true} smooth={true} offset={0} onClick={closeMobileMenu} duration={500} className="link_about"> About </Link>
                    <Link activeClass="active" to="Projects_A" spy={true} smooth={true} offset={0} onClick={closeMobileMenu} duration={500} className="link_projects"> Projects </Link>
                    <Link activeClass="active" to="Contact_A" spy={true} smooth={true} offset={0} onClick={closeMobileMenu} duration={500} className="link_contact"> Contact </Link>
            </nav>
        </div>
        </>
        
    )
}

export default Header
