import React, { useEffect, useState } from 'react';

const AnimatedSentence = ({ sentence, className, useInView }) => {


    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords(sentence.split(' '));
    }, [sentence]);

    return (
    <span ref={useInView.ref}>
            {
                useInView.inView &&
                <span className="animated-sentence">
                    {words.map((word, index) => {
                        const delay = (index * 150) + "ms";
                        return (
                            <span

                                key={index}
                                className={"animated-word " + className}
                                style={{ animationDelay: delay }}
                            >
                                {word}&nbsp;
                            </span>
                        );
                    })}
                </span>}

        </span>

    );
};

export default AnimatedSentence;

