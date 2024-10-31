import { useEffect, useState } from 'react';

 export default function useDeviceType() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/.test(userAgent) || window.innerWidth < 768;
    setIsPhone(isMobile);
  }, []);

  return isPhone;
};

