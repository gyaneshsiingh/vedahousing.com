import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Interior from "../components/Interior/interior";

export const metadata = {
    title: 'Interior Design Services',
    description: 'Transform your living spaces with Vedahousing\'s premium interior design services in Varanasi. Get personalized, modern, and aesthetic home interiors.',
};

const InteriorPage = () => {
    return (
        <main>
            <Header />

            <div className="pt-24">
                <Interior />
            </div>

            <Footer />
        </main>
    )
}

export default InteriorPage;