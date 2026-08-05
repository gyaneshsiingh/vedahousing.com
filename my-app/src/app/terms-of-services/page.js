import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'Terms of Services | VedaHousing',
    description: 'Terms of Services for VedaHousing.',
};

const TermsOfServicePage = () => {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-page-inner">
                    <div className="legal-page-icon">📋</div>
                    <h1 className="legal-page-title">Terms of Services</h1>
                    <p className="legal-page-subtitle">Last updated: August 2025</p>
                    <div className="legal-page-card">
                        <p className="legal-page-body">
                            Our terms of service are currently being updated. By using Vedahousing, you agree to use our platform for lawful purposes only.
                        </p>
                        <p className="legal-page-body">
                            If you have any questions about our terms in the meantime, please contact us at <a href="mailto:vedahousing@gmail.com" className="legal-page-link">vedahousing@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default TermsOfServicePage;
