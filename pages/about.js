import { React, useEffect, useState } from "react";
import Layout from "../components/Layout";
import AnimatedSentence from '../components/elements/SentenceAnimation';
import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';
import Team from '../components/elements/team'
import Recentwork from '../components/elements/recent_work'

function About() {
    // artical + img
    // our service
    // out team 
    // out location 
    // contact us
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

    var c = 1
    const threshold = .6
    const elements = useAnimatedElement(threshold)
    const dir = currentLanguage === "ar" ? "rtl" : "ltr"

    return (
        <>
            <title>Contact : gxf</title>

            <Layout parent={t("Home")} sub={t("About")} parentURL="/" title={t('About Us')}>
                <section className="pt-20" dir={dir}>
                    <div className='container'>
                        <div className='flex flex-wrap'>
                            <div className='w-full lg:w-1/2 lg:pr-10'>
                                <h3 className='wow animate__animated animate__slideInLeft'>
                                    {t('Welcome to GXF Car Service Center!')}
                                </h3>
                                <article className='text-xl pt-5 wow animate__animated animate__slideInLeft animate__fast animate__delay-.5s'>
                                    {t(
                                        "At GXF, we understand that your vehicle is more than just a means of transportation. It's a reflection of your personality and a valuable asset that deserves the best care. That's why we are here to provide you with top-notch car servicing and maintenance solutions."
                                    )}
                                </article>
                                <article className='text-xl pt-5 wow animate__animated animate__slideInLeft animate__fast animate__delay-.5s'>
                                    {t(
                                        'Our experienced team of certified technicians is dedicated to ensuring the optimal performance and longevity of your vehicle. From routine oil changes and tire rotations to complex engine repairs, we handle it all with precision and expertise. We use state-of-the-art diagnostic equipment and genuine parts to ensure the highest quality of service.'
                                    )}
                                </article>
                                <article className='text-xl pt-5 wow animate__animated animate__slideInLeft animate__fast animate__delay-.5s'>
                                    {t(
                                        'At GXF Car Service Center, we prioritize your convenience and satisfaction. We offer a range of services tailored to meet your specific needs'
                                    )}
                                </article>
                            </div>
                            <img src="https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/mechanic-changing-brake-discs-car-service.jpg" className='h-80 bg-CS_card w-full lg:w-1/2 mt-7 lg:m-0 object-cover' />
                        </div>
                    </div>
                </section>


                <section className="pt-32" dir={dir}>
                    <div className='container'>
                        <AnimatedSentence
                            className="text-4xl font-bold text-CS_text_color pb-10"
                            sentence={t('GXF Car Service Center: Exceptional Service, Reliable Repairs')}
                            useInView={elements[c++]}
                        />
                        <p className='text-xl'>
                            {t(
                                'At GXF Car Service Center, we strive to provide exceptional customer service. Our friendly and knowledgeable staff is ready to assist you and answer any questions you may have. We believe in transparent communication and will always keep you informed about the status of your vehicle and any recommended repairs.'
                            )}
                        </p>
                        <p className='text-xl'>
                            {t(
                                'Schedule your appointment today through our user-friendly website or give us a call. Experience reliable and professional car servicing with GXF Car Service Center. Your satisfaction is our priority.'
                            )}
                        </p>
                    </div>
                </section>

                <section className="pt-32" dir={dir}>
                    <div className='container'>
                        <AnimatedSentence className="text-5xl font-bold text-CS_text_color pb-10" sentence={t("OUR SERVICES")} useInView={elements[c++]} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                [
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-6b.png',
                                        "text": t('BRAKE REPAIR'),
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-5b.png',
                                        "text": t('ENGINE REPAIR')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-4b.png',
                                        "text": t('TIRE REPAIR')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-3b.png',
                                        "text": t('COOLING SYSTEM')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-2b.png',
                                        "text": t('BATTERY REPAIR')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-1b.png',
                                        "text": t('STEERING REPAIR')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-6b.png',
                                        "text": t('BRAKE REPAIR'),
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-5b.png',
                                        "text": t('ENGINE REPAIR')
                                    },
                                    {
                                        "img": '/assets/imgs/homepage/sec3/Icon-4b.png',
                                        "text": t('TIRE REPAIR')
                                    },
                                ].map((e, i) => (
                                    <div key={i} className={`p-4 bg-CS_card div_before animate__animated animate__fadeInRight ${i > 7 ? " hide-that" : ""}`} style={{ animationDelay: `${i * .05}s` }} >
                                        <div className='flex items-center'>
                                            <img src={e.img} />
                                            <h4 className='hover:text-CS_text_active'>
                                                {e.text}
                                            </h4>
                                        </div>
                                    </div>
                                )
                                )

                            }
                        </div>
                    </div>
                </section>
                <section className="pt-32">
                    <Recentwork />
                </section>
                <section className="pt-32 pb-20">
                    <Team />

                </section>
            </Layout>
        </>
    );
}

export default About;