
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white/10 border-white/20 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-white h-9 min-w-[80px]"
      >
        <option value="en" className="text-black">English</option>
        <option value="hi" className="text-black">हिंदी</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
