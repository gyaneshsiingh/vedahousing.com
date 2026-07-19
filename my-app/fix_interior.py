with open('src/app/components/Interior/interior.tsx', 'r') as f:
    content = f.read()

content = content.replace('                    <div className="vh-services-grid vh-services-grid-interior">', 
                          '''                <div className="vh-approach-grid">
                    {INTERIOR_CONSTANTS.map((interior, index) => (
                        <div key={index} className="vh-approach-card">
                            <div className="vh-approach-image">
                                <Image
                                    src={interior.icon}
                                    alt={interior.desc}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="vh-approach-label">
                                <h3>{interior.title}</h3>
                                <p>{interior.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            
            <section className="vh-design-styles">
                <div className="vh-design-styles-header">
                    <h2 className="vh-design-styles-title">
                        Design Styles
                    </h2>
                    <p className="vh-design-styles-desc">
                        From contemporary minimalism to warm modernism, we specialize in creating spaces that resonate with your aesthetic.
                    </p>
                </div>

                <div className="vh-design-styles-grid">
                    {STYLE_CONSTANTS.map((style, index) => (
                        <div key={index} className="vh-style-card">
                            <div className="vh-style-img-container">
                                <Image
                                    src={style.image}
                                    alt="style image"
                                    fill
                                    className="vh-style-img" />

                            </div>

                            <div className="vh-style-text-content">
                                <h3 className="vh-style-card-title">
                                    {style.title}
                                </h3>
                                <p className="vh-style-card-desc">
                                    {style.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="vh-cta-section" id="schedule-consultation">
                <div className="vh-cta-container">
                    <div className="vh-cta-header">
                        <h2 className="vh-cta-title">
                            Ready To Transform Your Space?
                        </h2>
                        <p className="vh-cta-subtitle">
                            Schedule a consultation with our interior design team to discuss your vision and explore possibilities.
                        </p>
                    </div>

                    <div className="vh-cta-action">
                        <a
                            href="https://wa.me/919455664970?text=Hi%2C%20I'd%20like%20a%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vh-cta-btn"
                        >
                            BOOK YOUR CONSULTATION
                        </a>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Interior;
''')

# truncate everything after the first replacement to avoid duplicates since the end of the file is included
content = content.split('                <div className="vh-approach-grid">')[0] + '''                <div className="vh-approach-grid">
                    {INTERIOR_CONSTANTS.map((interior, index) => (
                        <div key={index} className="vh-approach-card">
                            <div className="vh-approach-image">
                                <Image
                                    src={interior.icon}
                                    alt={interior.desc}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="vh-approach-label">
                                <h3>{interior.title}</h3>
                                <p>{interior.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            
            <section className="vh-design-styles">
                <div className="vh-design-styles-header">
                    <h2 className="vh-design-styles-title">
                        Design Styles
                    </h2>
                    <p className="vh-design-styles-desc">
                        From contemporary minimalism to warm modernism, we specialize in creating spaces that resonate with your aesthetic.
                    </p>
                </div>

                <div className="vh-design-styles-grid">
                    {STYLE_CONSTANTS.map((style, index) => (
                        <div key={index} className="vh-style-card">
                            <div className="vh-style-img-container">
                                <Image
                                    src={style.image}
                                    alt="style image"
                                    fill
                                    className="vh-style-img" />

                            </div>

                            <div className="vh-style-text-content">
                                <h3 className="vh-style-card-title">
                                    {style.title}
                                </h3>
                                <p className="vh-style-card-desc">
                                    {style.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="vh-cta-section" id="schedule-consultation">
                <div className="vh-cta-container">
                    <div className="vh-cta-header">
                        <h2 className="vh-cta-title">
                            Ready To Transform Your Space?
                        </h2>
                        <p className="vh-cta-subtitle">
                            Schedule a consultation with our interior design team to discuss your vision and explore possibilities.
                        </p>
                    </div>

                    <div className="vh-cta-action">
                        <a
                            href="https://wa.me/919455664970?text=Hi%2C%20I'd%20like%20a%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vh-cta-btn"
                        >
                            BOOK YOUR CONSULTATION
                        </a>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Interior;
'''

with open('src/app/components/Interior/interior.tsx', 'w') as f:
    f.write(content)
