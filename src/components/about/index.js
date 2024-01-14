import React from "react";
import "./style.scss";
import mi from "../../dist/img/mii.png"


const About = () => {
  return (
    <div id="About_page">
      <div id="about-a">
        <div className="">
          <h2 className="section_title">
            About Me
            <div className="bottom-line"></div>
          </h2>
          <p className="lead_about">
            Let me tell you a bit about myself and what I do...
          </p>
          <div className="about-info">
            <img src={mi} className="bio-image" alt="my_image"></img>
            <div className="bio bg-light">
              <p>
                Welcome to my corner of the digital realm! I'm Nishigandha, a
                passionate front-end developer with a knack for crafting
                seamless and engaging user experiences. My journey into the
                world of web development is a testament to my love for coding
                and the pursuit of constant growth.<br/>
                <p> 
                Although my professional
                journey began in manual testing, I soon realized that my true
                passion lay in the dynamic and ever-evolving landscape of web
                development. Coding has always been more than just a job for me;
                it's a challenging puzzle that I eagerly solve every day. I took
                the leap into web development by fortifying my foundations with
                Java and then delving into the world of JavaScript, where I
                found my true calling. 
                </p>

                <br/> 
                <p> To ensure a solid understanding of the
                intricacies of programming, I dedicated time to studying data
                structures and algorithms, sharpening my problem-solving skills
                along the way. Recognizing the importance of hands-on
                experience, I made the bold decision to leave my full-time job
                and pursue internships that would expose me to the front-end
                realm. This decision proved invaluable as it allowed me to
                immerse myself in the practical aspects of web development and
                refine my skills in HTML, CSS, and React.
                </p>
                <br/>
                 Today, I am on a
                relentless quest for challenging opportunities where I can
                contribute my expertise while continually expanding my
                knowledge. I am passionate about creating user-friendly
                interfaces that not only meet but exceed expectations. My
                journey is an ongoing adventure, and I am excited about the
                possibilities that lie ahead. Let's collaborate and build
                something extraordinary!
              </p>
            </div>
          </div>
        </div>
        <div id="about-b">
          <h2>
            {" "}
            Technical Skills
            <div className="bottom-line"></div>
          </h2>
          <div className="skills">
            <div id="skill_childs">JavaScript</div>
            <div id="skill_childs">HTML5</div>
            <div id="skill_childs">CSS3</div>
            <div id="skill_childs">Sass</div>
            <div id="skill_childs">React.js</div>
            <div id="skill_childs">Redux</div>
            <div id="skill_childs">Node</div>
            <div id="skill_childs">Material UI</div>
            <div id="skill_childs">Java</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
