'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'geo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_language: 'EN',
    hero_title: 'Are you looking for a job?',
    upload_cv: 'Upload your CV',
    or: 'or',
    find_out: 'find out about us first',
    footer_title: 'About Us',
    footer_description: 'We are a leading recruitment agency connecting talented individuals with their dream careers. Our mission is to make the job search process simple and effective.',
    footer_contact: 'Contact Us',
    footer_email: 'Email: info@careers.ge',
    footer_phone: 'Phone: +995 555 123 456',
    footer_rights: '© 2024 Career Portal. All rights reserved.',
    upload_success: 'CV uploaded successfully!',
    upload_error: 'Failed to upload CV. Please try again.',
    upload_file_label: 'Click to upload or drag and drop',
    upload_file_hint: 'PDF, DOC, DOCX (max 5MB)',
    about_paragraph_1: "HireHunters is a fast-response recruitment agency built to help companies hire quickly, accurately, and without unnecessary complexity. We understand that in today's market, speed matters - and delays cost businesses time and money.",
    about_paragraph_2: 'Our focus is on delivering qualified, job-ready candidates in the shortest possible time. Through targeted sourcing, rapid screening, and clear communication, we streamline the hiring process from first contact to final placement.',
    about_paragraph_3: "We work with startups and established companies that need results, not lengthy recruitment cycles. Whether it's urgent hiring, short-term roles, or rapid team expansion, HireHunters acts as an efficient extension of your hiring process.",
    about_tagline: 'Hunt. Match. Hire',
  },
  geo: {
    nav_language: 'GEO',
    hero_title: 'ეძებთ სამსახურს?',
    upload_cv: 'ატვირთეთ თქვენი CV',
    or: 'ან',
    find_out: 'ჯერ გაიგეთ ჩვენს შესახებ',
    footer_title: 'ჩვენს შესახებ',
    footer_description: 'ჩვენ ვართ წამყვანი საკადრო სააგენტო, რომელიც აკავშირებს ნიჭიერ ადამიანებს მათ სასურველ კარიერასთან. ჩვენი მისიაა სამუშაოს ძიების პროცესის გამარტივება და ეფექტურობა.',
    footer_contact: 'დაგვიკავშირდით',
    footer_email: 'ელ. ფოსტა: info@careers.ge',
    footer_phone: 'ტელეფონი: +995 555 123 456',
    footer_rights: '© 2024 კარიერის პორტალი. ყველა უფლება დაცულია.',
    upload_success: 'CV წარმატებით აიტვირთა!',
    upload_error: 'CV-ის ატვირთვა ვერ მოხერხდა. გთხოვთ სცადოთ ხელახლა.',
    upload_file_label: 'დააწკაპუნეთ ატვირთვისთვის ან გადმოიტანეთ',
    upload_file_hint: 'PDF, DOC, DOCX (მაქს. 5MB)',
    about_paragraph_1: 'HireHunters არის რეკრუიტინგული კომპანია, რომელიც ბიზნესს კადრების სწრაფად, ზუსტად და ზედმეტი სირთულეების გარეშე შერჩევაში ეხმარება. ჩვენ კარგად გვესმის, რომ დღევანდელ ბაზარზე სიჩქარე გადამწყვეტია, შენელებული პროცესები კი კომპანიისთვის დაკარგული დრო და ფინანსებია.',
    about_paragraph_2: 'ჩვენი მთავარი ამოცანაა, მაქსიმალურად მოკლე დროში მოგიყვანოთ კვალიფიციური კანდიდატები, რომლებიც მზად არიან საქმისთვის. მიზნობრივი ძიების, სწრაფი სკრინინგისა და ეფექტური კომუნიკაციის წყალობით, ჩვენ სრულად ვამარტივებთ დაქირავების პროცესს - პირველივე კონტაქტიდან პოზიციის დაკმაყოფილებამდე.',
    about_paragraph_3: 'ჩვენ ვთანამშრომლობთ როგორც სტარტაპებთან, ისე ჩამოყალიბებულ ბიზნესებთან, რომლებსაც სჭირდებათ კონკრეტული შედეგი და არა გაწელილი რეკრუიტინგული ციკლები. იქნება ეს გადაუდებელი ვაკანსია, მოკლევადიანი პროექტი თუ გუნდის სწრაფი გაფართოება, HireHunters თქვენი კომპანიის საიმედო დასაყრდენია.',
    about_tagline: 'ვპოულობთ. ვაკავშირებთ. ვასაქმებთ.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
