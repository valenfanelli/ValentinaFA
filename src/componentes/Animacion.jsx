import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const Animacion = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } /*else {
          setIsVisible(false);
        }*/
      },
      {
        threshold: 0.5, // El 10% del elemento debe ser visible para activar la animación
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animate__animated ${isVisible ? animationClass : ''}`}
    >
      {children}
    </div>
  );
};

export default Animacion;
