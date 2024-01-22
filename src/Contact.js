import React, { useLayoutEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gsap from "gsap";
import './App.css'


function Contact() {

    useLayoutEffect(() => {
        gsap.to(".header", {opacity:1, duration:4, delay:1});
        gsap.to(".contact_par", {opacity:1, duration:4, delay:2});   
    },[])

    const [state, handleSubmit] = useForm("mwkyoobj");
    if (state.succeeded) {
        return (
        <div className='alert' >
        <p className='alert_par'>Ваша заявка принята! </p>
        <p className='alert_par'>Я отвечу Вам в течение 24 часов. Благодарю!</p>
        </div>
        )
    }



    return(
    <div>
        <div className="head">
            <h1 className="header">КОНТАКТЫ</h1>
        </div>
        <div className='cont'>
            <img className='contact_image' src="https://images.unsplash.com/photo-1594999888832-c29c6519e710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80" alt="hands"/>
                <div className='contact_par'>
                    <p className='cont_par'>Буду рада стать Вашим фотографом и создать  вместе маленькую историю!</p>
                    <form onSubmit={handleSubmit}>
                        <label className='input_par' htmlFor="email">
                                 Ваш Email
                        </label>
                        <input className='text_input' required
                            id="email"
                            type="email" 
                            name="email"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
        
                        <label className='input_par' htmlFor="text">
                                 Опишите планируемое событие
                        </label>
                        <input className='text_input' required
                            id="text"
                            type="text" 
                            name="text"
                        />
                        <ValidationError 
                            prefix="Text" 
                            field="text"
                            errors={state.errors}
                        />
        
                        <button className='input_btn' type="submit" disabled={state.submitting}>
                        ОТПРАВИТЬ ЗАЯВКУ
                        </button>
                    </form>
                </div>
        </div>
    </div>
    )
}
export default Contact;