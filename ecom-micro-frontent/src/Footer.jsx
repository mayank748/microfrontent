import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [Footer, setFooter] = useState(null);

  useEffect(() => {
    import('../../footerfrontent/src/App').then(module => {
      setFooter(() => module.default);
    });
  }, []);

  return (
    <div>
      {Footer ? <Footer /> : <p>Loading Footer...</p>}
    </div>
  );
};

export default Footer;
