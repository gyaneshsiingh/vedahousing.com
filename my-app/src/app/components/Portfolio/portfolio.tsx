import React from "react";
import Image from "next/image";
import { AnimatedStat } from "../Stats/stats"
import "./portfolio.modules.css";

const PORTFOLIO_DATA = {
    name: "Deen Dayal Singh",
    roles: ["Founder", "Structural Engineer"],
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
    imageSrc: "/image.webp"
};


const Portfolio = () => {
    return (
        <section className="vh-portfolio-section" id="portfolio">
            <div className="vh-portfolio-main">
                <div className="vh-portfolio-header">
                    <h2 className="vh-portfolio-maintitle">
                        Behind The Work
                    </h2>
                    <p className="vh-portfolio-subtitle">
                        A passionate architect and designer dedicated to creating thoughtful, functional spaces that inspire and stand the test of time.
                    </p>
                </div>

                <div className="vh-portfolio-grid">
                    <div className="vh-portfolio-image-container">
                        <div className="vh-portfolio-image-wrapper">
                            <Image
                                src={PORTFOLIO_DATA.imageSrc}
                                alt={PORTFOLIO_DATA.name}
                                width={500}
                                height={600}
                                className="vh-portfolio-img"
                            />
                        </div>

                        <div className="vh-portfolio-badge">
                            <AnimatedStat end={PORTFOLIO_DATA.yearsExperience} suffix="+" />
                            <span className="vh-portfolio-badge-text">Years Of Experience</span>
                        </div>
                    </div>

                    <div className="vh-portfolio-content">
                        <h1 className="vh-portfolio-name">
                            {PORTFOLIO_DATA.name}
                        </h1>
                        <div className="vh-portfolio-roles">
                            {PORTFOLIO_DATA.roles.map((role, index) => (
                                <span key={index} className="vh-portfolio-role-tag">{role}</span>
                            ))}
                        </div>

                        <div className="vh-portfolio-description">
                            {PORTFOLIO_DATA.description.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>

                        <div className="vh-portfolio-expertise">
                            <h4 className="vh-portfolio-expertise-heading">AREAS OF EXPERTISE</h4>
                            <div className="vh-portfolio-pills">
                                {PORTFOLIO_DATA.expertise.map((item, index) => (
                                    <span key={index} className="vh-portfolio-pill">{item.label}</span>
                                ))}
                            </div>
                        </div>

                        <div className="vh-portfolio-actions">
                            <a href="https://www.linkedin.com/in/deen-dayal-singh-72b76526b/" target="_blank" rel="noreferrer" className="vh-portfolio-btn-linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#0a66c2">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>LinkedIn Profile</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
