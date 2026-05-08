import React from "react";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="vh-footer" id="contact">
            <div className="vh-footer-inner">
                <div className="vh-footer-grid">
                    {/* NAP – critical for local SEO */}
                    <div className="vh-footer-brand">
                        <span className="vh-footer-logo">Vedahousing.com</span>
                        <address className="vh-footer-address">
                            Varanasi, Uttar Pradesh, India – 221010<br />
                            <a href="tel:+919455664970" className="vh-footer-phone">+91 94556 64970</a>
                        </address>
                        <p className="vh-footer-tagline">
                            Verified flats &amp; property in Varanasi.<br />
                            Interior design &amp; consulting services.
                        </p>
                    </div>

                    {/* Internal links help Google crawl services */}
                    <nav className="vh-footer-nav" aria-label="Footer navigation">
                        <h3 className="vh-footer-nav-heading">Services</h3>
                        <ul className="vh-footer-nav-list">
                            <li><Link href="/properties">Flats &amp; Property in Varanasi</Link></li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Interior Design Varanasi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20looking%20for%20property%20consulting%20in%20Varanasi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Property &amp; Architecture Consulting
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Talk to an Expert
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="vh-footer-bottom">
                    <span>© {year} Vedahousing. All rights reserved.</span>
                    <span className="vh-footer-bottom-meta">Varanasi&apos;s trusted property &amp; interior design experts</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

