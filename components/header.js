
import React, { useEffect, useState } from "react";
import DLtoggle from "../components/elements/DLtoggle";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import packages from '../static_data/packages.json'
import Services from '../static_data/services.json'

const Header = ({
    toggleClick,
}) => {

    const [scroll, setScroll] = useState(0);
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
    const router = useRouter();

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage)
    };

    const togglemode = () => {
        const islight = getmode()
        setmode(!islight)
    };

    const setmode = (islight) => {
        if (typeof window !== "undefined") {
            if (islight) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
            localStorage.setItem('mode', islight);
        }
    };
    const getmode = () => {
        return typeof window !== "undefined" ? localStorage.getItem('mode') == "true" : false
    };

    setmode(getmode())
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const dir = currentLanguage === "ar" ? "rtl" : "ltr"
    return (<>
        <header dir={dir} className="header-area header-style-1 header-height-2">
            <div className="header-top header-top-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4">
                            <div className="header-info">
                                <ul dir="ltr">
                                    <li>
                                    <a href="tel:+971563272736">+971 56 327 2736</a>
                                    </li>
                                    <li>
                                    <a href="tel:+971505108831">+971 50 510 8831</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">

                        </div>
                        <div className="col-xl-2 col-lg-3">
                            <div className="header-info header-info-right">
                                <ul dir="ltr">
                                    <li>
                                        <div className="language-dropdown-active">
                                            {currentLanguage == "ar" &&
                                                <div className="language-li" onClick={toggleLanguage} dir={dir}>
                                                    <img src="/assets/imgs/theme/flag-ar.png" alt="" />
                                                    <span>{t('arabic')}</span>
                                                </div>
                                            }
                                            {currentLanguage == "en" &&
                                                <div className="language-li" onClick={toggleLanguage} dir={dir}>
                                                    <img src="/assets/imgs/theme/flag-en.png" alt="" />
                                                    <span className="h-auto">{t('english')}</span>
                                                </div>
                                            }
                                        </div>
                                        <ul className="language-dropdown">
                                            {currentLanguage == "en" &&
                                                <li className="language-li" onClick={toggleLanguage} dir={dir}>
                                                    <img src="/assets/imgs/theme/flag-ar.png" alt="" />
                                                    {t('arabic')}
                                                </li>
                                            }
                                            {currentLanguage == "ar" &&
                                                <li className="language-li" onClick={toggleLanguage} dir={dir}>
                                                    <img src="/assets/imgs/theme/flag-en.png" alt="" />
                                                    <span className="h-auto">{t('english')}</span>
                                                </li>
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="language-dropdown-active hidden" href="#" dir={dir}>
                                            {t('USD')} <i className="fi-rs-angle-small-down"></i>
                                        </a>
                                        <ul className="language-dropdown">
                                            <li>
                                                <a href="#">
                                                    <img src="/assets/imgs/theme/united-arab-flag.png" alt="" />
                                                    {t('DH')}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1">
                            <DLtoggle handleToggle={togglemode} ckey={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"py-1 lg:py-0 bg-CS_card border-1 border-solid border-CS_Soft_border_color menu_shadow " + (scroll ?
                "header-bottom sticky-bar stick py-7 md:p-0" :
                "header-bottom sticky-bar py-7 md:p-0")}>
                <div className="container ">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <Link href="/">
                                <img src={
                                                    typeof window !== "undefined" && 
                                                    !   getmode() ? "/assets/imgs/theme/light-logo.png": "/assets/imgs/theme/dark-logo.png"
                                                } alt="logo" />
                            </Link>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <img src={
                                                    typeof window !== "undefined" && 
                                                    !   getmode() ? "/assets/imgs/theme/light-logo.png": "/assets/imgs/theme/dark-logo.png"
                                                } alt="logo" />
                                </Link>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="/" className={router.pathname == "/" ? "active" : ""}>

                                                {t('home')}
                                            </Link>
                                        </li>
                                        <li className="position-static">
                                            <Link href="#">
                                                {t('services')}
                                                <i className={`fi-rs-angle-down p${dir[0]}-2`}></i>
                                            </Link>
                                            <ul className="mega-menu">
                                                {Services.map((item, index) =>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22" key={index}>
                                                        <a className="menu-title" href="#">
                                                            {t(item.name.toLowerCase())}
                                                        </a>
                                                        <ul>
                                                            {item.values.map((value, index) =>
                                                                <li key={index}>
                                                                    <Link href="/Services" as={value.href} >
                                                                        <div className="hover:text-CS_text_active">
                                                                            {t(value.text)}
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="position-static">
                                            <Link href="#">
                                                {t("packages")}
                                                <i className={`fi-rs-angle-down p${dir[0]}-2`}></i>
                                            </Link>
                                            <ul className="mega-menu">
                                                {packages.map((item, index) =>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22" key={index}>
                                                        <a className="menu-title" href="#">
                                                            {t(item.name)}
                                                        </a>
                                                        <ul>
                                                            {item.values.map((value, index) =>
                                                                <li key={index}>
                                                                    <Link href="/Services" as={value.href} >
                                                                        <div className="hover:text-CS_text_active">
                                                                            {t(value.text)}
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/about" className={router.pathname == "/about" ? "active" : ""}>
                                                {t("about us")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>
                                                {t("contact")}
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-action-icon-2 d-block d-lg-none">
                            <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>);
};

export default Header;


