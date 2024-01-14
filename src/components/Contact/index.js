import React, { useState } from 'react'
import './style_contact.scss'
import FormMessage from './form'
import FormSuccess from './FormSuccess';

const Contact = () => {

    const [isSubmitted, setisSubmitted] = useState(false)

    const submitForm = () => {
        setisSubmitted(true)
    }

    return (
        
        <div className="Contacts_page container_contact" id="Contact_A">
            <div className="contain_all">
                <div className="contactMe_heading">
                    <p><strong> Have any questions or remarks? Just write me a message.</strong></p>
                </div>
                <div id="contact-container">
                    {!isSubmitted ? (<FormMessage submitForm={submitForm}/>): (<FormSuccess/>)}
                </div>
            </div>
        </div>


    )
}

export default Contact
