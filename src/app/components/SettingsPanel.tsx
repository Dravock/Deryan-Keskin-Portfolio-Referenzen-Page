import { useState } from 'react';
import { Settings, X, Moon, Sun, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  darkMode: boolean;
  onDarkModeChange: (val: boolean) => void;
  sparks: boolean;
  onSparksChange: (val: boolean) => void;
}

export function SettingsPanel({ darkMode, onDarkModeChange, sparks, onSparksChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[9998] flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border rounded-2xl shadow-xl p-4 w-52 space-y-4"
          >
            <p className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
              Einstellungen
            </p>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px]">
                {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>Dark Mode</span>
              </div>
              <button
                onClick={() => onDarkModeChange(!darkMode)}
                className={`relative w-10 h-5 rounded-full transition-colors ${darkMode ? 'bg-primary' : 'bg-muted'}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>

            {/* Funken */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px]">
                <Sparkles className="w-4 h-4" />
                <span>Funken</span>
              </div>
              <button
                onClick={() => onSparksChange(!sparks)}
                className={`relative w-10 h-5 rounded-full transition-colors ${sparks ? 'bg-primary' : 'bg-muted'}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${sparks ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition"
      >
        {open ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
      </button>
    </div>
  );
}
