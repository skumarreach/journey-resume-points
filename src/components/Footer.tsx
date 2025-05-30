
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-800 text-white py-12 text-center">
      <div className="container mx-auto px-5">
        {/* Enhanced Footer Logo */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
              alt="Gurukulam" 
              className="h-16 w-16 rounded-full border-2 border-emerald-400/30 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10"></div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold text-white mb-1">Gurukulam</h2>
            <p className="text-sm text-emerald-300 font-medium">
              Empowering Through Understanding
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <Link to="/" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.home')}</Link>
          <Link to="/about" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.about')}</Link>
          <Link to="/causes" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.causes')}</Link>
          <Link to="/gallery" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.gallery')}</Link>
          <Link to="/transparency" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.transparency')}</Link>
          <Link to="/contact" className="hover:underline hover:text-emerald-300 transition-colors">{t('nav.contact')}</Link>
          <a href="#" className="hover:underline hover:text-emerald-300 transition-colors">{t('footer.privacyPolicy')}</a>
        </div>
        <p className="mb-2">{t('footer.organization')}</p>
        <p className="mb-4">{t('footer.taxExemption')}</p>
        <p className="text-sm text-slate-300">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
