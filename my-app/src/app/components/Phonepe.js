import React from "react";
import Image from "next/image";
const Portfolio = () => {
    return (
        // <>
        //     <section className="vh-interior-hero">
        //         <div className="vh-interior-hero-content">
        //             <p className="vh-interior-desc">
        //                 OUR WORK
        //             </p>
        //             <h1 className="vh-interior-title">
        //                 PORTFOLIO
        //             </h1>

        //             <p className="vh-interior-desc">
        //                 Explore our collection of exceptional projects, meet our talented design team, and discover what our clients say about working with us.
        //             </p>
        //         </div>
        //     </section>

        <>
            <section className="vh-featured-project">
                <div className="vh-featured-project-inner">
                    {/* Make sure you have an image in your public folder to use here! */}
                    <Image
                        src="/sbi.jpeg"
                        alt="Contemporary Luxury Living"
                        fill
                        className="vh-featured-image"
                    />

                    {/* The invisible gradient shadow that makes text readable */}
                    <div className="vh-featured-overlay"></div>

                    {/* The Text content at the bottom left */}
                    <div className="vh-featured-content">
                        <span className="vh-featured-label">FEATURED PROJECT</span>
                        <h2 className="vh-featured-title">Contemporary Luxury Living</h2>
                        <p className="vh-featured-location">Beverly Hills, CA</p>
                    </div>
                </div>
            </section>

            <section className="vh-featured-project">
                <div className="vh-featured-project-inner">
                    {/* Make sure you have an image in your public folder to use here! */}
                    <Image
                        src="/axis.jpeg"
                        alt="Contemporary Luxury Living"
                        fill
                        className="vh-featured-image"
                    />

                    {/* The invisible gradient shadow that makes text readable */}
                    <div className="vh-featured-overlay"></div>

                    {/* The Text content at the bottom left */}

                </div>
            </section>




        </>
    )
}

export default Portfolio;