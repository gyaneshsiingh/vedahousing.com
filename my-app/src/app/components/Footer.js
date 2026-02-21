import React from "react";

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="vh-footer" id="contact">
            <div className="vh-footer-inner">
                <span>© {year} Vedahousing. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
