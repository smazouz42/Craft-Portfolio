import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang:string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  const languages = [
    { label: 'EN', icon: '🇬🇧' },
    { label: 'FR', icon: '🇫🇷' },
    { label: 'AR', icon: '🇸🇦' },
  ];

  return (
    <div className="relative text-sm">
      <button
        onClick={toggleOpen}
        className="flex items-center gap-2"
      >
        <span>{selectedLang}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown />
        </motion.div>
      </button>

      {isOpen && (
        <div className="absolute">
          {languages.map((lang) => (
            <button
              key={lang.label}
              onClick={() => handleLanguageChange(lang.label)}
              className="flex  py-2 gap-2"
            >
              <span>{lang.label}</span>
              {/* <span>{lang.icon}</span> */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { LanguageSelector }