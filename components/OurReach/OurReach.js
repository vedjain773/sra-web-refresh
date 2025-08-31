import { AlumniReachImgNames, AlumniReachLinks } from '../../data';
import styles from './HomeReach.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft, faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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

  return (
    <>
      <div className={styles.reach}>
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

        <div className={styles.btnGrp}>
          <FontAwesomeIcon icon={faArrowLeft} size='lg' className={styles.btn} onClick={handleLeft} />
          {groups.map((group, idx) => {
            return (
              <FontAwesomeIcon icon={faCircle} size={currentIndex == idx ? 'sm' : '2xs'} onClick={() => handleCircle(idx)} />
            );
          })}
          <FontAwesomeIcon icon={faArrowRight} size='lg' className={styles.btn} onClick={handleRight} />
        </div>
      </div>
    </>
  );
};

export default OurReach;
