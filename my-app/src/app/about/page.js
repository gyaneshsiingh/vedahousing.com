import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Link from "next/link";

export const metadata = {
    title: 'About Us | VedaHousing',
    description: 'Learn about VedaHousing — Varanasi\'s trusted property & interior design experts since 2020.',
};

const AboutPage = () => {
    return (
        <div className="vh-app">
            <Header />
            <main className="about-page-wrapper">
                <div className="about-hero">
                    <div className="about-hero-inner">
                        <span className="about-badge">About Vedahousing</span>
                        <h1 className="about-hero-title">Transforming Real Estate & Interior Architecture in Varanasi</h1>
                        <p className="about-hero-subtitle">
                            Since 2020, Vedahousing has been empowering homebuyers, renters, and property owners in Varanasi with verified listings, transparent deals, and world-class interior design.
                        </p>
                    </div>
                </div>

                <div className="about-content-container">
                    {/* Stats section */}
                    <div className="about-stats-grid">
                        <div className="about-stat-card">
                            <span className="about-stat-number">500+</span>
                            <span className="about-stat-label">Happy Clients</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="about-stat-number">200+</span>
                            <span className="about-stat-label">Verified Listings</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="about-stat-number">5+</span>
                            <span className="about-stat-label">Years of Excellence</span>
                        </div>
                        <div className="about-stat-card">
                            <span className="about-stat-number">100%</span>
                            <span className="about-stat-label">Transparency & Trust</span>
                        </div>
                    </div>

                    {/* Mission & Features */}
                    <div className="about-sections-grid">
                        <div className="about-info-card">
                            <div className="about-icon">🏠</div>
                            <h2>Real Estate Expertise</h2>
                            <p>
                                Finding the right home in Varanasi should be simple and stress-free. We curate genuine 2BHK, 3BHK flats, plots, and commercial properties with verified documentation and zero hidden charges.
                            </p>
                        </div>

                        <div className="about-info-card">
                            <div className="about-icon">🎨</div>
                            <h2>Interior Architecture</h2>
                            <p>
                                From modern modular kitchens to luxurious living spaces, our interior design services combine contemporary aesthetics with functional craftsmanship tailored specifically to your lifestyle.
                            </p>
                        </div>

                        <div className="about-info-card">
                            <div className="about-icon">🤝</div>
                            <h2>Customer-First Commitment</h2>
                            <p>
                                We prioritize relationships over transactions. Whether you are buying your first home or renovating your existing space, our dedicated team guides you through every step.
                            </p>
                        </div>
                    </div>

                    {/* CTA section */}
                    <div className="about-cta-banner">
                        <h2>Ready to Find Your Dream Property or Redesign Your Home?</h2>
                        <p>Get in touch with our expert team today for personalized assistance.</p>
                        <div className="about-cta-buttons">
                            <a
                                href="https://wa.me/919455664970?text=Hi%20Vedahousing%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-btn-primary"
                            >
                                💬 Chat on WhatsApp
                            </a>
                            <Link href="/contact" className="about-btn-secondary">
                                Contact Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
