import { NotificationData } from '../../data';
import styles from './HomeNotifs.module.scss';
import { useEffect, useRef } from 'react';

const HomeNotifications = () => {
  const notifsRef = useRef(null);

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

    if (notifsRef.current) {
      observer.observe(notifsRef.current);
    }

    return () => {
      if (notifsRef.current) {
        observer.unobserve(notifsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.notifs} ${styles.hidden}`}
        id='notifs'
        ref={notifsRef}
      >
        <h1>Notifications</h1>
        <div className={styles.notifsMain}>
          {NotificationData.map((notif, idx) => {
            return (
              <div className={styles.notif} key={`notification_${idx}`}>
                {notif}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeNotifications;
