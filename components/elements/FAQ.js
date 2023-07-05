import React, { useState } from 'react';
import FAQ from '../../static_data/toggle_Questions.json'

const FAQElement = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className='container flex justify-center'>

            <div className={`bg-CS_card p-5 mt-4 overflow-hidden max-w-5xl ${isOpen ? "openQ":"closeQ" }`}  onClick={toggleOpen}>
                <div className={`text-xl mb-6 flex justify-between ${isOpen ? "text-CS_text_active":""}`}>{question}
                    {isOpen ? <i className="fi-rs-angle-small-up"></i> : <i className="fi-rs-angle-small-right"></i>}
                </div>
                <p>
                    {answer}
                </p>
            </div>
        </div>
    );
};


const FAQSection = () => {

    return (
        <div className="faq-section">
            {FAQ.map((data, index) => (
                <FAQElement key={index} question={data.Q} answer={data.A}/>
            ))}
        </div>
    );
};


export default FAQSection;
