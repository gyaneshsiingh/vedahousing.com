import React from "react";
import Image
    from "next/image";
const Interior = () => {
    const Interiors = [
        {
            title: " Concept Development ",
            desc: "It all begins with you. We take the time to understand your lifestyle and dreams to create a space that feels truly yours.",
            icon: "/idea.png"
        },
        {
            title: "Material Selection",
            desc: "We handpick materials, finishes, and furnishings to make your space feel rich, layered, and full of character.",
            icon: "/paint-plate.png"
        },
        {
            title: "Precise Execution",
            desc: "We handle every detail with care, ensuring your project is completed smoothly, on time, and within budge",
            icon: "/ruler.png"
        }
    ];

    return (
        <>
            <section className="vh-interior-hero">
                <div className="vh-interior-hero-content">
                    <span className="vh-interior-label">
                        Elevating Spaces, Redefining Style.
                    </span>
                    <h1 className="vh-interior-title">
                        Elevating Everyday <br /> Living
                    </h1>

                    <p className="vh-interior-desc">
                        We design interiors that reflect your personality, elevate your lifestyle,
                        and stand the test of time.
                    </p>

                    <div className="vh-interior-btn">
                        <a href="#contact" className="vh-btn-primary">
                            Start Your Project &rarr;
                        </a>
                    </div>
                </div>
            </section>

            <section className="vh-approach-section">
                <div className="vh-approach-inner">
                    <h1 className="vh-approach-title">
                        Our Design Approach
                    </h1>
                    <span className="vh-approach-label">A collaborative journey that transforms your vision into reality through refined design and precise execution.</span>
                </div>

                <div className="vh-approach-grid">
                    {Interiors.map((interior, index) => (
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