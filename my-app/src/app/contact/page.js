import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

export const metadata = {
    title: 'Contact Us | VedaHousing',
    description: 'Get in touch with Vedahousing for property inquiries, consultations, and interior design services in Varanasi.',
};

export default function ContactPage() {
    return (
        <div className="vh-app">
            <Header />
            <main className="ct-page-wrapper">
                <div className="ct-page-inner">
                    <div className="ct-page-header">
                        <span className="ct-badge">Contact Us</span>
                        <h1 className="ct-page-title">We'd Love to Hear From You</h1>
                        <p className="ct-page-subtitle">
                            Connect with Varanasi's trusted property & interior design experts directly via Phone, WhatsApp, or Email.
                        </p>
                    </div>

                    <div className="ct-grid">
                        {/* Phone */}
                        <div className="ct-channel-card">
                            <div className="ct-icon-box ct-icon-phone">📞</div>
                            <h3>Call Us Direct</h3>
                            <p className="ct-channel-desc">Speak with our consultants for immediate property inquiries.</p>
                            <a href="tel:+919455664970" className="ct-channel-value">+91 9455664970</a>
                            <a href="tel:+919455664970" className="ct-btn ct-btn-phone">
                                Call Now
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="ct-channel-card ct-featured-card">
                            <div className="ct-icon-box ct-icon-wa">💬</div>
                            <span className="ct-popular-badge">Fastest Response</span>
                            <h3>Chat on WhatsApp</h3>
                            <p className="ct-channel-desc">Get instant assistance, property photos, and details on WhatsApp.</p>
                            <a
                                href="https://wa.me/919455664970?text=Hi%20Vedahousing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ct-channel-value"
                            >
                                +91 9455664970
                            </a>
                            <a
                                href="https://wa.me/919455664970?text=Hi%20Vedahousing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ct-btn ct-btn-wa"
                            >
                                Message on WhatsApp
                            </a>
                        </div>

                        {/* Email */}
                        <div className="ct-channel-card">
                            <div className="ct-icon-box ct-icon-email">✉️</div>
                            <h3>Email Us</h3>
                            <p className="ct-channel-desc">Send us your detailed requirements or business proposals.</p>
                            <a href="mailto:vedahousingh59@gmail.com" className="ct-channel-value">
                                vedahousingh59@gmail.com
                            </a>
                            <a href="mailto:vedahousingh59@gmail.com" className="ct-btn ct-btn-email">
                                Send Email
                            </a>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="ct-location-banner">
                        <div className="ct-location-content">
                            <span className="ct-location-icon">📍</span>
                            <div>
                                <h4>Our Office Location</h4>
                                <p>Varanasi, Uttar Pradesh, India — Serving all major areas including Lanka, Mahmoorganj, Sigra, Shivpur & Paharia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
