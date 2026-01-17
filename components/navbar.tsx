'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'geo' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E8E6E3]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/nobglogo.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          <button
            onClick={toggleLanguage}
            className="text-[#4A4A4A] hover:text-[#CD7F6C] transition-colors duration-200 font-medium text-lg"
          >
            {t('nav_language')}
          </button>
        </div>
      </div>
    </nav>
  );
}
