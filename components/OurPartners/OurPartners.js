import React, { useEffect, useRef } from 'react';
import styles from './OurPartners.module.scss';
import { CsrPartners } from '../../data/corporateSupport';
import {
  diamondSponsors,
  goldSponsors,
  silverSponsors,
} from '../../data/sponsors';
import Image from 'next/image';

const OurPartners = () => {
  const partnersRef = useRef(null);

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

    if (partnersRef.current) {
      observer.observe(partnersRef.current);
    }

    return () => {
      if (partnersRef.current) {
        observer.unobserve(partnersRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.ourPartners} ${styles.hidden}`} ref={partnersRef}>
      <h2>Our Partners</h2>
      <div className={styles.partnersGrid}>
        {CsrPartners.map((partner, index) => (
          <a
            href={partner.link}
            key={index}
            className={styles.partnerItem}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={`/static/images/sponsors/${partner.image}`}
              alt={partner.name}
              width={80}
              height={80}
            />
            <p>{partner.name}</p>
            <p>{partner.amount}</p>
            <p>{partner.msg}</p>
          </a>
        ))}
        <h3>Diamond Sponsors</h3>
        {diamondSponsors.map((sponsor, index) => (
          <a
            href={sponsor.link}
            key={index}
            className={styles.partnerItem}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={`/static/images/sponsors/${sponsor.image}`}
              alt={sponsor.image.split('.')[0]}
              width={80}
              height={80}
            />
            <p>{sponsor.image.split('.')[0]}</p>
          </a>
        ))}
        <h3>Gold Sponsors</h3>
        {goldSponsors.map((sponsor, index) => (
          <a
            href={sponsor.link}
            key={index}
            className={styles.partnerItem}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={`/static/images/sponsors/${sponsor.image}`}
              alt={sponsor.image.split('.')[0]}
              width={80}
              height={80}
            />
            <p>{sponsor.image.split('.')[0]}</p>
          </a>
        ))}
        <h3>Silver Sponsors</h3>
        {silverSponsors.map((sponsor, index) => (
          <a
            href={sponsor.link}
            key={index}
            className={styles.partnerItem}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={`/static/images/sponsors/${sponsor.image}`}
              alt={sponsor.image.split('.')[0]}
              width={80}
              height={80}
            />
            <p>{sponsor.image.split('.')[0]}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
