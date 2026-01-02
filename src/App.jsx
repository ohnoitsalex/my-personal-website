import { Analytics } from '@vercel/analytics/react';
import { useScrollEffects } from './hooks/useScrollEffects';
import { useLightbox } from './hooks/useLightbox';
import { Layout } from './components/layout/Layout';
import { Lightbox } from './components/ui/Lightbox';
import { Hero } from './components/sections/Hero';
import { TechnicalExpertise } from './components/sections/TechnicalExpertise';
import { WorkExperience } from './components/sections/WorkExperience';
import { Publications } from './components/sections/Publications';
import { Projects } from './components/sections/Projects';
import { Photography } from './components/sections/Photography';
import { Contact } from './components/sections/Contact';

export default function AlexanderOnofrei() {
  const { scrolled, activeSection, scrollY, scrollToSection } = useScrollEffects();
  const { lightboxOpen, lightboxImage, openLightbox, closeLightbox } = useLightbox();

  return (
    <Layout
      scrolled={scrolled}
      activeSection={activeSection}
      scrollY={scrollY}
      scrollToSection={scrollToSection}
    >
      <Hero scrollToSection={scrollToSection} />
      <TechnicalExpertise />
      <WorkExperience />
      <Publications />
      <Projects />
      <Photography openLightbox={openLightbox} />
      <Contact />
      <Lightbox isOpen={lightboxOpen} imageSrc={lightboxImage} onClose={closeLightbox} />
      <Analytics />
    </Layout>
  );
}
