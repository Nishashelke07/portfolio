import React from 'react'
import response from '../../dist/img/response.svg'
import './responseSuccess.scss'

const FormSuccess = () => {


    return (
        <div className="response_sent">
            <h3> Thank you for your response. <br></br> I will get back to you soon! </h3>
            <img src={response} alt="respond" ></img>           
        </div>
    )
}

export default FormSuccess
