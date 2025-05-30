
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient-to-r from-slate-600/70 to-slate-600/70 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-white text-center py-32">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold mb-6">{t('contact.hero.title')}</h1>
        <p className="text-xl max-w-4xl mx-auto mb-8">
          {t('contact.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
