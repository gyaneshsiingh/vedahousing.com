'use client'
import { NAV_LINKS } from "./header.constant";
import { NavLinkType } from "./header.type";
import Image from "next/image";
import Link from "next/link";
import "./header.modules.css"
import { useState, useEffect } from "react";
import Appoint from "../Appointment/Appoint";
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

    const [openAppointment, setOpenAppointment] = useState(false);

    useEffect(() => {
        if (openAppointment) {
            const scrollY = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.width = "";
                document.body.style.overflow = "";

                window.scrollTo(0, scrollY);
            };
        }
    }, [openAppointment]);

    return (
        <>
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
                        <button

                            className="vh-contact-link"
                            onClick={(e) => setOpenAppointment(true)}
                        >
                            Enquire Now
                        </button>
                    </div>
                    {/* <button className="vh-menu-btn" onClick={(e) => setMenuOpen(!menuOpen)}
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
            )} */}
                </div>

            </header>
            {openAppointment && (
                <div className="vh-appoint-overlay">
                    <div className="vh-appoint-model">
                        <button className="vh-close-btn" onClick={(e) => setOpenAppointment(false)}>
                            X
                        </button>
                        <Appoint
                            onClose={() => {
                                // console.log("Parent onClose called");
                                setOpenAppointment(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )

}

export default Header;