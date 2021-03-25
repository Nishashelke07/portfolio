import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeSquare, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './contactInfo.scss'

const ContactInfo = () => {
    return (
        <div className="contact-info">
                <h4>Contact Information</h4>
                    <p> Fill up the form and I'll get back to you soon.</p>

                    <div className="icon-text">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                        <span>+91 9284453558</span>
                    </div>
                    <div className="icon-text">
                    <FontAwesomeIcon icon= {faEnvelopeSquare} />
                        <span>SurajShelke1@outlook.com</span>
                    </div>
                    <div className="icon-text">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <span>A-4, Caspian Heights, Koramngala, Banglore-560034</span>
                    </div>
                    
        </div>
)
}

export default ContactInfo
