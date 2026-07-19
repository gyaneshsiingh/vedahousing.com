import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'Consulting Services | VedaHousing',
    description: 'Expert real estate and property consulting services by VedaHousing.',
};

const ConsultingPage = () => {
    return (
        <main>
            <Header />
            <div className="pt-32 pb-20 px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Consulting Services</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Our consulting services page is currently under construction. Please check back soon for updates on our expert real estate advisory services.
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default ConsultingPage;
