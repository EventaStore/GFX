import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import service_feature from "../static_data/service_feature.json";
import service_content from "../static_data/services_content.json";
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';

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

  return (
    <Layout parent="Home" sub="service" subChild={path} parentURL="/" title={data ? data['page title'] : ''}>
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
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={data['image 1']} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="transition-transform duration-300 h-full w-full brightness-50" src={data['image 2']} />
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
          <div className='bg-CS_card border-CS_Soft_border_color border-solid border-2'></div>
          <div className='bg-CS_card border-CS_Soft_border_color border-solid border-2'></div>
          <div className='bg-CS_card border-CS_Soft_border_color border-solid border-2'></div>
          <div className='bg-CS_card border-CS_Soft_border_color border-solid border-2'></div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
