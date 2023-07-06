import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import service_content from "../static_data/services_content.json";
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

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setData(service_content[path]);
  //   }
  // }, [path]);
  const data = service_content[path]
  const cp = (content) => data ? data[content] : ""
  const threshold = .6
  const elements = useAnimatedElement(threshold)
  if (!data)
    return (<></>)
  var c = 1
  return (
    <Layout parent="Home" sub="service" subChild={path} parentURL="/" title={cp('page title')}>
      <section className='container grid grid-cols-1 lg:grid-cols-4 sm:gap-0 lg:gap-12 pt-40'>
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
        </div>
        <div className='col-span-1 grid grid-cols-1 gap-3 mt-16 lg:mt-0'>
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

              <a href="tel:+971563272736"><p className='hover:text-slate-800'>+971 56 327 2736</p></a>
              <a href="tel:+971505108831"><p className='hover:text-slate-800'>+971 50 510 8831</p></a>
            </div>
            <div>
              <a href="mailto:gxfcar@gmail.com"><p>gxfcar@gmail.com</p></a>
            </div>
          </div>
          <div className='contact-cart'>
            <h3>
              ADDRESS
            </h3>
            <div>
              <p>Forsan central mall</p>
              <p>Khalifa A</p>
              <p>Abu Dhabi</p>
            </div>
          </div>
          <div className='contact-cart'>
            <h3>
              OPEN HOURS
            </h3>
            <div className='flex justify-between'>
              <p>Saturday – Thursday</p>
              <p>10 am – 11 pm</p>
            </div>
            <div className='flex justify-between'>
              <p>Friday</p>
              <p>2 pm – 11 pm</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className='container'>
          <h2 className='mt-5'>
            <AnimatedSentence className="text-CS_text_color" sentence={data["question"]} useInView={elements[c++]} />
          </h2>
          <div className='grid grid-cols-2 xl:grid-cols-3 gap-3 mt-16'>
            {data.reasons.map((e, i) =>
              <div ref={elements[c].ref}>
                {elements[c++].inView &&
                  <div key={i} className='border-CS_Soft_border_color bg-CS_bg_color border-solid border-2 p-3 wow animate__animated animate__slideInLeft h-full'
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className=''>
                      <h5>{e.title}</h5>
                      <br />
                      <p>{e.description}</p>
                    </div>
                  </div>
                }
              </div>
            )}
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
