import React, { useState } from 'react';
import AnimatedSentence from 'components/elements/SentenceAnimation';
import { useInView } from 'react-intersection-observer';
import Btnstyle from './Btnstyle'

function Appointment() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .6,
      });
    return (
        <div className="container px-4 mx-auto">
            <AnimatedSentence className="text-3xl font-bold text-CS_text_color pb-10" sentence="REQUEST AN APPOINTMENT ONLINE" useInView={{ ref, inView }} />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="label-style">Your Name</label>
                    <input type="text" id="name" className="input-style" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="email" className="label-style">Your Email</label>
                    <input type="email" id="email" className="input-style" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="date" className="label-style">Select Date</label>
                    <input type="date" id="date" className="input-style" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="time" className="label-style">Select Time</label>
                    <input type="time" id="time" className="input-style" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="message" className="label-style">Your Message</label>
                    <textarea id="message" className="input-style"></textarea>
                </div>
            </div>
            <div className="mt-6">
                <Btnstyle>Submit</Btnstyle>
            </div>
        </div>
    );
}

export default Appointment;
