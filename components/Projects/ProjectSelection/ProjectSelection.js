import Link from 'next/link';
import styles from './ProjectSelection.module.scss';
import Head from 'next/head';

const ProjectSelection = () => {
  const categories = [
    {
      id: 1,
      name: 'Ongoing Projects',
      slug: 'ongoing',
      description: 'Current active projects in development',
      // icon: '🚀', // Removed
      count: 3
    },
    {
      id: 2,
      name: 'Flagship Projects',
      slug: 'flagship', 
      description: 'Our most innovative and impactful projects',
      // icon: '⭐', // Removed
      count: 3
    },
    {
      id: 3,
      name: 'Eklavya Projects',
      slug: 'eklavya',
      description: 'Annual learning initiative projects by year',
      // icon: '🎓', // Removed
      count: '2017-2024'
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | SRA VJTI</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.titleCard}>
              <h1 className={styles.title}>Our Projects</h1>
              <p className={styles.subtitle}>Innovation, Research & Development</p>
            </div>
          </div>
        </div>
        
        <div className={styles.cardsContainer}>
          <div className={styles.cardsWrapper}>
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/projects/${category.slug}`} 
                className={styles.card}
              >
                {/* Removed the cardIcon div block */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.name}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCount}>{category.count} projects</span>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </div>
                <div className={styles.cardGlow}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSelection;