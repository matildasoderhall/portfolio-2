import { ProjectCard } from '../components/ProjectCard';
import { ProjectsData } from '../data/projects';
import './ProjectSection.scss';

export const ProjectSection = () => {
  return (
    <div className="project-section" id="projects">
      <h2 className="project-section__title">Selected projects</h2>
      <div className="project-section__content">
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            company={project.company}
            role={project.role}
            description={project.description}
            techStack={project.techStack}
            linkGithub={project.linkGithub}
            linkLive={project.linkLive}
            mockImg={project.mockImg}
            projectStatus={project.projectStatus}
          />
        ))}
      </div>
    </div>
  );
};
