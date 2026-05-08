import Image from "next/image"

const Services = () => {
    const services = [
        {
            title: "Real Estate",
            desc: "Premium property solutions for buying, selling, & renting.",
            image: "/card-image.png",
            icon: "/home.png"
        },
        {
            title: "Interior Design",
            desc: "Stunning interior space blend aesthetics and functionality.",
            image: "/inter.png",
            icon: "/int.png"
        },
        {
            title: "Consulting",
            desc: "Strategic guidance for property development.",
            image: "/consulting.png",
            icon: "/cons.png"
        },
        {
            title: "Architecture",
            desc: "Innovative architectural design creating timeless structures.",
            image: "/architecture.png",
            icon: "/arc.png"
        }

    ];
    return (
        <section className="vh-services">
            <div className="vh-services-header">
                <h2 className="vh-services-title">Our Services</h2>
                <p>Comprehensive solutions tailored to bring your architectural and design dreams to life</p>
            </div>

            <div className="vh-services-grid">
                {services.map((service, index) => (
                    <div key={index} className="vh-service-card">
                        <div className="vh-service-image-wrapper">
                            <Image src={service.image} alt={service.title} fill className="vh-service-img" />
                            <div className="vh-service-icon-overlay">
                                <Image src={service.icon} alt={service.title} width={30} height={30} />
                            </div>
                        </div>
                        <div className="vh-service-content">
                            <h3 className="vh-service-card-title">{service.title}</h3>
                            <p className="vh-service-card-desc">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Services;
