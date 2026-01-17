'use client';

import { useLanguage } from '@/lib/language-context';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#4A4A4A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <Image
                src="/nobglogo.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('footer_title')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer_description')}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">{t('footer_contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-[#CD7F6C]" />
                <p className="text-gray-300">{t('footer_email')}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-[#CD7F6C]" />
                <p className="text-gray-300">{t('footer_phone')}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#CD7F6C]" />
                <p className="text-gray-300">Tbilisi, Georgia</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#CD7F6C] flex items-center justify-center hover:bg-[#B86F5C] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#CD7F6C] flex items-center justify-center hover:bg-[#B86F5C] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
