import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4i5rgx2', 'template_5pwser5', form.current, '5wX6D9775iYmPGJNb')

        e.target.reset()

        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });

      };

    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title">Contacto</h2>
            <span className="section__subtitle">Si estás interesado en contactarte conmigo:</span>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <i class='bx bxs-envelope message-icon'></i>
                        <h4>E-mail</h4>
                        <a href="mailto:kevnicflores96@gmail.com" target="_blank" rel='noreferrer'>Enviame un mail</a>
                    </article>

                    <article className="contact__option">
                        <i class='bx bxl-whatsapp wpp-icon' ></i>
                        <h4>WhatsApp</h4>
                        <a href="https://wa.me/+5491136540666" target="_blank" rel='noreferrer'>Enviame un mensaje</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS*/}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nombre Completo' required />
                    <input type="email" name='email' placeholder='E-Mail' required />
                    <textarea name="message" rows="7" placeholder='Su mensaje..'></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
                </form>

            </div>


        </section>
    );
};

export default Contact;
