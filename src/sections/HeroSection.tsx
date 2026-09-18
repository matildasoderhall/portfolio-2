import { DecorativeLines } from '../components/DecorativeLines';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__contact-wrapper">
        <a
          href="#contact"
          className="hero-section__contact-link"
          aria-label="Contact me"
        >
          <svg viewBox="0 0 120 130" className="hero-section__contact-svg">
            <path
              id="corner-curve"
              d="M 0,10 A 130,100 0 0,0 100,110"
              fill="transparent"
            />

            <text className="hero-section__contact-text">
              <textPath
                href="#corner-curve"
                startOffset="53%"
                textAnchor="middle"
              >
                Contact me
              </textPath>
            </text>
          </svg>
        </a>
      </div>

      <hgroup className="hero-section__header">
        <h1 className="hero-section__title">
          <span className="hero-section__name-first">Matilda</span>
          <span className="hero-section__name-last">Söderhäll</span>
        </h1>
        <p className="hero-section__subtitle">Front End Developer</p>
      </hgroup>
      <div className='hero-section__body'>
        <p className="hero-section__intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="hero-section__location">
          Rooted in Gothenburg.
          <br /> Working worldwide.
        </p>
      </div>

      <DecorativeLines
        className='hero-section__decor'
      />

      <div className="hero-section__footer" />
    </section>
  );
};
