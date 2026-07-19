'use client'
import React, { useEffect, useRef, useState } from "react";
import "./profile.modules.css"
import Image from "next/image";
import { PROFILE_DATA } from "./profile.constant";
import { AnimatedStat } from "../Stats/stats";


const Profile = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    const [isRevealed, setIsRevealed] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsRevealed(true);
            }
        }, { threshold: 0.1 });

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="vh-profile-section" id="about" >
            <div className="vh-profile-main">
                <div className="vh-profile-header">
                    <h2 className="vh-profile-maintitle">
                        Behind The Work
                    </h2>
                    <p className="vh-profile-subtitle">
                        A passionate interior designer dedicated to creating elegant, functional spaces that reflect your personality and enhance everyday living.
                    </p>
                </div>

                <div ref={gridRef} className={`vh-profile-grid ${isRevealed ? 'vh-revealed' : ''}`}>
                    <div className="vh-profile-image-container">
                        <div className="vh-profile-image-wrapper">
                            <Image src={PROFILE_DATA.imageSrc} alt={PROFILE_DATA.name} width={500} height={600} className="vh-profile-img" />
                        </div>

                        <div className="vh-profile-badge">
                            <span className="vh-badge-number">
                                <AnimatedStat end={PROFILE_DATA.yearsExperience} suffix="+" />
                            </span>
                            <span className="vh-badge-text">Years Of Experience</span>
                        </div>
                    </div>

                    <div className="vh-profile-content">
                        <h2 className="vh-profile-name">
                            {PROFILE_DATA.name}
                        </h2>
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
                            <a href="https://www.linkedin.com/in/pranjali-dwivedi-2155b0195/" target="_blank" className="vh-btn-linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#0a66c2">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn Profile</a>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;