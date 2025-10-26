import styles from './EklavyaProjects.module.scss';
import { EklavyaProjectList } from '../../../data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Hero from '../../Hero/Hero';

const EklavyaProjects = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const years = EklavyaProjectList.map((yearData) => yearData.year).reverse();

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const selectedYearData = EklavyaProjectList.find(
    (data) => data.year === selectedYear
  );

  return (
    <>
      <Hero
        imgName={'eklavya-hero.jpg'}
        title={<>Eklavya Projects</>}
        subtitleList={['Learning through Innovation']}
        isHome={false}
      />

      <div className={styles.container}>
        {!selectedYear ? (
          // year view
          <div className={styles.yearSelection}>
            <div className={styles.header}>
              <h2 className={styles.sectionTitle}>Select Year</h2>
              <p className={styles.sectionDescription}>
                Choose a year to explore the innovative projects developed
                during Eklavya
              </p>
            </div>

            <div className={styles.yearGrid}>
              {years.map((year) => (
                <div
                  key={year}
                  className={styles.yearCard}
                  onClick={() => handleYearSelect(year)}
                >
                  <div className={styles.yearNumber}>{year}</div>
                  <div className={styles.yearProjects}>
                    {
                      EklavyaProjectList.find((data) => data.year === year)
                        ?.projects.length
                    }{' '}
                    Projects
                  </div>
                  <div className={styles.yearArrow}>→</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // projects of the selected year
          <div className={styles.projectsView}>
            <div className={styles.header}>
              <button
                className={styles.backButton}
                onClick={() => setSelectedYear(null)}
              >
                ← Back to Years
              </button>
              <h2 className={styles.sectionTitle}>
                Eklavya {selectedYear} Projects
              </h2>
              <p className={styles.sectionDescription}>
                {selectedYearData?.projects.length} innovative projects from{' '}
                {selectedYear}
              </p>
            </div>

            <div className={styles.projectsContainer}>
              <div className={styles.projectsScroll}>
                {selectedYearData?.projects.map((project, idx) => (
                  <div
                    key={`project_${idx}`}
                    className={styles.projectCard}
                    onClick={() => handleProjectSelect(project)}
                  >
                    <div className={styles.projectImage}>
                      <img
                        src={`/static/images/${project.imgName}`}
                        alt={project.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div
                        className={styles.projectImageFallback}
                        style={{ display: 'none' }}
                      >
                        <span>...</span> {/* Replaced emoji */}
                      </div>
                    </div>
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.name}</h3>
                      <p className={styles.projectDescription}>
                        {project.sub.length > 100
                          ? `${project.sub.substring(0, 100)}...`
                          : project.sub}
                      </p>
                      <div className={styles.projectMeta}>
                        <span className={styles.viewMore}>View Details</span>
                        <span className={styles.projectArrow}>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedProject && (
          <div className={styles.modal} onClick={handleCloseModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={handleCloseModal}>
                ×
              </button>

              <div className={styles.modalBody}>
                <div className={styles.modalLeft}>
                  <h2 className={styles.modalTitle}>{selectedProject.name}</h2>
                  <div className={styles.modalDescription}>
                    {selectedProject.sub}
                  </div>

                  <div className={styles.modalLinks}>
                    <a
                      href={selectedProject.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.githubLink}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      View on GitHub
                    </a>
                  </div>

                  <div className={styles.teamSection}>
                    <h4>Team Members</h4>
                    <p className={styles.teamPlaceholder}>
                      Team member information will be added for future projects
                    </p>
                  </div>
                </div>

                <div className={styles.modalRight}>
                  <div className={styles.modalImage}>
                    <img
                      src={`/static/images/${selectedProject.imgName}`}
                      alt={selectedProject.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className={styles.modalImageFallback}
                      style={{ display: 'none' }}
                    >
                      <span>...</span> {/* Replaced emoji */}
                      <p>Image not available</p>
                    </div>
                  </div>

                  <div className={styles.projectYear}>
                    <span>Eklavya {selectedYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EklavyaProjects;
