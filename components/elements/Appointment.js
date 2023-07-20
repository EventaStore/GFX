import React, { useState } from 'react';
import AnimatedSentence from 'components/elements/SentenceAnimation';
import { useInView } from 'react-intersection-observer';
import Btnstyle from './Btnstyle'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Appointment() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .6,
    });
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
    var dir = currentLanguage == "ar" ? "rtl" : "ltr"

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/setBook', formData)
            .then(response => {
                // Handle success response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="container px-4 mx-auto" dir={dir}>
          <AnimatedSentence className="text-3xl font-bold text-CS_text_color pb-10" sentence={t("REQUEST AN APPOINTMENT ONLINE")} useInView={{ ref, inView }} />
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="name" className="label-style">{t("Your Name")}</label>
              <input type="text" id="name" className="input-style" onChange={handleChange} required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="phone" className="label-style">{t("Your Phone")}</label>
              <input type="phone" id="phone" className="input-style" onChange={handleChange} required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="date" className="label-style">{t("Select Date")}</label>
              <input type="date" id="date" className="input-style" onChange={handleChange} required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="time" className="label-style">{t("Select Time")}</label>
              <input type="time" id="time" className="input-style" onChange={handleChange} required />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="label-style">{t("Your Message")}</label>
              <textarea id="message" className="input-style" onChange={handleChange} ></textarea>
            </div>
          </div>
          <div className="mt-6">
          <Btnstyle type="submit">{t("Submit")}</Btnstyle>
          </div>
        </div>
      </form>

    );
}

export default Appointment;
