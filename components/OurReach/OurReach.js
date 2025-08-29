import { AlumniReachImgNames, AlumniReachLinks } from '../../data';
import styles from './HomeReach.module.scss';
import { useState, useEffect } from 'react';

const OurReach = () => {
  let groups = [];

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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <>
      <div className={styles.reach}>
        <h1>University Reach</h1>

        <div
          className={`${styles.reachGroup} ${
            fade ? styles.fade : styles.noFade
          }`}
        >
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
      </div>
    </>
  );
};

export default OurReach;
