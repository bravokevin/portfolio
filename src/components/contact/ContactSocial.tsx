import React from 'react'

interface ContactSocialProp {
    index: number;
    title: string;
    icon: string;
    link: string;
    content: string;
}

const ContactSocial = ({ title, icon, content, link}: ContactSocialProp) => {
  return (
    <div className="contact__card">
    <i className={`bx bx${icon} contact__card-icon`}></i>
    <h3 className="contact__card-title">{title}</h3>
    <span className="contact__card-data">{content}</span>
    <a href={link} className="contact__button" target="blank">Write me{" "}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
</div>
  )
}

export default ContactSocial