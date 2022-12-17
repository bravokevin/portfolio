import React, { useRef, useState } from 'react';
//@ts-ignore
import emailjs from '@emailjs/browser';
import { contactData, formItems } from './ConactData';

import './contact.css';
import ContactInputs from './ContactInputs';
import ContactSocial from './ContactSocial';
import ContactButton from './ContactButton';

const Contact = () => {

    //prevent the user submit twice the information
    const [isMessageSent, setMessageSent] = useState(false);
    const [isSendingMessage, setisSendingMessage] = useState(false);

    const form = useRef();

    const validateInputs = () => {
        //@ts-ignore
        const form: HTMLFormElement = document.forms["contactForm"];
        const email = form["email"].value;
        const subject = form["subject"].value;
        const message = form["message"].value;

        if (email.trim() === "") {
            alert("Email must be filled out")
            return false
        }
        else if (subject.trim() === "") {
            alert("Subject must be filled out")
            return false
        }
        else if (message.trim() === "") {
            alert("Message must be filled out")
            return false
        }
        else {
            return true
        }
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (validateInputs()) {
            setisSendingMessage(true)
            emailjs.sendForm('service_v95a0yb', 'template_03qju3l', form.current, 'YJTcUryrrxQ69EkYz')
                .then(() => {
                    e.target.reset()
                    setisSendingMessage(false)
                    setMessageSent(true)
                }, () => {
                });
            setTimeout(() => {
                setMessageSent(false)
            }, 5000);
        }
    };

    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Let's talk and build the future</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        {contactData.map((info) => {
                            return <ContactSocial {...info} />
                        })}
                    </div>

                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Contact me</h3>
                    <form ref={form as unknown as React.LegacyRef<HTMLFormElement>} onSubmit={sendEmail} className="contact__form" name="contactForm">
                        {formItems.map((info) => {
                            return < ContactInputs {...info} />
                        })}
                        <ContactButton isMessageSent={isMessageSent} isSendingMessage={isSendingMessage} />
                    </form>
                </div>
            </div >
        </section >
    )
}

export default Contact