import React from "react";

const Header = () => {
    return (
        <header className='vh-header'>
            <div className='vh-header-inner'>
                <div className='vh-logo'>
                    <img src="/veda_logo.png" alt="vedahousing" className="vh-logo-image" />
                </div>

                <nav className="vh-nav">
                    <a href="#explore" className='vh-nav-link'>Explore</a>
                    <a href="#contact" className='vh-nav-link'>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;