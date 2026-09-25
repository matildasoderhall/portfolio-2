import { ProfileGraphic } from '../components/ProfileGraphic';
import './AboutSection.scss';

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-section__intro">
        <h2 className="about-section__title">Let's get acquainted.</h2>
        <p className="about-section__bio">
          With a background in the performing arts and front-end development, I
          bring both creativity and analytical thinking to every project. I
          enjoy turning ideas into intuitive digital experiences and thrive both
          in collaborative teams and when working independently.
        </p>
      </div>
      <div className="about-section__skills">
        <div className="about-section_skill-group">
          <p id="design-skills-intro">
            I care about the details — typography, layout, rhythm and the little
            interactions that make an interface feel right.
          </p>
          <ul
            aria-describedby="design-skill-intro"
            className="about-section__skill-list"
          >
            <li>Figma</li>
            <li>Miro</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="about-section__skill-group">
          <p id="system-skills-intro">
            I like getting under the hood too, building the systems and
            interfaces that make an idea work beautifully in practice.
          </p>
          <ul
            aria-describedby="system-skills-intro"
            className="about-section__skill-list"
          >
            <li>Next.js</li>
            <li>React</li>
            <li>Vue</li>
            <li>TypeScript</li>
            <li>Supabase</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <ProfileGraphic className="about-section__profile-graphic"/>
    </section>
  );
};
