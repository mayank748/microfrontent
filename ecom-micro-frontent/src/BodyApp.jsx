import React, { useEffect, useState } from 'react';

const BodyApp = () => {
  const [BodyApp, setBodyApp] = useState(null);

  useEffect(() => {
    import('../../bodyfrontent/src/App').then(module => {
      setBodyApp(() => module.default);
    });
  }, []);

  return (
    <div>
      {BodyApp ? <BodyApp /> : <p>Loading BodyApp...</p>}
    </div>
  );
};

export default BodyApp;
