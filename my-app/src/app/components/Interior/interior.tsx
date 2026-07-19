import React from "react";
import Image from "next/image";
import { INTERIOR_CONSTANTS, STYLE_CONSTANTS } from './interior.constants';
import Profile from "../Profile/profile";

const Interior = () => {

    return (
        <>
            <section className="vh-hero">
                <div className="vh-hero-inner">
                    <div className="vh-hero-content">
                        <span className="vh-eyebrow">
                            Elevating Spaces, Redefining Style.
                        </span>
                        <h1 className="vh-title">
                            Elevating Everyday <br /> Living
                        </h1>
                        <p className="vh-subtitle">
                            We design interiors that reflect your personality, elevate your lifestyle,
                            and stand the test of time.
                        </p>
                    </div>

                    <div className="vh-hero-visual" aria-hidden="true">
                        <div className="vh-card-main">
                            <div className="vh-card-image-wrapper">
                                <Image
                                    src="/cen.webp"
                                    alt="center-image"
                                    className="vh-card-img-fit"
                                    width={520}
                                    height={400}
                                    priority
                                    quality={80}
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="vh-approach-section">
                <div className="vh-approach-inner">
                    <h1 className="vh-approach-title">
                        Our Design Approach
                    </h1>
                    <span className="vh-approach-label">A collaborative journey that transforms your vision into reality through refined design and precise execution.</span>


                    <div className="vh-approach-grid">
                        {INTERIOR_CONSTANTS.map((interior, index) => (
                            <div key={index} className="vh-approach-card">
                                <div className="vh-approach-image">
                                    <Image
                                        src={interior.icon}
                                        alt={interior.desc}
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="vh-approach-label">
                                    <h3 className="vh-approach-label-title">{interior.title}</h3>
                                    <p className="vh-approach-label-desc">{interior.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="vh-design-styles">
                <div className="vh-design-styles-header">
                    <h2 className="vh-design-styles-title">
                        Design Styles
                    </h2>
                    <p className="vh-design-styles-desc">
                        From contemporary minimalism to warm modernism, we specialize in creating spaces that resonate with your aesthetic.
                    </p>
                </div>

                <div className="vh-design-styles-grid">
                    {STYLE_CONSTANTS.map((style, index) => (
                        <div key={index} className="vh-style-card">
                            <div className="vh-style-img-container">
                                <Image
                                    src={style.image}
                                    alt="style image"
                                    fill
                                    className="vh-style-img" />

                            </div>

                            <div className="vh-style-text-content">
                                <h3 className="vh-style-card-title">
                                    {style.title}
                                </h3>
                                <p className="vh-style-card-desc">
                                    {style.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <Profile />
            </section>



            <section className="vh-cta-section" id="schedule-consultation">
                <div className="vh-cta-container">
                    <div className="vh-cta-header">
                        <h2 className="vh-cta-title">
                            Ready To Transform Your Space?
                        </h2>
                        <p className="vh-cta-subtitle">
                            Schedule a consultation with our interior design team to discuss your vision and explore possibilities.
                        </p>
                    </div>

                    <div className="vh-cta-action">
                        <a
                            href="https://wa.me/919455664970?text=Hi%2C%20I'd%20like%20a%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vh-cta-btn"
                        >
                            BOOK YOUR CONSULTATION
                        </a>
                    </div>
                </div>


            </section>

        </>

    );
};

export default Interior;