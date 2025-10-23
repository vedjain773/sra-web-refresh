import { Achievementlist } from '../../data';
import Hero from '../Hero/Hero';
import styles from './Achievements.module.scss';
import { useEffect, useRef } from 'react';

const Achievements = () => {
  const hoverTimeouts = useRef({});

  useEffect(() => {
    // Cleanup timeouts on unmount
    return () => {
      Object.values(hoverTimeouts.current).forEach((timeout) =>
        clearTimeout(timeout)
      );
    };
  }, []);

  const handleMouseEnter = (e, achIndex) => {
    const card = e.currentTarget;
    const timeoutId = setTimeout(() => {
      card.classList.add(styles.showDetail);
    }, 800); // 800ms delay before showing detail

    hoverTimeouts.current[achIndex] = timeoutId;
  };

  const handleMouseLeave = (e, achIndex) => {
    const card = e.currentTarget;
    clearTimeout(hoverTimeouts.current[achIndex]);
    card.classList.remove(styles.showDetail);
  };

  const getDetailText = (achName) => {
    // You can customize these messages based on the achievement
    // For now, returning a formatted version of the achievement name
    return `Achievement: ${achName}`;
  };

  return (
    <>
      <Hero
        imgName={'achievements-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Achievements</>}
        subtitleList={["What we're proud of!"]}
        isHome={false}
      />
      <div className={styles.achievements} id='is'>
        {Achievementlist.map((achYear, yearIdx) => {
          return (
            <div className={styles.achYear} key={`year_${yearIdx}`}>
              <h3>{achYear.year}</h3>
              <div className={styles.achList}>
                {achYear.achs.map((ach, achIdx) => {
                  const uniqueIndex = `${yearIdx}-${achIdx}`;
                  return (
                    <div
                      className={styles.ach}
                      key={`achievement_${achIdx}`}
                      onMouseEnter={(e) => handleMouseEnter(e, uniqueIndex)}
                      onMouseLeave={(e) => handleMouseLeave(e, uniqueIndex)}
                      data-detail={getDetailText(ach.name)}
                    >
                      <div
                        style={{
                          backgroundImage: `url("/static/images/${ach.imgName}")`,
                        }}
                        className={styles.achImg}
                      ></div>
                      <div className={styles.achName}>{ach.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Achievements;
