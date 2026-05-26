import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Interior from "../components/Interior";

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