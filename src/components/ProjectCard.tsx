import './ProjectCard.scss';
import defaultImg from '../assets/images/projects/default.jpg';

interface ProjectCardProps {
  company: string;
  role: string;
  description: string;
  techStack: string[];
  linkGithub: string;
  linkLive: string;
  mockImg: string;
}

export const ProjectCard = ({
  company,
  role,
  description,
  techStack,
  linkGithub,
  linkLive,
  mockImg,
}: ProjectCardProps) => {
  const placeholderImg = defaultImg;

  return (
    <article className="project-card">
      <div className="project-card__img-container">
        <img
          className="project-card__img"
          src={mockImg !== '' ? mockImg : placeholderImg}
          alt={`${company} project mockup`}
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
          <a href={linkGithub} target="_blank" rel="noopener noreferrer">
            Link to GitHub
          </a>
          <a href={linkLive} target="_blank" rel="noopener noreferrer">
            Link to live project
          </a>
        </div>
      </div>
    </article>
  );
};
