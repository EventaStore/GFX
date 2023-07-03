import Btnstyle from "../components/elements/Btnstyle";
import Layout from "../components/Layout";
import Counter from '../components/elements/counter';
import AnimatedSentence from '../components/elements/SentenceAnimation';
import Header_slider from '../components/elements/header-slider';
import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';
import { React, useEffect, useState } from "react";
import Contact from '../components/elements/Appointment';

export default function Home() {
  const { i18n, t } = useTranslation();
  
  const currentLanguage = i18n.language;
  const ar = currentLanguage === 'ar';
  const [isarabic, setisarabic] = useState(ar);

  const handleLanguageChanged = () => {
    setisarabic(!isarabic);
  };
  
  useEffect(() => {
    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const threshold = 0.6;
  const elements = useAnimatedElement(threshold);
  var c = 1;
  var dir = isarabic ? 'rtl' : 'ltr';

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
              {[
                ['12', '+', t('More than 12 years of operation in the field of Car Services')],
                ['22000', '+', t('International standard process and large factory system')],
                ['500000', '+', t('Employees in the whole system include many leading engineers')],
                ['99', '%', t('Service technology to satisfy customers needs and interests')]
              ].map((value, index) => (
                <div key={index} className="p-5 w-full sm:w-1/2 lg:w-1/4">
                  <p className="text-CS_text_color text-6xl pb-4">
                    <Counter endValue={value[0]} duration={0.5} useInView={elements[c++]} />
                    <span>{value[1]}</span>
                  </p>
                  <p className="div_before pt-3">{value[2]}</p>
                </div>
              ))}
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
                <Btnstyle>{t('All Services')}</Btnstyle>
              </div>
            </div>

            <div className="flex flex-wrap pt-5">
              {[
                [
                  t('BRAKE REPAIR'),
                  t('You get used to your brakes. Brake pads and rotors wear out from the immense friction and heat they encounter. Air gets into brake lines.…'),
                  '/assets/imgs/homepage/sec3/Icon-6b.png',

                  '/services/brake-repair'
                ],
                [
                  t('TIRE CHANGE'),
                  t('If you need a tire change, it\'s important to choose the right tires for your vehicle and driving conditions. Our experts can help you select the perfect tires and install them professionally.'),
                  '/assets/imgs/homepage/sec3/Icon-7b.png',
                  '/services/tire-change'
                ],
                // Add more service entries as needed
              ].map((service, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-5 px-3">
                  <div className="bg-white p-5">
                    <div className="mb-5">
                      <img src={service[2]} alt={service[0]} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-CS_text_color mb-3">{service[0]}</h3>
                    <p className="text-gray-600">{service[1]}</p>
                    <div className="flex justify-center mt-5">
                      <Btnstyle to={service[3]}>{t('Learn More')}</Btnstyle>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-72 pb-36 bg-CS_card" dir={dir}>
          <div className="container px-5">
            {/* Add your contact form component here */}
            <Contact />
          </div>
        </section>
      </Layout>
    </>
  );
}
