
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient-to-r from-slate-600/70 to-slate-600/70 bg-[url('https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-white text-center py-32 px-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          {t('about.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
