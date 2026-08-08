"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ContactItemType } from "./contact.type";
import { CONTACT_INFO } from "./contact.constant";
import "./contact.modules.css"

import Appoint from "../Appointment/Appoint";

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
    const [openAppointment, setOpenAppointment] = useState(false);

    useEffect(() => {
        if (openAppointment) {
            const scrollY = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.width = "";
                document.body.style.overflow = "";

                window.scrollTo(0, scrollY);
            };
        }
    }, [openAppointment]);



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
                    <button

                        className="vh-primary-btn1"
                        onClick={(e) => setOpenAppointment(true)}
                    >
                        Book Your Appointment
                    </button>

                </div>
            </div>
            {openAppointment && (
                <div className="vh-appoint-overlay">
                    <div className="vh-appoint-model">
                        <button className="vh-close-btn" onClick={(e) => setOpenAppointment(false)}>
                            ✕
                        </button>
                        <Appoint
                            onClose={() => {
                                // console.log("Parent onClose called");
                                setOpenAppointment(false);
                            }}
                        />
                    </div>
                </div>
            )}

        </section >
    )
}

export default ContactCTA;