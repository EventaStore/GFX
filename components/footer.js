import React from "react";
import getmode from '../util/storage'
import Services from '../static_data/services.json'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const combinedValues = Services.reduce((values, obj) => {
        return values.concat(obj.values);
    }, []);

    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
    const dir = currentLanguage === "ar" ? "rtl" : "ltr"
    return (
        <>
            <div className="h-72"/>
            <footer className="main" dir={dir}>
                <section className="section-padding footer-mid border-b border-t border-solid border-CS_Soft_border_color my-4">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <a className="mb-15">
                                            <img
                                                src=
                                                {
                                                    typeof window !== "undefined" &&
                                                        !getmode() ? "/assets/imgs/theme/light-logo.png" : "/assets/imgs/theme/dark-logo.png"
                                                }
                                                alt="logo"
                                            />
                                        </a>
                                        <p className="font-lg text-heading">
                                            {t('Every service is rigorously screened and constantly rated to ensure you get the best service.')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="footer-a-widget col wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="text-2xl py-4">{t("Company")}</h4>
                                <ul className="footer-list mb-sm-5 mb-md-0">
                                    {[
                                        { name: 'ABOUT US', url: '/about' },
                                        { name: 'OUR TEAM', url: '/team' },
                                        { name: 'OUR WORKS', url: '/works' },
                                        { name: 'FQA', url: '/FQA' }
                                    ].map((e, index) => (
                                        <li key={index}>
                                            <a href={e.url}>{t(e.name)}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="footer-a-widget col wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="text-2xl py-4">{t('POPULAR SERVICES')}</h4>
                                <ul className="sec-footer columns-1 lg:columns-2 footer-list mb-sm-5 mb-md-0">
                                    {combinedValues.slice(0, 8).map((value, index) => (
                                        <li key={index}>
                                            <a href={value.href}>{t(value.text)}</a>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="flex flex-wrap-reverse justify-center sm:justify-between text-center items-center">
                        <div className="pb-10">
                            {
                                currentLanguage == "en" &&
                                <p className="font-sm mb-0">
                                    &copy; 2023,{" "}
                                    <strong className="text-brand">
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/ahmed-magdy-4737ba18a/"
                                        >
                                            Ahmed Magdy
                                        </a>
                                    </strong>
                                    - All rights reserved
                                </p>
                            }
                            {
                                currentLanguage == "ar" &&
                                <p className="font-sm mb-0">
                                    &copy; 2023,{" "}
                                    <strong className="text-brand">
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/ahmed-magdy-4737ba18a/"
                                        >
                                            أحمد مجدي
                                        </a>
                                    </strong>
                                    - جميع الحقوق محفوظة
                                </p>

                            }
                        </div>
                        <a href="tel:+971563272736" className="pb-5 w-full sm:w-40" dir="ltr">+971 56 327 2736</a>
                        <div className="pb-10">
                            <div className="mobile-social-icon">
                                <h6>{t('Follow Us')}</h6>
                                <a href="https://www.facebook.com/gxfcar?mibextid=2JQ9o">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://instagram.com/Kambooshacar?igshid=MzRlODBiNWFlZA==" >
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://www.tiktok.com/@Kambooshacar?_t=8eHlOOrI3Nd&_r=1">
                                    <img
                                        src="/assets/imgs/theme/icons/icons-tiktok-white.svg"
                                        alt=""
                                    />
                                </a>
                                {/* <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a> */}
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
