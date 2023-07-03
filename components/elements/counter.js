import React, { useEffect, useState } from 'react';

const Counter = ({ endValue, duration , useInView}) => {
  const [count, setCount] = useState(0);
  const increment = endValue / (duration * 1000 / 10); // Calculate the increment per interval

  useEffect(() => {
    if (useInView.inView) {
      const interval = setInterval(() => {
        if (count < endValue) {
          setCount((prevCount) => {
            const newCount = prevCount + increment;
            return newCount >= endValue ? endValue : newCount; // Prevent exceeding endValue
          });
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [count, endValue, useInView.inView, increment]);

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}k`;
    } else {
      return Math.floor(count);
    }
  };

  return (
    <span ref={useInView.ref} className='animated-div counter-num'>
      {useInView.inView ? formatCount(count) : 0}
    </span>
  );
};

export default Counter;
