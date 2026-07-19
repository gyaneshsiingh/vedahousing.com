import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Portfolio from "../components/Portfolio/portfolio";

import Stats from "../components/Stats/stats";

export const metadata = {
    title: 'Architecture & Consulting Portfolio',
    description: 'Explore Vedahousing\'s portfolio of architecture and consulting projects in Varanasi. See our high-quality designs and previous work.',
};

const Port = () => {
    return (
        <main>
            <Header />

            <div className="pt-24">
                <Portfolio />

            </div>

            <Footer />

        </main>
    )
}

export default Port;