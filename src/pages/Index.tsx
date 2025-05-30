
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UnderstandingSection from '@/components/UnderstandingSection';
import IncludenessSection from '@/components/IncludenessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GivingSection from '@/components/GivingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        {t('common.skipToContent')}
      </a>
      
      <Header />
      <Hero />
      
      <main id="main-content">
        <UnderstandingSection />
        <IncludenessSection />
        <TestimonialsSection />
        <GivingSection />
        <CTASection />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
