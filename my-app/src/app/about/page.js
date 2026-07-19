import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'About Us | VedaHousing',
    description: 'Learn more about VedaHousing, your trusted property & interior design experts in Varanasi.',
};

const AboutPage = () => {
    return (
        <main>
            <Header />
            <div className="pt-32 pb-20 px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Learn more about our journey, our team, and our mission at VedaHousing. This page is currently being updated.
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default AboutPage;
