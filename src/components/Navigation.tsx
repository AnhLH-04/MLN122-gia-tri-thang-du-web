import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 0, label: 'Trang chủ' },
    { id: 1, label: 'Nguồn gốc tư bản' },
    { id: 2, label: 'Sức lao động' },
    { id: 3, label: 'Giá trị thặng dư' },
    { id: 4, label: 'Hình thức biểu hiện' },
    { id: 5, label: 'Hậu quả xã hội' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#D4AF37]/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-[#D4AF37]"
            whileHover={{ scale: 1.05 }}
          >
            💰
          </motion.div>
          <div className="flex gap-6 items-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`text-sm transition-colors hidden md:block ${activeSection === section.id
                    ? 'text-[#D4AF37]'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {section.label}
              </button>
            ))}

            {/* AI Usage Button */}
            <Link
              to="/ai-usage"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles size={16} />
              <span>AI Usage</span>
            </Link>
          </div>
          {/* Mobile menu */}
          <div className="flex gap-2 md:hidden">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`w-2 h-2 rounded-full transition-all ${activeSection === section.id
                    ? 'bg-[#D4AF37] w-6'
                    : 'bg-white/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
