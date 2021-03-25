import React, { useState } from 'react'
import './style_contact.scss'
import ContactInfo from './contactInfo'
import FormMessage from './form'
import FormSuccess from './FormSuccess'
import Footer from '../footer/index'



const Contact = () => {

    const [isSubmitted, setisSubmitted] = useState(false)

    const submitForm = () => {
        setisSubmitted(true)
    }

    return (
        
        <div className="Contacts_page container_contact" id="Contact_A">
            <div className="contain_all">
                <div className="contactMe_heading">
                    <p> Have any questions or remarks? Just write me a message.</p>
                </div>
                <div id="contact-container">
                    {/* <ContactInfo/> */}
                    {!isSubmitted ? (<FormMessage submitForm={submitForm}/>): (<FormSuccess/>)}
                </div>
                
            </div>
            <Footer/>
        </div>


    )
}

export default Contact
