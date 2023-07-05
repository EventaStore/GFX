import React, { useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import $ from 'jquery'
import getmode from '../../util/storage'

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

const ProductSlider = () => {
  useEffect(() => {
    const swiper = new SwiperCore('.product-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on: {
        init: function () {

          var index = this.activeIndex;

          var target = $('.product-slider__item').eq(index).data('target');


          $('.product-img__item').removeClass('active');
          $('.product-img__item#' + target).addClass('active');
        }
      },
    });

    swiper.on('slideChange', function () {
      var index = this.activeIndex;
      var target = $('.product-slider__item').eq(index).data('target');
      $('.product-img__item').removeClass('active');
      $('.product-img__item#' + target).addClass('active');

      if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
      } else {
        $('.next').removeClass('disabled');
      }

      if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
      } else {
        $('.prev').removeClass('disabled');
      }
    });

    $(".js-fav").on("click", function () {
      $(this).find('.heart').toggleClass("is-active");
    });

    // Cleanup function to destroy the Swiper instance
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  var mode = ""
  if (typeof window !== "undefined")
    mode = !getmode() ? "light" : "dark"
  var path = 'assets/imgs/homepage/slider'
  return (
    <>
        <div className="wrapper object-contain">
        <div className="content">
          <div className="bg-shape">
            <img src={`${path}/${mode}/car-care.png`} alt="" />
          </div>

          <div className="product-img">

            <div className="product-img__item" id="img1">
              <img src={`${path}/${mode}/item-1.png`}
                alt="star wars" className="product-img__img" />
            </div>

            <div className="product-img__item" id="img2">
                <img src={`${path}/${mode}/item-2.png`}
                alt="star wars" className="product-img__img" />
            </div>

            <div className="product-img__item" id="img3">
                <img src={`${path}/${mode}/item-3.png`}
                alt="star wars" className="product-img__img" />
            </div>

            <div className="product-img__item" id="img4">
                <img src={`${path}/${mode}/item-4.png`}
                alt="star wars" className="product-img__img" />
            </div>
          </div>
          <div className="product-slider">
            <button className="prev disabled">
              <span className="icon">
                <svg className="icon icon-arrow-right">
                  <use href="#icon-arrow-left"></use>
                </svg>
              </span>
            </button>
            <button className="next">
              <span className="icon">
                <svg className="icon icon-arrow-right">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </span>
            </button>

            <div className="product-slider__wrp swiper-wrapper">
              <div className="product-slider__item swiper-slide" data-target="img4">
                <div className="product-slider__card">
                  <img src={`${path}/${mode}/item-4-bg.png`}
                    alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      STORMTROPER <br />
                      HELMET
                    </h1>
                    <span className="product-slider__price">$1.299,<sup>99</sup></span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">HELMET SIZE</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type5" />
                            <span className="product-labels__txt">S</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type5" />
                            <span className="product-labels__txt">M</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type5" />
                            <span className="product-labels__txt">L</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type5" />
                            <span className="product-labels__txt">XL</span>
                          </label>

                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                              viewBox="0 0 100 100">

                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300"
                                stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY RATE</span>
                      </div>

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                        ADD TO CART
                      </button>

                      <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO
                        WISHLIST</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-slider__item swiper-slide" data-target="img1">
                <div className="product-slider__card">
                  <img src={`${path}/${mode}/item-4-bg.png`}
                    alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      IMPERIAL ARMY’S <br /> TIE FIGHTER
                    </h1>
                    <span className="product-slider__price">$9.999,<sup>99</sup></span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">ENGINE UNIT</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type1"
                            />
                            <span className="product-labels__txt">P-S4 TWIN</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type1" />
                            <span className="product-labels__txt">P-W401</span>
                          </label>
                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                              viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stop="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stop="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="225, 300"
                                stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            75%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY</span>
                      </div>

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                        ADD TO CART
                      </button>

                      <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO
                        WISHLIST</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-slider__item swiper-slide" data-target="img2">
                <div className="product-slider__card">
                  <img src={`${path}/${mode}/item-4-bg.png`}
                  
                  alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      KYLO REN'S <br /> LIGHTSABER
                    </h1>
                    <span className="product-slider__price">$1.699,<sup>99</sup></span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">VOLTAGE RANGE</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type3"
                            />
                            <span className="product-labels__txt">2000 <sup>WATT</sup></span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type3" />
                            <span className="product-labels__txt">2800 <sup>WATT</sup></span>
                          </label>
                        </div>

                        <div className="product-labels__title">LASER SIZE</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">S</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2"
                            />
                            <span className="product-labels__txt">M</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">L</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">XL</span>
                          </label>

                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                              viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stop="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stop="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300"
                                stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY</span>
                      </div>

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                        ADD TO CART
                      </button>

                      <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO
                        WISHLIST</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-slider__item swiper-slide" data-target="img3">
                <div className="product-slider__card">
                  <img src={`${path}/${mode}/item-4-bg.png`}
                    alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      IMPERIAL ARMY'S <br />
                      DEATH STAR
                    </h1>
                    <span className="product-slider__price">$9.999,<sup>99</sup></span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">HYPERDRIVE RATING</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6"
                            />
                            <span className="product-labels__txt">CLASS 4</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" />
                            <span className="product-labels__txt">CLASS 20</span>
                          </label>
                        </div>

                        <div className="product-labels__title">ARMANENT</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7"
                            />
                            <span className="product-labels__txt">SUPERLASER</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" />
                            <span className="product-labels__txt">TURBOLASER</span>
                          </label>
                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                              viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stop="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stop="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300"
                                stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY RATE</span>
                      </div>

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                        ADD TO CART
                      </button>

                      <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO
                        WISHLIST</button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <svg className="hidden" hidden>
        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
          <path
            d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z">
          </path>
        </symbol>
        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
          <path
            d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z">
          </path>
        </symbol>
      </svg>
    </>
  );
};

export default ProductSlider;



/*
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
       
    </Swiper>
  );
};
*/