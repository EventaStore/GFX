import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import service_feature from "../static_data/service_feature.json";
import package_content from "../static_data/packages_content.json";
import { useRouter } from 'next/router';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Btnstyle from "../components/elements/Btnstyle";
import useAnimatedElement from '../util/inView';
import AnimatedSentence from '../components/elements/SentenceAnimation';
import Recentwork from '../components/elements/recent_work'
import FAQ from '../components/elements/FAQ'
import Contact from '../components/elements/Appointment'
SwiperCore.use([Autoplay]);


const Services = () => {
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.substring(1);

  const [data, setData] = useState(null);

  useEffect(() => {
    
      setData(package_content[path]);
    
  }, [path]);
  const cp = (content) => data ? data[content] : ""
  const threshold = .6
  const elements = useAnimatedElement(threshold)
  // return (<></>)
  var c = 1
  return (
    <Layout parent="Home" sub="service" subChild={path} parentURL="/" title={cp('page title')}>
      <section className='container pt-40'>
    <div>
      <h1>Coming Soon</h1>
      <p>We're working hard to bring you an amazing new website.</p>
      <p>Stay tuned for updates!</p>
    </div>
    </section>
    </Layout>

  );
  return (
    <Layout parent="Home" sub="service" subChild={path} parentURL="/" title={cp('page title')}>
      <section className='container grid grid-cols-1 lg:grid-cols-4 gap-12 pt-40'>
        <div className='col-span-3'>
          <div className="overflow-hidden h-72">
            {data && (
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                effect='fade'
                autoplay={{ delay: 4000 }}
              >
                <SwiperSlide>
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={cp('image 1')} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={cp('image 2')} />
                </SwiperSlide>
              </Swiper>
            )}
          </div>

          {
            data && (

              <>
                <h2 className='mt-10'>
                  <AnimatedSentence className="text-CS_text_color" sentence={data["text editor 1"]["h3"]} useInView={elements[c++]} />
                </h2>
                <article className='pt-4 text-CS_text_color opacity-80 text-lg'>
                  {data["text editor 1"]["p1"]}
                </article>
                {
                  data["text editor 1"]["p2"] &&
                  <article className='pt-4 text-CS_text_color opacity-80 text-lg'>
                    {data["text editor 1"]["p2"]}
                  </article>
                }
                {
                  data["text editor 2"] &&
                  <>
                    <h2 className='mt-10'>
                      <AnimatedSentence className="text-CS_text_color" sentence={data["text editor 2"]["h3"]} useInView={elements[c++]} />
                    </h2>
                    <article className='pt-4 text-CS_text_color opacity-80 text-lg'>
                      {data["text editor 2"]["p1"]}
                    </article>
                    {
                      data["text editor 2"]["p2"] &&
                      <article className='pt-4 text-CS_text_color opacity-80 text-lg'>
                        {data["text editor 2"]["p2"]}
                      </article>
                    }
                  </>
                }


              </>
            )
          }

          <div className='grid grid-cols-3 gap-3'>
            {service_feature.map((e, i) =>
              <div key={i} className='flex gap-3 items-center'>
                <i className="fas fa-check-square text-CS_text_active text-xl" />
                <p>{e}</p>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 grid grid-cols-1 gap-3'>
          <div className='contact-cart'>
            <h3>
              CONTACT US
            </h3>
            <p>
              {data ? data['text editor 1']['h3'] : ""}
            </p>
            {data && <Btnstyle>{'GET SERVICE'}</Btnstyle>}
          </div>
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
      <section className="pt-32">
        <Recentwork />
      </section>
      <section className="pt-32">
        <FAQ />
      </section>
      <section className="pt-44">
        <Contact />
      </section>
    </Layout>
  );

};

export default Services;