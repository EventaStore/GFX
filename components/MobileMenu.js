import { useState } from "react";
import useClickOutside from "../util/outsideClick";
import NestedMenu from "./elements/NestedMenu";
import DLtoggle from "../components/elements/DLtoggle";
import packages from '../static_data/packages.json'
import Services from '../static_data/services.json'
import getmode from '../util/storage'
import { useTranslation } from 'react-i18next';

const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });
    const { i18n,t } = useTranslation();
    const currentLanguage = i18n.language;

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage)
    };

    const handleToggle = (key) => {

        if (isActive.key === key) {
            var _key = key > 5 && key < 10 ? 5 : undefined
            _key = key > 10 && key < 15 ? 10 : _key

            setIsActive({
                status: true,
                key: _key
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    const dir = currentLanguage === "ar" ? "rtl" : "ltr"
    const drop_dir = currentLanguage === 'en' ? " right-0" : " left-0"
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner bg-CS_bg_color" dir={dir}>
                    <div className="mobile-header-top bg-CS_bg_color">
                        <div className="mobile-header-logo">
                            <a href="#">
                                <img
                                    src={
                                        typeof window !== "undefined" &&
                                            !getmode() ? "/assets/imgs/theme/light-logo.png" : "/assets/imgs/theme/dark-logo.png"
                                    }
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">

                        <div className="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key === 1
                                                ? "text-CS_text_color"
                                                : ""
                                                + " menu-item-has-children border-CS_Soft_border_color"
                                        }
                                    >

                                        <a href="#">{t("Home")}</a>

                                    </li>


                                    <li
                                        className={
                                            isActive.key >= 10 && isActive.key < 15
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className={`menu-expand ${drop_dir}`}
                                            onClick={() => handleToggle(10)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <a href="#">{t('Services')}</a>
                                        <ul
                                            className={
                                                isActive.key >= 10 && isActive.key < 15
                                                    ? "dropdown" : "dropdown-close"
                                            }
                                        >


                                            <ul>
                                                {Services.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={
                                                            isActive.key === index + 11 ? "menu-item-has-children active" : "menu-item-has-children"
                                                        }
                                                    >
                                                        <span className={`menu-expand ${drop_dir}`} onClick={() => handleToggle(index + 11)}>
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </span>
                                                        <a href="#">{t(item.name)}</a>
                                                        <ul className={isActive.key === index + 11 ? "dropdown" : "dropdown-close"}>
                                                            {item.values.map((value, valueIndex) => (
                                                                <li key={valueIndex}>
                                                                    <a href={value.href}>{t(value.text)}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>



                                        </ul>
                                    </li>

                                    <li
                                        className={
                                            isActive.key >= 5 && isActive.key < 10
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className={`menu-expand ${drop_dir}`}
                                            onClick={() => handleToggle(5)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <a href="#">{t('Packages')}</a>
                                        <ul
                                            className={
                                                isActive.key >= 5 && isActive.key < 10
                                                    ? "dropdown" : "dropdown-close"
                                            }
                                        >

                                            <ul>
                                                {packages.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={
                                                            isActive.key === index + 6 ? "menu-item-has-children active" : "menu-item-has-children"
                                                        }
                                                    >
                                                        <span className={`menu-expand ${drop_dir}`} onClick={() => handleToggle(index + 6)}>
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </span>
                                                        <a href="#">{item.name}</a>
                                                        <ul className={isActive.key === index + 6 ? "dropdown" : "dropdown-close"}>
                                                            {item.values.map((value, valueIndex) => (
                                                                <li key={valueIndex}>
                                                                    <a href={value.href}>{t(value.text)}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </ul>
                                    </li>

                                    <li
                                        className={
                                            isActive.key === 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >

                                        <a href="/about">{t('About Us')}</a>

                                    </li>

                                    <li
                                        className={
                                            isActive.key === 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >

                                        <a href="/contact">{t('Contact')}</a>

                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="my-3 p-4 border-l border-r border-b border-t border-solid rounded-md border-CS_Soft_border_color">

                            <div className="pb-3">
                                <a href="tel:+971563272736">+971 56 327 2736</a>

                            </div>
                            <div >
                                <a href="tel:+971505108831">+971 50 510 8831</a>

                            </div>
                        </div>

                        <div className="mobile-social-icon">
                            <h6 className="pb-2">{t('Follow Us')}</h6>
                            <a href="">
                                <img
                                    src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.instagram.com/invites/contact/?i=y0dl53yo9tw&utm_content=rsubpg1">
                                <img
                                    src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="py-6" dir="ltr">
                            <input onChange={toggleLanguage} type="checkbox" className="DL_checkbox checkbox w-min h-min" id="lang-checkbox" />
                            <label htmlFor="lang-checkbox" className="checkbox-label flag-container">
                                <img src="/assets/imgs/theme/flag-en.png" alt="" />
                                <img src="/assets/imgs/theme/flag-ar.png" alt="" />
                                <span className={`lang-ball ${currentLanguage}`}></span>
                            </label>
                        </div>
                        <div className="py-6" dir="ltr">
                            <DLtoggle ckey={3} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;


const NestedMenuPage = () => {
    const menuData = [
        {
            label: 'Item 1',
            subMenu: [
                {
                    label: 'Sub Item 1.1',
                },
                {
                    label: 'Sub Item 1.2',
                },
            ],
        },
        {
            label: 'Item 2',
            subMenu: [
                {
                    label: 'Sub Item 2.1',
                    subMenu: [
                        {
                            label: 'Sub Sub Item 2.1.1',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div>
            <h1>My Nested Menu</h1>
            <NestedMenu menuData={menuData} />
        </div>
    );
};
