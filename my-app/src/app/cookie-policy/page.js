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
            <div className="pt-32 pb-20 px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Our cookie policy is currently being updated. Check back soon.
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default CookiePolicyPage;
