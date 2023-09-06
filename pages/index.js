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
import CategoryTab from "../components/ecommerce/categoryTab";
import CategorySlider2 from "../components/sliders/Category2";



export default function Home() {

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const dir = currentLanguage === "ar" ? "rtl" : "ltr"
  return (
    <>
      <head>
        <title>Home : Kamboosha</title>
      </head>
      <Layout noBreadcrumb="d-none">
        <section>
          <Header_slider />
        </section>
        <section className="product-tabs section-padding position-relative" dir={dir}>
          <div className="container">
            <div className="col-lg-12">
              <CategoryTab />
            </div>
          </div>
        </section>
        <section className="popular-categories section-padding">
          <div className="container">
            <div className="section-title" dir={dir}>
              <div className="title">
                  <h3 className={dir === 'rtl' ? 'ml-8' : 'mr-8'}>{t('Shop by Categories')}</h3>
                  <a className="show-all" href="/shop-grid-right">
                    {t('All Categories')}
                    <i className={"fi-rs-angle-"+(dir === 'rtl' ? 'left' : 'right')}></i>
                  </a>
              </div>
              
              
            </div>
            <div className="carausel-8-columns-cover position-relative">
              <div
                className="carausel-8-columns"
                id="carausel-8-columns"
              >
                <CategorySlider2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
