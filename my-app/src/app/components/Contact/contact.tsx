import React from "react";
import Image from "next/image";
import { ContactItemType } from "./contact.type";
import { CONTACT_INFO } from "./contact.constant";
import "./contact.modules.css"

const ContactCTA = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();

        const element = document.querySelector(href);

        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };


    return (
        <section className="vh-cta-section" id="contact">
            <div className="vh-cta-container">
                <div className="vh-cta-header">
                    <h2 className="vh-cta-title">
                        Ready To Start Your Project?
                    </h2>
                    <p className="vh-cta-subtitle">
                        Get in touch with our expert team today and let's bring your vision to life with precision and luxury.
                    </p>
                </div>
                <div className="vh-cta-grid">
                    {CONTACT_INFO.map((contact: ContactItemType, index: number) => {
                        const Tag = contact.href ? "a" : "div";

                        return (
                            <Tag
                                key={index}
                                className="vh-cta-card"
                                href={contact.href || undefined} >

                                <div className="vh-cta-card-icon">
                                    <Image
                                        src={contact.icon}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <h3 className="vh-cta-card-label">
                                    {contact.label}
                                </h3>
                                <p className="vh-cta-card-value">{contact.value}</p>
                            </Tag>
                        )
                    })}
                </div>
                <div className="vh-cta-action">
                    <a
                        href="https://wa.me/919455664970?text=Hi%20Vedahousing%2C%20I%20would%20like%20a%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vh-cta-btn"
                    >
                        Schedule A Consultation
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA;