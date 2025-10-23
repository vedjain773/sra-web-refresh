import styles from './Hero.module.scss';
import { useEffect, useState } from 'react';

const fonts = ['Playfair Display', 'Space Grotesk', 'Inter'];

function Hero({
  imgName,
  subtitleList,
  isHome,
  backgroundPosition = 'center',
}) {
  const [font, setFont] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setFont(randomFont);

    const animationFrame = requestAnimationFrame(() => setIsReady(true));

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(7, 5, 18, 0.42), rgba(10, 6, 24, 0.32)), url("/static/images/hero/${imgName}")`,
          backgroundPosition: backgroundPosition,
        }}
        className={`${styles.hero} ${isReady ? styles.heroReady : ''}`}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroHead} style={{ fontFamily: font }}>
            SRA
          </div>
          <div className={styles.heroSub}>
            {subtitleList.map((heroTag, index) =>
              subtitleList.length !== index + 1 ? (
                <span key={`hero_${index}`}>
                  {heroTag}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                </span>
              ) : (
                <span key={`hero_${index}`}>{heroTag}</span>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;