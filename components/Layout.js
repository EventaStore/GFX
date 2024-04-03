import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./footer";
import Header from "./header";
import MobileMenu from "./MobileMenu";
import '../util/i18n'
import 'animate.css';

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
