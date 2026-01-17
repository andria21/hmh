'use client';

import { useLanguage } from '@/lib/language-context';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#CD7F6C] py-20 px-6 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <p className="text-white text-lg md:text-xl leading-relaxed">
            {t('about_paragraph_1')}
          </p>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            {t('about_paragraph_2')}
          </p>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            {t('about_paragraph_3')}
          </p>

          <div className="pt-8 border-t border-white/30">
            <p className="text-white text-2xl md:text-3xl font-bold text-center">
              {t('about_tagline')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
