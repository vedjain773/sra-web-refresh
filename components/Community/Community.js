import React, { useEffect, useRef } from 'react';
import styles from './Community.module.scss';
import { AboutVJTI, AboutUsAlumniText } from '../../data/aboutus';

const Community = () => {
  const communityRef = useRef(null);

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

    if (communityRef.current) {
      observer.observe(communityRef.current);
    }

    return () => {
      if (communityRef.current) {
        observer.unobserve(communityRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.community} ${styles.hidden}`} ref={communityRef}>
      <h2>Our Community</h2>
      <div className={styles.communityGrid}>
        <div className={styles.communityItem}>
          <p>{AboutVJTI}</p>
        </div>
        <div className={styles.communityItem}>
          <p>{AboutUsAlumniText}</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
