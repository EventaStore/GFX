
import React, { useEffect, useState } from "react";
import DLtoggle from "../components/elements/DLtoggle";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import provides from '../static_data/provieds.json'
import getmode from "../util/storage";
import Search from "./ecommerce/Search";
import { connect } from "react-redux";
import { GetCategories } from "../redux/action/apis/categoreis/get";
import { nestChildren } from "../util/util";
const Header = ({
    toggleClick,
    GetCategories,
    GetCategoriesRespond
}) => {
    const [isDark, setIsDark] = useState(false);
    const [providesSelected, setProvieds] = useState(0);

    GetCategoriesRespond = GetCategoriesRespond ? nestChildren(GetCategoriesRespond) : null
    const GetCategoriesFilter = GetCategoriesRespond?.filter((value) => provides[providesSelected].list.includes(value._id)) || []
    

    useEffect(() => {
        GetCategories()
    }, [])


    // GetCategoriesRespond.forEach(element => {
    //     console.log(element.nameAr , element._id)
    // });

    const [scroll, setScroll] = useState(0);
    const router = useRouter();
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;

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

        if (islight) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        localStorage.setItem('mode', islight);

    };

    useEffect(() => {
        setmode(getmode())
    }, [])

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
            <div className="header-top header-top-ptb-1 d-none d-lg-block bg-white">
                <div className="container">
                    <div className="flex items-center">
                        <div className="logo logo-width-1">
                            <Link href="/">
                                <img src={
                                    !isDark ? "/assets/imgs/theme/light-logo.png" : "/assets/imgs/theme/dark-logo.png"
                                } alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-1">
                            <div className="bg-black" />
                            <div className="search-style-2">
                                <Search />
                            </div>
                        </div>
                        <div className="header-info header-info-right gap-3" dir="ltr">
                            <ul>
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
                            <DLtoggle handleToggle={togglemode} ckey={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex justify-between w-full">
                {
                    provides.map((value, index) =>
                        providesSelected == index ?
                            <div key={index} className="p-4 font-bold bg-CS_text_active text-white transition-all w-full flex justify-center">
                                {value.title}
                            </div> :
                            <div key={index} className="p-4 font-bold cursor-pointer transition-all w-full flex justify-center" onClick={() => setProvieds(index)}>
                                {value.title}
                            </div>
                    )
                }
            </div>
            <div className={"py-1 lg:py-0 bg-white " + (scroll ?
                "header-bottom sticky-bar stick py-7 md:p-0" :
                "header-bottom sticky-bar py-7 md:p-0")}>
                <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <Link href="/">
                                <img src={
                                    !isDark ? "/assets/imgs/theme/light-logo.png" : "/assets/imgs/theme/dark-logo.png"
                                } alt="logo" />
                            </Link>
                        </div>
                        <div className="header-nav d-none d-lg-flex w-full">
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading w-full">
                                <nav>
                                    <ul className="flex gap-20 my-4">
                                        {GetCategoriesFilter?.map((category) => (
                                            <li key={category._id} className="position-static">
                                                <Link href={`/products/${category._id}`}>
                                                    {currentLanguage === 'en' ? category.name : category.nameAr}
                                                    {/* <i className={`fi-rs-angle-down ${currentLanguage === 'en' ? "ml-2" : "mr-2"}`}></i> */}
                                                </Link>
                                                <ul className="mega-menu max-h-[600px] overflow-auto grid grid-cols-2 gap-4 w-full">
                                                    {category.children.map((subCategory) => (
                                                        <li key={subCategory._id}>
                                                            <Link href={`/products/${subCategory._id}`}>
                                                                <h4 className="menu-title hover:text-CS_text_active cursor-pointer w-min whitespace-nowrap">
                                                                    {currentLanguage === 'en' ? subCategory.name : subCategory.nameAr}
                                                                </h4>
                                                            </Link>
                                                            <ul className="flex flex-wrap gap-1">
                                                                {subCategory.children.map((child) => (
                                                                    <li key={child._id}>
                                                                        <Link href={`/products/${child._id}`}>
                                                                            <div className="hover:text-CS_text_active border rounded-lg flex justify-center gap-2 items-center flex-col p-2 size-36 text-center">
                                                                                <img className="size-20" src={child.thumbnail} alt="category img" />
                                                                                {currentLanguage === 'en' ? child.name : child.nameAr}
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
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

const mapStateToProps = (state) => ({
    GetCategoriesRespond: state.api.GetCategories,
});

const mapDispatchToProps = {
    GetCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


