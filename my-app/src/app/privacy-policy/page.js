import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'Privacy Policy | VedaHousing',
    description: 'Privacy Policy for VedaHousing.',
};

const PrivacyPolicyPage = () => {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-page-inner">
                    <div className="legal-page-icon">🔒</div>
                    <h1 className="legal-page-title">Privacy Policy</h1>
                    <p className="legal-page-subtitle">Last updated: August 2025</p>
                    <div className="legal-page-card">
                        <p className="legal-page-body">
                            Our privacy policy documentation is being finalized. We are committed to protecting your personal information and your right to privacy.
                        </p>
                        <p className="legal-page-body">
                            If you have any questions about our privacy practices in the meantime, please contact us at <a href="mailto:vedahousing@gmail.com" className="legal-page-link">vedahousing@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default PrivacyPolicyPage;
