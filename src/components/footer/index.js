import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


// library.add(faCoffee, faFacebookF);

const Footer = () => {
    return (
            <footer id="main_footer">
                <div className="footer_content ">
                     <p> Copyright &copy; 2021. All Rights Reserved.</p>
                         <div className="media_icons">
                            <FontAwesomeIcon className="fab" icon={ faFacebookF} />
                            <FontAwesomeIcon className="fab" icon={faInstagram} />
                            <FontAwesomeIcon className="fab" icon={faGithub} />
                            <FontAwesomeIcon  className="fab" icon={faLinkedinIn} />
                            <FontAwesomeIcon  className="fab" icon={faTwitter} />
                         </div>
                </div>
            </footer>
       
    )
}

export default Footer
