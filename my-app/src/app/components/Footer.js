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
                        <span className="vh-footer-logo">Vedahousing</span>
                        <p className="vh-footer-tagline">
                            Transforming spaces and creating exceptional real estate experience  since 2020.
                        </p>
                    </div>


                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Services</h3>
                        <ul className="vh-footer-nav-list">
                            <li><Link href="/properties">Real Estate</Link></li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Consulting
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20looking%20for%20property%20consulting%20in%20Varanasi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Interior Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Architecture
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Company</h3>
                        <ul className="vh-footer-nav-list">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/properties">Portfolio</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Legal</h3>
                        <ul className="vh-footer-nav-list">
                            <li><Link href="/about">Privacy Policy</Link></li>
                            <li><Link href="/properties">Terms of Services</Link></li>
                            <li><Link href="/contact">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="vh-footer-divider">
                    {/* hhh */}
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

