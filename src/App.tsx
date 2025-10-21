import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';
import { Section5 } from './components/Section5';
import { Conclusion } from './components/Conclusion';
import { MarxQuote } from './components/MarxQuote';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Load fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Track active section on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Conclusion />
      <MarxQuote />

      {/* AI Usage Floating Button */}
      <Link
        to="/ai-usage"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110 z-50"
        title="AI Usage Documentation"
      >
        <Sparkles className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
      </Link>
    </div>
  );
}
