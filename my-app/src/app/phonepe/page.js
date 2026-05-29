import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Phonepe from "../components/Phonepe";


const Port = () => {
    return (
        <main>
            <Header />

            <div className="pt-24">
                <Phonepe />
            </div>

            <Footer />

        </main>
    )
}

export default Port;