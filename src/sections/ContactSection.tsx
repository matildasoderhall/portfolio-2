import { DecorativeLines } from '../components/DecorativeLines';
import './ContactSection.scss';

export const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-section__header">
        <h2 className="contact-section__title">Get in touch!</h2>
        <div className="contact-section__decorative-box" />
      </div>
      <a
        href="/Matilda_Soderhall_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-section__cv-link"
      >
        <span>Cv</span>
        <span>Download</span>
      </a>
      <div className="contact-section__footer">
        <ul className="contact-section__contact-links">
          <li>
            <a
              href="mailto:soderhall.matilda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              soderhall.matilda@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matildasoderhall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matildasoderhall"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="contact-section__copyright">
          © {currentYear} Matilda Söderhäll
        </p>
      </div>

      <DecorativeLines
        color="var(--color-primary)"
        className="contact-section__decor"
      />
    </section>
  );
};
