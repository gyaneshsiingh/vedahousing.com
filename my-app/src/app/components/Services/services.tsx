import Image from "next/image"
import Link from "next/link";
import { SERVICES_CONSTANTS } from './services.constants';

const Services = () => {
    return (
        <section className="vh-services">
            <div className="vh-services-header">
                <h2 className="vh-services-title">Our Services</h2>
                <p>Comprehensive solutions tailored to bring your architectural and design dreams to life</p>
            </div>

            <div className="vh-services-grid">
                {SERVICES_CONSTANTS.map((service, index) => (
                    <Link href={service.href} key={index} className="vh-service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default Services;
