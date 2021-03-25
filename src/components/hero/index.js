import React from 'react'
import './styles/styles.scss'
// import Typewriter from 'typewriter-effect';
import Header from '../Header/Header'
import { animateScroll as scroll } from "react-scroll";




const Hero = () => {

    const scrollDown = (e) => {
        e.preventDefault();
        scroll.scrollTo(770);
    }

    const getInTouch = (e) => {
        e.preventDefault();
        scroll.scrollTo(2700);
    }

    const seeWork = (e) => {
        e.preventDefault();
        scroll.scrollTo(1646);
    }



    return (
        <div className='header-home' id="Home_A">
           
                <Header/>
                <div className="container_hero">
                <div className='header-content'>   
                    <hr/>
                    <h1> I'm Suraj </h1>
                    <p> Full Stack Developer &amp; a budding  </p>
                    <div className="typewriting-effect">
                    {/* <Typewriter options={{loop: true}} onInit={(typewriter => typewriter.typeString("UI/UX Designer!").pauseFor(2000).deleteAll().typeString('PhotoGrapher!')
                            .pauseFor(1000).deleteAll().typeString('Pianist!').pauseFor(1000).deleteAll().typeString('Blogger!')
                            .pauseFor(1000).deleteAll().start())}/> */}
                    </div>
                </div>
                <div className="ellipse">
                    <button className='btn-main' onClick={getInTouch} >Get in touch </button>  
                    <button className='btn-main' onClick={seeWork} > Latest Work</button>
                </div> 

                </div> 
                <div className="round" onClick={scrollDown}>
                    <span className="span_scroll"></span>
                    <span className="span_scroll"></span>
                    <span className="span_scroll"></span>
                    <span className="span_scroll"></span>
                </div>
        </div>
    )
}

export default Hero
