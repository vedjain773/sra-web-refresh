import React, { useEffect, useRef } from 'react';
import styles from './WhatWeDo.module.scss';

const WhatWeDo = () => {
  const whatWeDoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (whatWeDoRef.current) {
      observer.observe(whatWeDoRef.current);
    }

    return () => {
      if (whatWeDoRef.current) {
        observer.unobserve(whatWeDoRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.whatWeDo} ${styles.hidden}`} ref={whatWeDoRef}>
      <h2>What We Do</h2>
      <div className={styles.whatWeDoGrid}>
        <div className={styles.whatWeDoItem}>
          <h3>Robotics</h3>
          <p>We build robots that can perceive, understand, and act in the real world. From autonomous vehicles to humanoid robots, we are pushing the boundaries of what is possible.</p>
        </div>
        <div className={styles.whatWeDoItem}>
          <h3>Automation</h3>
          <p>We design and build automated systems that can perform tasks with speed, precision, and reliability. We are working to create a future where automation is a seamless part of our daily lives.</p>
        </div>
        <div className={styles.whatWeDoItem}>
          <h3>Machine Vision</h3>
          <p>We develop algorithms that enable computers to understand and interpret the visual world. Our work in machine vision is helping to power the next generation of intelligent systems.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
