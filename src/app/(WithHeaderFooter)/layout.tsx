import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";



export default function RootLayout({
    children,
}: Readonly<{
    children: any;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}