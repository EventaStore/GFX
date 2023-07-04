import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import service_feature from "../static_data/service_feature.json";
import service_content from "../static_data/services_content.json";
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import Btnstyle from "../components/elements/Btnstyle";

const Services = () => {
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.substring(1);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(service_content[path]);
    }
  }, [path]);
  const c = (content) => data ? data[content]:""
  return (
    <Layout parent="Home" sub="service" subChild={path} parentURL="/" title={c('page title')}>
      <section className='container grid grid-cols-1 lg:grid-cols-4 gap-12 pt-40'>
        <div className='col-span-3'>
          <div className="overflow-hidden">
            {data && (
              <Swiper
                effect="fade" // Set the fading effect
                loop={true} // Enable loop mode
                autoplay={{ delay: 1000 }} // Set the autoplay options
              >
                <SwiperSlide>
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={c('image 1')} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={c('image 2')} />
                </SwiperSlide>
              </Swiper>
            )}
          </div>
          <article className='py-8 text-CS_text_color opacity-80 text-lg'>
            Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.
          </article>
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
              { data ? data['text editor 1']['h3'] :"" }
            </p>
            {data &&  <Btnstyle>{'GET SERVICE'}</Btnstyle>}
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
    </Layout>
  );
};

export default Services;
