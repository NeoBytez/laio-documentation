import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    /*
    const script = document.createElement('script');
    script.src = '/prism-csharp-custom.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };*/
  }, []);

  return <>{children}</>;
}