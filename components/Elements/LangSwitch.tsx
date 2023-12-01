import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import LanguageIcon from '@/public/assets/common/language.svg';

function LangSwitch({}) {
  const handleChange = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };
  const [selectedLanguage, setSelectedLanguage] = useState(
    Cookies.get('locale')
  );
  const [showLanguages, setShowLanguages] = React.useState(false);

  useEffect(() => {
    const hide = () => setShowLanguages(false);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, []);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    Cookies.set('locale', language);
    setShowLanguages(false);
    window.location.reload();
  };
  return (
    <div className="relative md:flex items-center hidden -mt-1.5">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowLanguages(!showLanguages);
        }}
        className={` text-white text-sm font-semibold md:p-1.5 p-1 md:rounded-md rounded inline-flex gap-2 items-center`}
      >
        <Image src={LanguageIcon} alt="" className="w-5" />
        {selectedLanguage === 'en' ? 'En' : 'Cnr'}
      </button>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowLanguages(!showLanguages);
        }}
        className={`absolute z-40 top-10 left-5 mt-2 bg-black rounded overflow-hidden ${
          !showLanguages ? 'hidden' : 'block'
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange('en');
          }}
          className="block px-4 py-2 text-white hover:text-gray-300 border-b border-gray-800 w-full text-left"
        >
          English
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange('cnr');
          }}
          className="block px-4 py-2 text-white hover:text-gray-300 w-full text-left"
        >
          Montenegrin
        </button>
      </div>
    </div>
  );
}

export default LangSwitch;
