import '@fontsource/manrope/200.css'; // ExtraLight
import '@fontsource/manrope/300.css'; // Light (Your base)
import '@fontsource/manrope/400.css'; // Regular
import '@fontsource/manrope/500.css'; // Medium
import '@styles/globals.scss';
import { HeroSection } from './sections/HeroSection';
import { ProjectSection } from './sections/ProjectSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
