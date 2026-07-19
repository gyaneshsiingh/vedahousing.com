import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export const metadata = {
    title: 'Architecture Services | VedaHousing',
    description: 'Premium architecture and structural design services by VedaHousing.',
};

const ArchitecturePage = () => {
    return (
        <main>
            <Header />
            <div className="pt-32 pb-20 px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Architecture</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Our architecture services page is currently under construction. Please check back soon to see our premium architectural designs.
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default ArchitecturePage;
