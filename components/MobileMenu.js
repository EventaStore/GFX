import { useState } from "react";
import useClickOutside from "../util/outsideClick";
import NestedMenu from "./elements/NestedMenu";
import DLtoggle from "../components/elements/DLtoggle";
import packages from '../static_data/packages.json'
import Services from '../static_data/services.json'
import getmode from '../util/storage'

const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });
    const handleModeToggle = () => {

        const root = document.documentElement;
        root.classList.toggle('light');

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

    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner bg-CS_bg_color">
                    <div className="mobile-header-top bg-CS_bg_color">
                        <div className="mobile-header-logo">
                            <a href="#">
                                <img
                                    src={
                                        typeof window !== "undefined" && 
                                        !   getmode() ? "/assets/imgs/theme/light-logo.png": "/assets/imgs/theme/dark-logo.png"
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

                                        <a href="#">Home</a>

                                    </li>


                                    <li
                                        className={
                                            isActive.key >= 10 && isActive.key < 15
                                                ? "menu-item-has-children"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(10)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <a href="#">Services</a>
                                        <ul
                                            className={
                                                isActive.key >= 10 && isActive.key < 15
                                                    ? "dropdown"
                                                    : "d-none"
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
                                                        <span className="menu-expand" onClick={() => handleToggle(index + 11)}>
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </span>
                                                        <a href="#">{item.name}</a>
                                                        <ul className={isActive.key === index + 11 ? "dropdown" : "d-none"}>
                                                            {item.values.map((value, valueIndex) => (
                                                                <li key={valueIndex}>
                                                                    <a href={value.href}>{value.text}</a>
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
                                            className="menu-expand"
                                            onClick={() => handleToggle(5)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <a href="#">Packages</a>
                                        <ul
                                            className={
                                                isActive.key >= 5 && isActive.key < 10
                                                    ? "dropdown"
                                                    : "d-none"
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
                                                        <span className="menu-expand" onClick={() => handleToggle(index + 6)}>
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </span>
                                                        <a href="#">{item.name}</a>
                                                        <ul className={isActive.key === index + 6 ? "dropdown" : "d-none"}>
                                                            {item.values.map((value, valueIndex) => (
                                                                <li key={valueIndex}>
                                                                    <a href={value.href}>{value.text}</a>
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

                                        <a href="/about">About Us</a>

                                    </li>

                                    <li
                                        className={
                                            isActive.key === 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >

                                        <a href="#">Contact</a>

                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="my-3 p-4 border-l border-r border-b border-t border-solid rounded-md border-CS_Soft_border_color">

                            <div className="pb-3">
                                <a href="#">+971563272736</a>

                            </div>
                            <div className="">

                                <a href="#">+971505108831</a>

                            </div>
                        </div>

                        <div className="mobile-social-icon">
                            <h6 className="pb-2">Follow Us</h6>
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
                            <a href="">
                                <img
                                    src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
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
                        <div className="py-6">
                            <DLtoggle handleToggle={handleModeToggle} ckey={3} />
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
