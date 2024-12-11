import React, { useEffect, useState } from 'react';

const Header = () => {
  const [Header, setHeader] = useState(null);

  useEffect(() => {
    import('../../headerfrontent/src/App').then(module => {
      setHeader(() => module.default);
    });
  }, []);

  return (
    <div>
      {Header ? <Header /> : <p>Loading Header...</p>}
    </div>
  );
};

export default Header;
