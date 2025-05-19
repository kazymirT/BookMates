import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screen, setScreen] = useState<'mobile' | 'tablet' | 'desktop' | null>(
    null
  );

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreen('mobile');
      } else if (width >= 768 && width < 992) {
        setScreen('tablet');
      } else {
        setScreen('desktop');
      }
    };

    updateScreen();
    window.addEventListener('resize', updateScreen);

    return () => {
      window.removeEventListener('resize', updateScreen);
    };
  }, []);

  return screen;
};

export default useResponsive;
