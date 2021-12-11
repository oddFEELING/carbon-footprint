import React, { useState, useEffect } from 'react';

const useScreen = () => {
  const [ScreenSIze, setScreenSIze] = useState(0);
  const [IsSmall, setIsSmall] = useState(false);
  useEffect(() => {
    setScreenSIze(window.innerWidth);
    // set hanlder
    function handleScreen() {
      if (window.innerWidth <= 1000) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }

    //   add event listener
    window.addEventListener('load', handleScreen);
    window.addEventListener('resize', handleScreen);

    return () => {
      //   remove event listener (cleanup)
      window.removeEventListener('load', handleScreen);
      window.removeEventListener('resize', handleScreen);
    };
  }, [ScreenSIze]);

  return IsSmall;
};

export default useScreen;
