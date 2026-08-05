import React from "react";
import Link from "next/link";
import "./footer.modules.css";
import {
    FOOTER_TAGLINE,
    FOOTER_BOTTOM_META,
    SERVICES_NAV,
    COMPANY_NAV,
    LEGAL_NAV,
} from "./footer.constants";
import { NavSection } from "./footer.type";

const Footer = () => {
    const year = new Date().getFullYear();

    const renderNavSection = (section: NavSection) => (
        <div className="vh-footer-col">
            <h3 className="vh-footer-col-heading">{section.title}</h3>
            <ul className="vh-footer-nav-list">
                {section.items.map((item, index) => (
                    <li key={index}>
                        {item.isExternal ? (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link href={item.href}>{item.label}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="vh-footer" id="contact">
            <div className="vh-footer-inner">
                <div className="vh-footer-grid">
                    {/* Brand */}
                    <div className="vh-footer-brand">
                        <span className="vh-footer-logo">Vedahousing</span>
                        <p className="vh-footer-tagline">{FOOTER_TAGLINE}</p>
                    </div>

                    {/* Navigation Columns */}
                    {renderNavSection(SERVICES_NAV)}
                    {renderNavSection(COMPANY_NAV)}
                    {renderNavSection(LEGAL_NAV)}
                </div>

                <div className="vh-footer-divider" />

                <div className="vh-footer-bottom">
                    <span>© {year} Vedahousing. All rights reserved.</span>
                    <br />
                    <span className="vh-footer-bottom-meta">
                        {FOOTER_BOTTOM_META}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
