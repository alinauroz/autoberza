import { useState, useEffect } from 'react';

const useMobileDetect = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = document.documentElement.clientWidth;
      console.log('InnerWIdth', screenWidth);
      // You can adjust the breakpoint value according to your design
      const isMobileNow = screenWidth < 768;
      setIsMobile(isMobileNow);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount
  console.log('UsMobile', isMobile);
  return isMobile;
};

export default useMobileDetect;
