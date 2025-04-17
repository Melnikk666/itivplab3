import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScroll(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '5px',
        backgroundColor: '#00AEEF', // яркий цвет
        width: `${scroll}%`,
        zIndex: 9999,
        transition: 'width 0.2s ease-out',
      }}
    />
  );
};

export default ScrollProgressBar;
