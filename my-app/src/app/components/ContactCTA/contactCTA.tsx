import React from "react";
import Image from "next/image";
import { CONTACT_CONSTANTS } from './contactCTA.constants';

const ContactCTA = () => {
  return (
    <section className="vh-cta-section" id="schedule-consultation">
      <div className="vh-cta-container">
        <div className="vh-cta-header">
          <h2 className="vh-cta-title">
            Ready To Start Your Project?
          </h2>
          <p className="vh-cta-subtitle">
            Get in touch with our expert team today and let's bring your vision to life.
          </p>
        </div>
        <div className="vh-cta-grid">
          {CONTACT_CONSTANTS.map((contact, index) => {
            const Tag = contact.href ? "a" : "div";

            return (
              <Tag
                key={index}
                className="vh-cta-card"
                href={contact.href || undefined} >

                <div className="vh-cta-card-icon">
                  <Image
                    src={contact.icon}
                    alt={contact.label}
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
            href="https://wa.me/919455664970?text=Hi%2C%20I'd%20like%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="vh-cta-btn"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA;