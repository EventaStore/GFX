import Btnstyle from "../components/elements/Btnstyle";
import Layout from "../components/Layout";
import Counter from '../components/elements/counter';
import AnimatedSentence from '../components/elements/SentenceAnimation';
import Header_slider from '../components/elements/header-slider';
import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';
import { React, useEffect, useState } from "react";
import Contact from '../components/elements/Appointment'
import HomeContent from '../static_data/home_content.json'
import Services from '../static_data/services_content.json'
import 'animate.css';
import Link from 'next/link';


export default function Home() {

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
  var entries = Object.values(Services);
  const threshold = .6
  const elements = useAnimatedElement(threshold)
  // return (<></>)
  var c = 1
  var dir = isarabic ? "rtl" : "ltr"
  return (
    <>
      {/* <IntroPopup /> */}
      <Layout noBreadcrumb="d-none">
        <section>
          <Header_slider />
        </section>

        <section dir={dir} className="bg-CS_card">
          <div className="container wow animate__fadeIn animate__animated">
            <div className="flex flex-wrap">
              {
                typeof window !== "undefined" &&
                HomeContent['section1'].map(
                  (value, index) => (
                    <div key={index} className="p-5 w-full sm:w-1/2 lg:w-1/4">
                      <p className="text-CS_text_color text-6xl pb-4">
                        <Counter endValue={value[0]} duration={.5} useInView={elements[c++]} />
                        <span>
                          {t(value[1])}
                        </span>
                      </p>
                      <p className="div_before pt-3">
                        {t(value[2])}
                      </p>
                    </div>
                  ))
              }
            </div>
          </div>
        </section>

        <section className="pt-72" dir={dir}>
          <div className="container px-5">
            <div className="flex justify-between">
              <h1 className="text-CS_text_color text-5xl font-bold">
                <AnimatedSentence className="text-CS_text_color text-5xl" sentence={t("OUR SERVICES")} useInView={elements[c++]} />
              </h1>
              <div className="hidden md:block">
                <Btnstyle >{t('All Services')}</Btnstyle>
              </div>
            </div>

            <div className="flex flex-wrap pt-5">

              {
                typeof window !== "undefined" &&
                entries.slice(0, 6).map((value, index) => {
                  const truncatedText = value['text editor 1']['p1'].length > 140
                    ? t(value['text editor 1']['p1']).substring(0, 140) + "..."
                    : t(value['text editor 1']['p1']);

                  return (
                    <div key={index} className="section_2_elemmt w-full sm:w-1/1 md:w-1/2 lg:w-1/3">
                      <div className="div_before m-2 p-2">
                        <img className="hidden img_active" src={value.IconActive} alt="Active Icon" />
                        <img className="img_none_active" src={value.IconInActive} alt="Inactive Icon" />
                        <strong className="text-CS_text_color text-2xl">{t(value['page title'])}</strong>
                        <p className="py-3">
                          {truncatedText}
                        </p>
                        <strong className="text-1xl gradient-animate">
                          <span>
                            <Link href={value.sectionLink}>
                              {t("DETAILS SERVICE")}
                            </Link>
                          </span>
                        </strong>
                      </div>
                    </div>
                  );
                })
              }
            </div>

          </div>
        </section>

        <section className="pt-72" dir={dir}>
          <div className="container">
            <h1>
              <AnimatedSentence
                className="text-CS_text_color text-5xl font-bold"
                sentence={t("MAINTENANCE & REPAIRS")}
                useInView={elements[c++]}
              />
            </h1>

            <div className="relative div_before py-5 my-5 w-full">
              <div className="absolute inset-0 flex justify-center items-center">

                <Btnstyle className="border-CS_Soft_border_color">
                  <svg width="37.56" height="37.53" viewBox="0 0 37.56 37.53">
                    <path id="video-bn1" className="svg-video-play"
                      fill="white"
                      d="M1004.42,1967.21a2,2,0,0,1,0,3.58l-33.526,16.76a2,2,0,0,1-2.894-1.79v-33.52a2,2,0,0,1,2.894-1.79Z"
                      transform="translate(-968 -1950.25)"
                    >
                    </path></svg>
                </Btnstyle>
              </div>
              <div className="overflow-hidden">
                <div className={(elements[c].inView ? 'animate__animated animate__bounceInUp animate__fast' : ' opacity-0')}>
                  <img ref={elements[c++].ref}
                    className={"hover:scale-110 hover:-rotate-1 transition-transform duration-300 w-full brightness-50 "}
                    src="/assets/imgs/homepage/video-bg2.jpg"
                  />

                </div>
              </div>
            </ div>
          </div>
        </section>

        <section className="pt-10" dir={dir}>
          <div className="container">

            <div className="flex flex-wrap">
              <div className="xl:w-1/3 lg:w-1/1 pt-4 pb-3">
                <AnimatedSentence className="text-CS_text_color text-5xl" sentence={t("AFFORDABLE PRICING PLANS")} useInView={elements[c++]} />
                <p ref={elements[c].ref} className={"text-lg my-5 " + (elements[c++].inView ? 'animate__animated animate__fadeInLeft animate__fast' : ' opacity-0')}>
                  {t('We provide the best car service, recommend the best products through an independent review process.')}
                </p>

                <ul ref={elements[c].ref} className={"text-base text-CS_text_color " + (elements[c++].inView ? 'animate__animated animate__fadeInLeft animate__fast animate__delay-.5s' : ' opacity-0')}>
                  <li className="li-list ">
                    <strong className="mx-2">

                      {t("SAME DAY SERVICE")}
                    </strong>
                  </li>
                  <li className="li-list my-3 ">
                    <strong className="mx-2">
                      {t("CONVENIENT LOCATION")}
                    </strong>
                  </li>
                  <li className="li-list ">
                    <strong className="mx-2">
                      {t("ONLINE APPOINTMENT")}
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="xl:w-2/3 lg:w-1/1" >
                  {
                    false && 
              <div className={`text-6xl font-bold relative top-1/2 left-1/2 transform ${currentLanguage !== 'ar' ? 'translate-x-52' : '-translate-x-52'}`}>
                COME SOON
                </div>
                  }
                <div className="flex">

                {
                  typeof window !== "undefined" &&
                  HomeContent['section3'].map((value, index) => (
                    <div ref={elements[c].ref} key={index} className={"w-1/2 mx-auto lg:mx-0 p-2 opacity-10 " + (elements[c++].inView ? 'animate__animated animate__zoomInDown animate__fast ' : ' opacity-0')}>
                      <div className="bg-CS_card h-full w-full px-5 div_before max-w-sm">
                        <div className="flex justify-center items-center">
                          <div className="border-b border-solid border-white py-4 w-max text-center">
                            <p className="text-base">
                              {value[0]}
                            </p>
                            <p className="text-5xl py-3">
                              {value[1]}
                            </p>
                            <p className="text-sm">
                              {value[2]}
                            </p>
                          </div>
                        </div>
                        <ul>

                          {
                            value[3].map((value, index) => (
                              <li key={index} className={"py-3 text-base flex justify-between " + (value[1] ? "" : "opacity-40")}>
                                <span>
                                  {value}
                                </span>
                                <strong>&#x2713;</strong>
                              </li>
                            ))
                          }

                        </ul>
                        <Btnstyle className="my-5 w-full">
                          {t("GET STARTED")}
                        </Btnstyle>
                      </div>

                    </div>
                  ))
                }
              </div>
              </div>

            </div>
          </div>
        </section>

        <section className="pt-72">
          <div className="flex flex-wrap bg-CS_card">

            <div className="w-1/1 sm:w-1/2">
              <div className="overflow-hidden h-full">
                <img className="object-cover hover:scale-110 transition-transform duration-300 h-full w-full brightness-50" src="/assets/imgs/homepage/left-img.jpg" />
              </div>
            </div>
            <div className="w-1/1 sm:w-1/2 flex items-center justify-center">
              <div ref={elements[c].ref} className={"w-11/12 xl:w-4/5 2xl:w-3/5 " + (elements[c++].inView ? 'animate__animated animate__bounceInRight animate__fast' : 'opacity-0')}>
                <div className="w-1/1">
                  <h1 className="text-4xl font-bold pb-5 pt-4 md:pt-0">CAR EXTERIOR CLEANING: BASIC DETAILING</h1>
                  <ul className="text-base text-CS_text_color grid grid-cols-1 lg:grid-cols-2 gap-1">
                    <li className="li-list">
                      <strong>SAME DAY SERVICE</strong>
                    </li>
                    <li className="li-list">
                      <strong>CONVENIENT LOCATION</strong>
                    </li>
                    <li className="li-list">
                      <strong>ONLINE APPOINTMENT</strong>
                    </li>
                    <li className="li-list">
                      <strong>COMPLIMENTARY SHUTTLE</strong>
                    </li>
                  </ul>
                </div>
                <div>
                  <Btnstyle className="my-5">GET SERVICE</Btnstyle>
                </div>

              </div>
            </div>

          </div>
          <div className="flex flex-wrap-reverse bg-CS_card">

            <div className="w-1/1 sm:w-1/2">
              <div ref={elements[0].ref} className={(elements[0].inView ? 'animate__animated animate__bounceInLeft animate__fast h-full' : ' opacity-0')}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-1/1 lg:w-4/5 xl:w-2/3 2xl:w-1/2 p-4">

                    <h1 className="text-4xl font-bold pb-5">RUBBING, WAXING, AND POLISHING</h1>
                    <p className="text-base text-CS_text_color">
                      Our technicians have undergone the most extensive and stringent car detail training program. And the only car that matters is yours because we will detail it to your complete satisfaction.
                    </p>
                    <div>

                      <Btnstyle className="mt-5">
                        GET SERVICE
                      </Btnstyle>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="w-1/1 sm:w-1/2">
              <div className="overflow-hidden h-full">
                <img className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full brightness-50" src="/assets/imgs/homepage/right-img.jpg" style={{ objectPosition: 'top right' }} alt="video" />
              </div>
            </div>


          </div>
        </section>

        <section className="py-40">
          <div className="container px-5">
            <div className="flex flex-wrap justify-between items-start">
              <div className="w-full xl:w-1/3 pt-4">
                <AnimatedSentence className="text-CS_text_color text-5xl" sentence="HOW TO SERVICE YOUR CAR" useInView={elements[c++]} />
                <p className="text-lg my-5 animate__animated animate__fadeInLeft animate__fast">
                  Rather than letting your services go by, take these steps to keep your car in good shape until you can afford a full service.
                </p>
              </div>
              <div className="flex flex-wrap w-full xl:w-2/3">
                {
                  typeof window !== "undefined" &&
                  HomeContent['section4'].map((value, index) => (
                    <div key={index} className="section_2_element w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                      <div className="div_before m-2 p-2">
                        <strong className="text-CS_text_color text-2xl">
                          <span className="text-CS_text_active font-bold">
                            {(index + 1).toString().padStart(2, '0')}  &nbsp;&nbsp;
                          </span>
                          {value[0]}
                        </strong>
                        <p className="py-3">
                          {value[1]}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        <section className="bg-CS_bg_color py-10">
          <Contact />
        </section>
      </Layout>
    </>
  );
}
