import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function HomePage ( props) {
    return (
        <div className = "webpage-div">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}