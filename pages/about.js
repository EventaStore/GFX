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
    return (
        <Layout parent="Home" sub="about" parentURL="/" title='About Us'>
            <section className="pt-20">
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/2 lg:pr-10'>
                            <h3 className='wow animate__animated animate__slideInLeft'>
                                WE MAKE AUTO REPAIR MORE CONVENIENT
                            </h3>
                            <article className='text-xl pt-5 wow animate__animated animate__slideInLeft animate__fast animate__delay-.5s'>
                                Amet commodo nulla facilisi nullam vehicula. Purus in mollis nunc sed. Accumsan tortor posuere ac ut consequat semper viverra nam. Augue lacus viverra vitae congue eu consequat ac felis donec
                            </article>
                        </div>
                        <img src="https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/mechanic-changing-brake-discs-car-service.jpg" className='h-80 bg-CS_card w-full lg:w-1/2 mt-7 lg:m-0 object-cover' />
                    </div>
                </div>
            </section>
            <section className="pt-32">
                <div className='container'>
                    <AnimatedSentence className="text-5xl font-bold text-CS_text_color pb-10" sentence="OUR SERVICES" useInView={elements[c++]} />
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
                <Recentwork/>
            </section>
            <section className="pt-32 pb-20">
                <Team/>

            </section>
        </Layout>
    );
}

export default About;