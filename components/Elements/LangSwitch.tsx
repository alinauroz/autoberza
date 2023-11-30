import Cookies from 'js-cookie';
import React from 'react';

function LangSwitch({}) {
  const handleChange = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
    <div className="flex gap-2">
      <span className="cursor-pointer" onClick={() => handleChange('en')}>
        En
      </span>{' '}
      |
      <span className="cursor-pointer" onClick={() => handleChange('mr')}>
        Mn
      </span>
    </div>
  );
}

export default LangSwitch;
