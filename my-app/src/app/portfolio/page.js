import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";


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