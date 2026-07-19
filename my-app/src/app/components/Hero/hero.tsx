import React from "react";
import Link from "next/link";
import Image from "next/image";



const Hero = () => {

    return (
        <section className="vh-hero">
            <div className="vh-hero-inner">
                <div className="vh-hero-content">
                    <p className="vh-eyebrow">SMART LIVING · VEDAHOUSING</p>
                    <h1 className="vh-title">
                        Discover  <br /> <span className='span-and'>&</span> <br /> Design homes
                        <span className="vh-title-highlight"> that fit your <br /> life.</span>
                    </h1>
                    <p className="vh-subtitle">
                        Varanasi&apos;s premier firm for real estate, interior design, architecture, and consulting. Let us transform your vision into reality.
                    </p>

                    <div className="vh-actions">
                        <Link href="/properties" className="vh-btn vh-btn-primary">
                            Browse homes
                        </Link>
                        <a
                            href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services"
                            className="vh-btn vh-btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Talk to an expert
                        </a>
                    </div>

                </div>

                <div className="vh-hero-visual" aria-hidden="true">
                    <div className="vh-card-main">
                        <div className="vh-card-image-wrapper">
                            <Image
                                src="/card1.webp"
                                alt="Buy & Rent Apartment in Varanasi"
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
    );
};

export default Hero;