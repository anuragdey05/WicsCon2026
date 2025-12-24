import { useState, useEffect } from "react";

const useCountUp = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const isDecimal = !Number.isInteger(endValue);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Handle decimal numbers differently from integers
      if (isDecimal) {
        setCount(Math.round(progress * endValue * 10) / 10);
      } else {
        setCount(Math.floor(progress * endValue));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration, isDecimal]);

  return count;
};

export default useCountUp;
