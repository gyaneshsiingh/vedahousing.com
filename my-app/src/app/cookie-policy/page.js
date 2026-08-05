import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'Cookie Policy | VedaHousing',
    description: 'Cookie Policy for VedaHousing.',
};

const CookiePolicyPage = () => {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-page-inner">
                    <div className="legal-page-icon">🍪</div>
                    <h1 className="legal-page-title">Cookie Policy</h1>
                    <p className="legal-page-subtitle">Last updated: August 2025</p>
                    <div className="legal-page-card">
                        <p className="legal-page-body">
                            Our cookie policy is currently being updated. We use cookies to enhance your browsing experience and provide personalized content.
                        </p>
                        <p className="legal-page-body">
                            If you have any questions about our use of cookies in the meantime, please contact us at <a href="mailto:vedahousing@gmail.com" className="legal-page-link">vedahousing@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default CookiePolicyPage;
