import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./footer";
import Header from "./header";
import MobileMenu from "./MobileMenu";
import '../util/i18n'
import 'animate.css';
import Head from "next/head";

const Layout = ({
    children,
    parent,
    sub,
    subChild,
    noBreadcrumb,
    headerStyle,
    parentURL,
    title
}) => {
    const [isToggled, setToggled] = useState(false);
    const toggleClick = () => {
        setToggled(!isToggled);
        isToggled
            ? document
                .querySelector("body")
                .classList.remove("mobile-menu-active")
            : document
                .querySelector("body")
                .classList.add("mobile-menu-active");
    };

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="./assets/imgs/favicon/16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./assets/imgs/favicon/16.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./assets/imgs/favicon/16.png" />
            </Head>
            {isToggled && <div className="body-overlay-1" onClick={toggleClick}></div>}
            <Header headerStyle={headerStyle} isToggled={isToggled} toggleClick={toggleClick} />
            <MobileMenu isToggled={isToggled} toggleClick={toggleClick} />
            <main className="main">
                <Breadcrumb title={title} parent={parent} parentURL={parentURL} sub={sub} subChild={subChild} noBreadcrumb={noBreadcrumb} />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
