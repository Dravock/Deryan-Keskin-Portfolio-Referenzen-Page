import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Über mich', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Kontakt', href: '#contact' }
];

interface Props {
  darkMode: boolean;
  onDarkModeChange: (val: boolean) => void;
  sparks: boolean;
  onSparksChange: (val: boolean) => void;
}

export function Navigation({ darkMode, onDarkModeChange, sparks, onSparksChange }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    const handleScroll = () => {
      setIsScrolled(root.scrollTop > 50);
    };

    root.addEventListener('scroll', handleScroll);
    return () => root.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 relative">
        {/* Row 1: Logo + Settings */}
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-[20px]"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('root')?.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            DK
          </motion.a>

          <div className="flex items-center gap-2">
            {/* Sparks Toggle */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSparksChange(!sparks)}
              title={sparks ? 'Funken deaktivieren' : 'Funken aktivieren'}
              className={`p-1.5 rounded-lg transition-colors ${sparks ? 'text-yellow-400 hover:text-yellow-500' : 'text-foreground/40 hover:text-foreground'}`}
            >
              <Sparkles className="w-4 h-4" />
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDarkModeChange(!darkMode)}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
              className="p-1.5 rounded-lg text-foreground/70 hover:text-foreground transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>

        {/* Row 2: Navigation (mobile: wrap, desktop: single row rechts) */}
        <div className="flex items-center justify-between mt-2 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap w-full justify-around">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-[15px] lg:text-[16px] text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
