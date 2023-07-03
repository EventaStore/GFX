import React from "react";


const Footer = () => {
    return (
        <>
            <div className="h-72" />
            <footer className="main">
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
                                                src="/assets/imgs/theme/red_logo.png"
                                                alt="logo"
                                            />
                                        </a>
                                        <p className="font-lg text-heading">
                                            Every service is rigorously screened and constantly rated to ensure you get the best service.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="footer-a-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="text-2xl py-4">Company</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    {
                                        [
                                            { name: 'ABOUT US', url: '/about' },
                                            { name: 'Contact Us', url: '/contact' },
                                            { name: 'OUR TEAM', url: '#' },
                                            { name: 'OUR WORKS', url: '#' }
                                          ].
                                            map((e, index) =>
                                                <li key={index}>
                                                    <a href={e.url}>{e.name}</a>
                                                </li>
                                            )
                                    }

                                </ul>
                            </div>
                            <div
                                className="footer-a-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="text-2xl py-4">POPULAR SERVICES</h4>
                                <ul className="sec-footer footer-list mb-sm-5 mb-md-0">
                                    {
                                        [
                                            'TIRE REPAIR',
                                            'BRAKE REPAIR',
                                            'ENGINE REPAIR',
                                            'CHARGING REPAIR',
                                            'COOLING SYSTEM',
                                            'WHEEL ALIGNMENT',
                                            'BATTERY STARTING',
                                            'SUPSPENSION REPAIR'
                                        ].
                                            map((value, index) =>
                                                <li key={index}>
                                                    <a href="#">{value}</a>
                                                </li>
                                            )
                                    }
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
                            <p className="font-sm mb-0">
                                &copy; 2023,{" "}
                                <strong className="text-brand">
                                    <a target="_blank" href="https://www.linkedin.com/in/ahmed-magdy-4737ba18a/">
                                        Ahmed Magdy
                                    </a>
                                </strong>
                                - All rights reserved
                            </p>
                        </div>
                        <div className="pb-10">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>

                        </div>

                        <div className="pb-10">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
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
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
