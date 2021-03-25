import React from 'react'
import './formMessage.scss'
import useForm from './useForm'
import validate from './validateInfo'

const FormMessage = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <form  onSubmit={ handleSubmit} >
                        <div className="form-group">
                            <label> Name</label>
                            <input type="text" name="personName" value={values.personName} onChange={handleChange} className="hola" />
                            {errors.personName && <p>{errors.personName}</p>}
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" name="personEmail" value={values.personEmail} onChange={handleChange}/>
                            {errors.personEmail && <p>{errors.personEmail}</p>}

                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="tel" name="personContact" value={values.personContact} onChange={handleChange} />
                        </div>
                        <div className="form-group form-D">
                            <label>Message</label>
                            <textarea placeholder='Type here...' name="personMessage" value={values.personMessage} onChange={handleChange}></textarea>
                            {errors.personMessage && <p>{errors.personMessage}</p>}

                        </div>
                        <div className="col">
                        <div className="form-group solo">
                            <button className="primary_button"> Send Message</button>
                        </div>
                        </div>
                </form>
    )
}

export default FormMessage
