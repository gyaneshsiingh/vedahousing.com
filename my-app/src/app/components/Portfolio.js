import React from "react";
import Image from "next/image";


const PROFILE_DATA = {
    name: "Deen Dayal Singh",
    title: "Structural Engineer",
    description: [
        "Deen Dayal Singh is a highly experienced structural engineer with over 28 years of expertise in construction, structural design, and real estate development. With a strong foundation in engineering principles and on-site execution, he has successfully delivered a wide range of residential, commercial, and infrastructure projects.",

        "Specializing in structural planning, AutoCAD design, and project execution, he ensures safety, durability, and efficiency in every project. His extensive experience enables him to transform architectural concepts into structurally sound and reliable developments while maintaining cost-effectiveness and timely delivery."
    ],
    expertise: [
        { label: "Structural Design & Analysis" },
        { label: "Construction Planning & Execution" },
        { label: "AutoCAD & Technical Drawings" },
        { label: "Real Estate Development" },
        { label: "Site Supervision & Project Management" }
    ],
    yearsExperience: 28,
    imageSrc: "/image.png"

};


const Profile = () => {
    return (
        <section className="vh-profile-section" id="portfolio">
            <div className="vh-profile-header">
                <h2 className="vh-profile-maintitle">
                    Behind The Work
                </h2>
                <p className="vh-profile-subtitle">
                    A passionate architect and designer dedicated to creating thoughtful, functional spaces that inspire and stand the test of time.
                </p>
            </div>

            <div className="vh-profile-grid">
                <div className="vh-profile-image-container">
                    <div className="vh-profile-image-wrapper">
                        <Image
                            src={PROFILE_DATA.imageSrc}
                            alt={PROFILE_DATA.name}
                            width={500}
                            height={600}
                            className="vh-profile-img"
                        />
                    </div>

                    <div className="vh-profile-badge">
                        <span className="vh-badge-number">
                            {PROFILE_DATA.yearsExperience}+
                        </span>
                        <span className="vh-badge-text">Years Of Experience</span>
                    </div>
                </div>

                <div className="vh-profile-content">
                    <h1 className="vh-profile-name">
                        {PROFILE_DATA.name}
                    </h1>
                    <h3 className="vh-profile-title">
                        {PROFILE_DATA.title}
                    </h3>

                    <div className="vh-profile-description">
                        {PROFILE_DATA.description.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>

                    <div className="vh-profile-expertise">
                        <h4 className="vh-profile-expertise-heading">AREAS OF EXPERTISE</h4>
                        <div className="vh-expertise-pills">
                            {PROFILE_DATA.expertise.map((item, index) => (
                                <span key={index} className="vh-pill">{item.label}</span>
                            ))}
                        </div>
                    </div>

                    <div className="vh-profile-actions">
                        <a href="https://www.linkedin.com/in/deen-dayal-singh-72b76526b/" target="_blank" rel="noreferrer" className="vh-btn-linkedin">LinkedIn Profile</a>
                        <a href="https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services" className="vh-btn-get-touch">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
