import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {  
    const [values, setValues] = useState({
        personName: "",
        personContact: '',
        personEmail: '',
        personMessage: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        });
    };

    function sendEmail() {

        emailjs.sendForm('service_qoqceoq', 'template_we21m3b', {values}, 'user_zB3aCxYHb5taFHGW0SFYH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setisSubmitting(true);
        sendEmail();
    } 

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])

    return {handleChange, values, handleSubmit, errors, isSubmitting};
}

export default useForm
