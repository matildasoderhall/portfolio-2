import './ProjectCard.scss';
import defaultImg from '../assets/images/projects/default.jpg';

interface ProjectCardProps {
  company: string;
  role: string;
  description: string;
  techStack: string[];
  linkGithub?: string;
  linkLive?: string;
  projectStatus?: string;
  mockImg: {
    height: string;
    width: string;
    src: string;
    backup: string;
  };
}

export const ProjectCard = ({
  company,
  role,
  description,
  techStack,
  linkGithub,
  linkLive,
  mockImg,
  projectStatus,
}: ProjectCardProps) => {
  const placeholderImg = defaultImg;

  return (
    <article className="project-card">
      <div className="project-card__img-container">
        <img
          className="project-card__img"
          src={mockImg.src !== '' ? mockImg.src : placeholderImg}
          alt={`${company} project mockup`}
          height={mockImg.height}
          width={mockImg.width}
          loading="lazy"
        />
      </div>
      <div className="project-card__content">
        <div className="project-card__title">
          <h3 className="project-card__company">{company}</h3>
          <p className="project-card__role">{role}</p>
        </div>
        <p className="project-card__description">{description}</p>
        <ul className="project-card__tech-stack">
          {techStack.map((tech, index) => (
            <li key={index} className="project-card__tech-item">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card__links">
          {linkGithub || linkLive ? (
            <>
              {linkGithub && (
                <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                  Link to GitHub
                </a>
              )}
              {linkLive && (
                <a href={linkLive} target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              )}
            </>
          ) : (
            <p>{projectStatus}</p>
          )}
        </div>
      </div>
    </article>
  );
};
