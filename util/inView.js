import { useInView } from 'react-intersection-observer';

const useAnimatedElement = (threshold) => {
  const elements = [];

  for (let i = 0; i < 20; i++) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: threshold,
    });
    elements.push({ ref, inView });
  }

  return elements;
};

export default useAnimatedElement;