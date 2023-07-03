import { React, useEffect, useState } from "react";
import Layout from "../components/Layout";
import AnimatedSentence from '../components/elements/SentenceAnimation';
import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';


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
                <div className='container'>
                    <AnimatedSentence className="text-5xl font-bold text-CS_text_color pb-10" sentence="OUR RECENT WORKS" useInView={elements[c++]} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/professional-vehicle-body-polishing-2021-09-01-12-15-02-utc.jpg",
                            "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/professional-vehicle-body-polishing-2021-09-01-12-15-02-utc.jpg",
                            "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/professional-vehicle-body-polishing-2021-09-01-12-15-02-utc.jpg",
                            "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/05/professional-vehicle-body-polishing-2021-09-01-12-15-02-utc.jpg"
                        ].map((e, i) => (
                            <div key={i} className={(elements[c].inView ? 'recent-works-card animate__animated animate__fadeInUp ' : ' opacity-0')} style={{ animationDelay: `${i * .05}s` }} >
                                <div className="overflow-hidden">
                                    <img ref={elements[c++].ref}
                                        className={"hover:scale-110 h-96 w-full transition duration-500 brightness-90 hover:brightness-50 object-cover"}
                                        src={e} />
                                </div>
                                <span className="text-lg font-bold text-white text-center w-full">
                                    OUR RECENT WORKS
                                </span>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
            <section className="pt-32 pb-20">
                <div className='container'>
                    <AnimatedSentence className="text-5xl font-bold text-CS_text_color pb-10" sentence="EXPERT TEAM MEMBERS" useInView={elements[c++]} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },
                            {
                                name: "BOBBIE BROOKS",
                                job: "Body Expert",
                                socialData: [
                                    {
                                        socialData: '/assets/imgs/theme/icons/icons-linkedin.svg',
                                        url: 'https://www.linkedin.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-facebook-white.svg',
                                        url: 'https://www.facebook.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-twitter-white.svg',
                                        url: 'https://www.twitter.com/johndoe',
                                    },
                                    {
                                        socialData: '/assets/imgs/theme/icons/icon-instagram-white.svg',
                                        url: 'https://www.instagram.com/johndoe',
                                    },
                                ],
                                image: "https://promotors.templatekit.co/wp-content/uploads/sites/46/2022/06/repairman-in-workshop-2021-09-24-03-05-22-utc-1.jpg",
                            },

                        ].map((e, i) => (
                            <div key={i} className={(elements[c].inView ? 'our-team-card overflow-hidden animate__animated animate__fadeInUp ' : ' opacity-0')} style={{ animationDelay: `${i * .05}s` }} >
                                <img ref={elements[c++].ref}
                                    className={"h-96 w-full transition duration-500 brightness-90 object-cover"}
                                    src={e.image} />
                                <div className="info w-full h-full flex flex-col justify-end p-5 text-white font-bold">
                                    <span className="text-2xl">{e.name}</span>
                                    <span className="text-xl">{e.job}</span>
                                    <div className="flex gap-2 mt-5 ">
                                        {
                                            e.socialData.map((ee, i) => (
                                                <a key={i} href={ee.url} className="w-10 h-10 p-2 bg-CS_text_active hover:bg-transparent border-solid border-2 border-CS_text_active text-CS_text_color rounded-md hover:-translate-y-3 transition duration-500 cursor-pointer">
                                                    <img src={ee.socialData} />
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;