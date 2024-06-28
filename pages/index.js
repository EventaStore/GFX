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
  var dir = isarabic ? "rtl" : "ltr"
  return (
    <>
      <Layout noBreadcrumb="d-none">
  
      </Layout>
    </>
  );
}
