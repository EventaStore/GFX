import React from 'react';
import recent_works from "../../static_data/recent_works.json";
import useAnimatedElement from '../../util/inView';
import AnimatedSentence from '../../components/elements/SentenceAnimation';
import { useTranslation } from 'react-i18next';


const RecentWorksComponent = () => {
  const threshold = 0.6;
  const elements = useAnimatedElement(threshold);
  let c = 0;

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const ar = currentLanguage === 'ar';
  var dir = ar ? "rtl" : "ltr"
  
  return (
    <div className="container" dir={dir}>
      <AnimatedSentence
        className="text-5xl font-bold text-CS_text_color pb-10"
        sentence={t("OUR RECENT WORKS")}
        useInView={elements[c++]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recent_works.map((e, i) => (
          <div
            key={i}
            className={
              elements[c].inView
                ? 'recent-works-card animate__animated animate__fadeInUp'
                : 'opacity-0'
            }
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="overflow-hidden">
              <img
                ref={elements[c++].ref}
                className="hover:scale-110 h-96 w-full transition duration-500 brightness-90 hover:brightness-50 object-cover"
                src={e}
              />
            </div>
            <span className="text-lg font-bold text-white text-center w-full">
              {t('OUR RECENT WORKS')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorksComponent;
