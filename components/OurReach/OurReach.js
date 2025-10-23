import { AlumniReachImgNames, AlumniReachLinks } from '../../data';
import styles from './HomeReach.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

const OurReach = () => {
  let groups = [];
  const reachRef = useRef(null);

  for (let i = 0; i < AlumniReachImgNames.length; i += 5) {
    let group = [];

    for (let j = i; j < i + 5; j++) {
      if (j < AlumniReachImgNames.length) {
        const obj = {
          name: AlumniReachImgNames[j],
          link: AlumniReachLinks[j],
        };

        group.push(obj);
      } else {
        break;
      }
    }

    groups.push(group);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRight() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
  }

  function handleLeft() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex == 0) {
        return groups.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  }

  function handleCircle(num) {
    setCurrentIndex(num);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
      }, 1000);
    }, 5000);

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

    if (reachRef.current) {
      observer.observe(reachRef.current);
    }

    return () => {
      clearInterval(interval);
      if (reachRef.current) {
        observer.unobserve(reachRef.current);
      }
    };
  }, [groups.length]);

  return (
    <>
      <div className={`${styles.reach} ${styles.hidden}`} ref={reachRef}>
        <h1>University Reach</h1>

        <div className={`${styles.reachGroup}`}>
          {groups[currentIndex].map((obj, id) => {
            return (
              <a href={`${obj.link}`}>
                <img
                  src={`/static/images/reach/${obj.name}`}
                  alt=''
                  className={styles.reachImg}
                  key={`alumni_reach_${currentIndex * 4 + id}`}
                ></img>
              </a>
            );
          })}
        </div>

        <div
          className={styles.btnGrp}
          role='toolbar'
          aria-label='University reach navigation'
        >
          <button
            type='button'
            className={styles.navBtn}
            onClick={handleLeft}
            aria-label='Previous logos'
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className={styles.dots}>
            {groups.map((group, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  type='button'
                  key={`reach_dot_${idx}`}
                  className={`${styles.indicator} ${
                    isActive ? styles.indicatorActive : ''
                  }`}
                  onClick={() => handleCircle(idx)}
                  aria-label={`Show logo group ${idx + 1}`}
                  aria-pressed={isActive}
                ></button>
              );
            })}
          </div>
          <button
            type='button'
            className={styles.navBtn}
            onClick={handleRight}
            aria-label='Next logos'
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default OurReach;
