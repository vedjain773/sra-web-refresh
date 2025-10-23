import {
  AboutUsText,
  AboutVJTI,
  AboutUsTeamText,
  AboutUsAlumniText,
  AboutUsImages,
} from '../../data';
import styles from './HomeAboutUs.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const HomeAboutUs = () => {
  const aboutUsRef = useRef(null);

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

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`${styles.aboutUs} ${styles.hidden}`} id='About-us' ref={aboutUsRef}>
        <div className={styles.aboutUsMain}>
          <h1>About Us</h1>
          <p>{AboutUsText}</p>
          <h1>About VJTI</h1>
          <p>{AboutVJTI}</p>
        </div>
        <div className={styles.aboutUsTeam}>
          <p>{AboutUsTeamText}</p>
          <img
            src={`/static/images/${AboutUsImages.newgroup}`}
            alt='SRA Team group photo'
          />
        </div>
        <div className={styles.aboutUsAlumni}>
          <p>{AboutUsAlumniText}</p>
          <img
            src={`/static/images/${AboutUsImages.oldGroup}`}
            alt='SRA Team group photo'
          />
        </div>
      </div>
      <div className={styles.ourProjects}>
        <h1>Projects</h1>
        <Link href='/projects/flagship'>
          <button>
            Flagship Projects &nbsp;<span>&#8594;</span>
          </button>
        </Link>
        <Link href='/projects/eklavya'>
          <button>
            Eklavya Projects &nbsp;<span>&#8594;</span>
          </button>
        </Link>
        <Link href='/projects/ongoing'>
          <button>
            Ongoing Projects &nbsp;<span>&#8594;</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeAboutUs;
