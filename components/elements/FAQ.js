import React, { useState } from 'react';
import FAQ from '../../static_data/toggle_Questions.json'
import { useTranslation } from 'react-i18next';

const FAQElement = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const { t } = useTranslation();
    
    return (
        <div className={`bg-CS_card p-5 mt-4 overflow-hidden w-full ${isOpen ? "openQ" : "closeQ"}`} onClick={toggleOpen}>
            <div className={`text-xl mb-6 flex justify-between ${isOpen ? "text-CS_text_active" : ""}`}>{t(question)}
                {isOpen ? <i className="fi-rs-angle-small-up"></i> : <i className="fi-rs-angle-small-right"></i>}
            </div>
            <p>
                {t(answer)}
            </p>
        </div>
    );

};


const FAQSection = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const dir = currentLanguage === "ar" ? "rtl" : "ltr"
    
    return (
        <div className="faq-section container max-w-5xl" dir={dir}>
            {FAQ.map((data, index) => (
                <FAQElement key={index} question={data.Q} answer={data.A} />
            ))}
        </div>
    );
};


export default FAQSection;
