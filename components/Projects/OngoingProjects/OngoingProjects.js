import styles from './OngoingProjects.module.scss';
import Link from 'next/link';
import React, { useState } from 'react';
import { OngoingProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OngoingProjects = () => {
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
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuity in progress.']}
        isHome={false}
      />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Ongoing Projects</h2>
          <p className={styles.sectionDescription}>
            Innovative solutions currently in development, pushing the boundaries of technology
          </p>
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsScroll}>
            {OngoingProjectsData.map((project, idx) => (
              <div
                key={`ongoing_project_${idx}`}
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
                  <div className={styles.projectImageFallback} style={{display: 'none'}}>
                    <span>🔄</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectDescription}>
                    {project.sub.length > 120 
                      ? `${project.sub.substring(0, 120)}...` 
                      : project.sub
                    }
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
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      View on GitHub
                    </a>
                  </div>
                  
                  <div className={styles.teamSection}>
                    <h4>Development Status</h4>
                    <p className={styles.teamPlaceholder}>
                      This project is currently in active development
                    </p>
                  </div>
                </div>
                
                <div className={styles.modalRight}>
                  {selectedProject.imgName ? (
                    <div className={styles.modalImage}>
                      <img 
                        src={`/static/images/${selectedProject.imgName}`} 
                        alt={selectedProject.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={styles.modalImageFallback} style={{display: 'none'}}>
                        <span>🔄</span>
                        <p>Image not available</p>
                      </div>
                    </div>
                  ) : selectedProject.modelLink ? (
                    <div className={styles.modalModel}>
                      <iframe 
                        className={styles.iframeModel}
                        allowFullScreen  
                        width="640"
                        height="480" 
                        loading="lazy" 
                        frameBorder="0" 
                        src={selectedProject.modelLink}
                      />
                    </div>
                  ) : null}
                  
                  <div className={styles.projectBadge}>
                    <span>In Progress</span>
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

// OngoingProjectCard component removed - now using card layout directly in main component

export default OngoingProjects;