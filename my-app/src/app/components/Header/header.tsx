'use client'
import { NAV_LINKS } from "./header.constant";
import { NavLinkType } from "./header.type";
import Image from "next/image";
import Link from "next/link";
import "./header.modules.css"
import { useState, useEffect } from "react";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);
    return (
        <header className="vh-header">
            <div className="vh-header-inner">
                <div className="vh-logo vh-logo-desktop">
                    <a href="#home">
                        <Image
                            src="/logo.svg"
                            alt="veda"
                            className="vh-logo-image"
                            width={540}
                            height={180}
                            priority
                        />
                    </a>
                </div>
                <div className="vh-logo-mobile-wrap">
                    <a href="#home">
                        <Image
                            src="/logo.svg"
                            alt="veda"
                            className="vh-logo-image-mobile"
                            width={180}
                            height={75}
                            priority
                        />
                    </a>
                </div>


                <div className="vh-nav-auth vh-nav-desktop" >
                    <nav className="vh-nav">
                        {NAV_LINKS.map((link: NavLinkType) => (
                            <Link key={link.label} href={link.href}
                                className="vh-nav-link"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="vh-contact">
                    <a href="tel:+919455664970" className="vh-contact-link">
                        Enquire Now
                    </a>
                </div>
                <button className="vh-menu-btn" onClick={(e) => setMenuOpen(!menuOpen)}
                    aria-label="Menu">
                    <span className={`vh-menu-icon ${menuOpen ? 'vh-menu-icon-open' : ''}`} />
                </button>
            </div>
            {menuOpen && (
                <div className="vh-mobile-menu" onClick={() => setMenuOpen(false)
                }>
                    <div className="vh-mobile-menu-inner" onClick={e => e.stopPropagation()}>
                        <nav className="vh-mobile-menu-nav">
                            {NAV_LINKS.map((link: NavLinkType) => (
                                <Link key={link.label} href={link.href}
                                    className="vh-mobile-menu-link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;