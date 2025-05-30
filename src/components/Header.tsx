
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButton from './AuthButton';
import ParticipateWidget from './ParticipateWidget';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const navItems = [
    { path: '/social', label: t('nav.social') },
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/causes', label: t('nav.causes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/transparency', label: t('nav.transparency') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-4 shadow-lg relative">
      <div className="container mx-auto px-5">
        {/* First Line: Logo on left, Badge in center, Auth & Language on right */}
        <div className="flex justify-between items-center">
          {/* Logo Section with Dropdown - Left */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
                    alt="Gurukulam" 
                    className="h-20 w-20 rounded-full border-2 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <ChevronDown className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-64 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-2 border-blue-200/30 shadow-2xl rounded-2xl backdrop-blur-sm z-50 overflow-hidden"
              sideOffset={8}
            >
              <div className="p-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <DropdownMenuItem key={item.path} asChild className="p-0 mb-1 last:mb-0">
                      <Link 
                        to={item.path}
                        className={`
                          w-full text-left px-4 py-3 text-sm font-medium rounded-xl
                          transition-all duration-300 ease-in-out
                          border border-transparent
                          flex items-center justify-between
                          ${isActive 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02] border-blue-300' 
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-800 hover:shadow-md hover:scale-[1.01] hover:border-blue-200'
                          }
                        `}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"></div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Center Badge */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Transforming Lives Since 2015
            </div>
          </div>

          {/* Auth and Language Controls - Right */}
          <div className="flex items-center gap-2">
            <AuthButton />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      {/* Participate Widget positioned below auth controls */}
      <div className="absolute top-full right-2 mt-2 z-50">
        <ParticipateWidget />
      </div>
    </header>
  );
};

export default Header;
