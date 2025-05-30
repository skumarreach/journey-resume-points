import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticipateWidget from '@/components/ParticipateWidget';
import Chatbot from '@/components/Chatbot';
import SectionTitle from '@/components/SectionTitle';
import { Heart, Clock, Users, TrendingUp } from 'lucide-react';

const Transparency = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="absolute -top-10 left-0 bg-red-600 text-white p-2 z-50 focus:top-0">
        {t('common.skipToContent')}
      </a>
      
      <Header />
      
      <main id="main-content" className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">{t('transparency.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('transparency.subtitle')}
            </p>
          </div>
        </section>

        {/* Our Commitment to Transparency */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <SectionTitle 
              title={t('transparency.promise.title')}
              description={t('transparency.promise.description')}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('transparency.promise.financial.title')}</h3>
                <p className="text-gray-600">{t('transparency.promise.financial.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('transparency.promise.communication.title')}</h3>
                <p className="text-gray-600">{t('transparency.promise.communication.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('transparency.promise.reporting.title')}</h3>
                <p className="text-gray-600">{t('transparency.promise.reporting.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('transparency.promise.impact.title')}</h3>
                <p className="text-gray-600">{t('transparency.promise.impact.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Selfless Journey of Our Founders */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <SectionTitle 
              title={t('transparency.founders.title')}
              description={t('transparency.founders.description')}
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">A Mother's Love Becomes a Movement</h3>
                  <p className="text-gray-700 mb-4">
                    Mrs. Radha Nandakumar could have chosen an easier path. With her expertise in special education, 
                    she could have built a lucrative private practice. Instead, she chose to dedicate her life to 
                    children who had been forgotten by society—children whose families were told "there's no hope."
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg italic text-gray-700 my-4">
                    "I've never drawn a salary from Gurukulam in our 9 years of operation. Every donation, 
                    every grant goes directly to the children. This isn't about building wealth—it's about 
                    building hope." - Mrs. Radha Nandakumar
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Personal Sacrifices for Greater Purpose</h3>
                  <p className="text-gray-700 mb-4">
                    Supriya Nair, our Trustee and Vocational Training Director, understands the daily challenges 
                    because she lives them. As a mother of a special needs child, she could focus solely on her 
                    own family. Instead, she works tirelessly to ensure every child has the opportunities her own child deserves.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg italic text-gray-700 my-4">
                    "The sleepless nights, the emotional exhaustion, the constant worry—I carry all of this 
                    not just for my child, but for every child who walks through our doors. Because every 
                    parent deserves to see their child thrive."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Reality of Running a Nonprofit */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <SectionTitle 
              title={t('transparency.challenges.title')}
              description={t('transparency.challenges.description')}
            />
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">Financial Uncertainty</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Month-to-month funding struggles that keep us awake at night
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Choosing between paying staff salaries and buying therapeutic equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Endless grant applications with heartbreaking rejection rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Personal funds depleted to keep programs running
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">Emotional Toll</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Watching families struggle with societal stigma and discrimination
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Carrying the weight of 150+ families' hopes and dreams
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Burnout from working 16-hour days without recognition
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Personal relationships strained by unwavering commitment to the cause
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">Operational Hurdles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Navigating complex government regulations and compliance requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Finding and retaining qualified special education professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Maintaining aging facilities with limited maintenance budgets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Balancing individual needs with limited resources
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">Why We Continue</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Every child's breakthrough makes every struggle worthwhile
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Families who tell us we've changed their entire outlook on life
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Young adults finding employment and independence
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    The knowledge that giving up means abandoning children who have no other options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <SectionTitle 
              title={t('transparency.financialTransparency.title')}
              description={t('transparency.financialTransparency.description')}
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">2024 Fund Allocation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                    <div className="font-semibold mb-2">Direct Programs</div>
                    <div className="text-sm text-gray-600">Education, therapy, vocational training, and student support</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">20%</div>
                    <div className="font-semibold mb-2">Operations</div>
                    <div className="text-sm text-gray-600">Facility costs, utilities, and essential administration</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">5%</div>
                    <div className="font-semibold mb-2">Fundraising</div>
                    <div className="text-sm text-gray-600">Efforts to secure sustainable funding</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-center text-red-700 font-semibold">
                    0% goes to founder salaries. Every leadership position is voluntary.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Our Promise to You</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Quarterly financial reports available to all donors
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Annual audits conducted by certified public accountants
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Open book policy for any donor who wishes to review our finances
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Impact reports showing exactly how your donation created change
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{t('transparency.cta.title')}</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              {t('transparency.cta.description')}
            </p>
            <div className="space-x-4">
              <a 
                href="/contact" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('transparency.cta.support')}
              </a>
              <a 
                href="/contact" 
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                {t('transparency.cta.ask')}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ParticipateWidget />
      <Chatbot />
    </div>
  );
};

export default Transparency;
