import styles from './FlagshipProjects.module.scss';
import { FlagshipProjectsData } from '../../../data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FlagshipProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Hero
        imgName={'flagship-hero.jpg'}
        title={<>Flagship Projects</>}
        subtitleList={['Innovation exemplified.']}
        isHome={false}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Flagship Projects</h2>
          <p className={styles.sectionDescription}>
            Groundbreaking innovations that showcase our technical excellence
            and research capabilities
          </p>
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsScroll}>
            {FlagshipProjectsData.map((project, idx) => (
              <div
                key={`flagship_project_${idx}`}
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
                    {project.sub.length > 120
                      ? `${project.sub.substring(0, 120)}...`
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

                  <div className={styles.projectBadge}>
                    <span>Flagship Project</span>
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

export default FlagshipProjects;
