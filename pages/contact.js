import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';
import { React, useEffect, useState } from "react";
import Contact from '../components/elements/Appointment'
import Layout from "../components/Layout";

function ContactPage() {

    const { i18n, t } = useTranslation();

    const currentLanguage = i18n.language;
    const ar = currentLanguage === 'ar';
    const [isarabic, setisarabic] = useState(ar);

    const handleLanguageChanged = () => {
        setisarabic(!isarabic)
    };

    useEffect(() => {
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [handleLanguageChanged]);

    const threshold = .6
    const elements = useAnimatedElement(threshold)
    // return (<></>)
    var c = 1
    var dir = isarabic ? "rtl" : "ltr"
    return (
        <Layout parent="Home" sub="contact" parentURL="/" title='Contact Us'>
            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                    <div className='contact-cart'>
                        <h3>
                            CONTACT US
                        </h3>
                        <div>
                            <p>+ 1 123 456-7890</p>
                            <p>+ 1 123 456-7890</p>
                        </div>
                        <div>
                            <p>GFX@email.com</p>
                            <p>contact@email.com</p>
                        </div>
                    </div>
                    <div className='contact-cart'>
                        <h3>
                            ADDRESS
                        </h3>
                        <div>
                            <p>19 Frisk Drive, Middletown,nj,</p>
                            <p>3452 United States</p>
                        </div>
                        <div>
                            <p>31 S Division Street, Montour,ia,</p>
                            <p>4498 United States</p>
                        </div>
                    </div>
                    <div className='contact-cart'>
                        <h3>
                            OPEN HOURS
                        </h3>
                            <div className='flex justify-between'>
                                <p>Monday – Friday</p>
                                <p>8 am – 8 pm</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Saturday</p>
                                <p>8 am – 6 pm</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Sunday</p>
                                <p>Closed</p>
                            </div>
                    </div>
                </div>
            </section>
            <section className='my-14'>
                <div className='container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2146.7779696762964!2d55.26720540345076!3d25.188521839891152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6a99b6ac5%3A0xffb02afc9b75ef1b!2sGFX%20-%20Group%20Fitness%20Experience!5e0!3m2!1sar!2seg!4v1688185023404!5m2!1sar!2seg"
                        className='google-map-location'
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>
            <section>
                <Contact />
            </section>
        </Layout>
    );
}

export default ContactPage;
