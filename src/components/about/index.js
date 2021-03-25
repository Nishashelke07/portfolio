import React from 'react'
import './style.scss'
import mi from '../../dist/img/Screenshot 2020-01-29 at 9.26.00 AM.png';

const About = () => {
    return (
        <div id="About_page">
            <div id="about-a">
                <div className="">
                    <h2 className="section_title"> About Me 
                    <div className='bottom-line'></div>
                    </h2>
                    <p className="lead_about"> Let me tell you a bit about myself and what I do... </p>
                    <div className="about-info">
                            <img src={mi} className="bio-image" alt="my_image"></img>
                            <div className="bio bg-light">
                                <p>
                                    Past Design Engineer with a Swedish Multinational working on Compressors, Engines and buidling machine components in 3D softwares
                                    I have come a long way from being consumer of software applications to becoming creator and engineer of some. <br/>This change though 
                                    not circumstantial has allowed me to come closer to my passion. I love building new things
                                    and bring the best out of a Technology to power amazing products and I believe I have found my niche. <br/><br/> I would love to hear 
                                    from you. Be it a Project, Job opportunity or coffee.
                                    Feel free to catch up!   
                                </p>
                            </div>
                    </div>
                </div>     
            <div id="about-b" >
                <h2 > Technical Skills 
                    <div className='bottom-line'></div>
                </h2>
                <div className="skills">
                    <div id='skill_childs'>JavaScript!</div>
                    <div id='skill_childs'>React.JS</div>
                    <div id='skill_childs'>Express</div>
                    <div id='skill_childs'>Node</div>   
                    <div id='skill_childs'>MongoDB</div> 
                    <div id='skill_childs'>C++</div>
                    <div id='skill_childs'>Docker</div>
                </div>
            </div>   
            </div>
        </div>
   )
}

export default About
