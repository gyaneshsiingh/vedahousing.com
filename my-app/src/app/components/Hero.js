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
                        Discover  <br /> <span className='span-and'>&</span> <br /> Design home
                        <span className="vh-title-highlight"> design that fit your life.</span>
                    </h1>
                    <p className="vh-subtitle">
                        Browse verified listings, compare real-time prices, and book virtual or in-person tours in just a few taps.
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

                    <p className="vh-meta">
                        Varanasi&apos;s trusted property dealer for flats, apartments &amp; houses ·
                        Interior designer &amp; architecture consulting · New listings every week
                    </p>
                </div>

                <div className="vh-hero-visual" aria-hidden="true">
                    <div className="vh-card-main">
                        <div className="vh-card-image-wrapper">
                            <Image
                                src="/image copy 3.png"
                                alt="Buy & Rent Apartment in Varanasi"
                                className="vh-card-img-fit"
                                width={520}
                                height={160}
                                priority
                                quality={80}
                            />
                        </div>
                        <div className="vh-card-body">
                            <div className="vh-card-row">
                                <h3 className="vh-card-title"> Buy & Rent Apartment</h3>
                            </div>
                            <p className="vh-card-location">Varanasi </p>
                            <div className="vh-chip-row">
                                <span className="vh-chip">Verified Listings</span>
                                <span className="vh-chip">Zero hidden charges</span>
                                <span className="vh-chip"> Book tours in one tap</span>
                            </div>
                        </div>
                    </div>

                    <div className="vh-card-stats">
                        <div className="vh-stat-card vh-stat-card-interior">
                            <div className="vh-card-image-interior">
                                <Image
                                    src="/image.png"
                                    alt="Interior Design Services Varanasi"
                                    className="vh-card-img-fit"
                                    width={240}
                                    height={110}
                                    loading="lazy"
                                    quality={75}
                                />
                            </div>
                            <div className="vh-stat-content">
                                <h3 className="vh-stat-value">Interior Design</h3>
                                <p className="vh-stat-meta">Spaces designed around you.</p>
                                <p className="vh-stat-meta">No hidden charges</p>
                            </div>
                        </div>

                        <div className="vh-stat-card vh-stat-card-interior">
                            <div className="vh-card-image-consulting">
                                <Image
                                    src="/image copy.png"
                                    alt="Architecture Consulting Varanasi"
                                    className="vh-card-img-fit"
                                    width={240}
                                    height={110}
                                    loading="lazy"
                                    quality={75}
                                />
                            </div>
                            <div className="vh-stat-content">
                                <h3 className="vh-stat-value">Consulting</h3>
                                <p className="vh-stat-meta">Architecture</p>
                                <p className="vh-stat-meta">High quality designs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;