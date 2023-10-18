import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export const isLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(!!Cookies.get('token'));
  }, []);
  return isLoggedIn;
};
