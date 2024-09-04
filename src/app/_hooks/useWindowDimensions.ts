'use client'

import { useState, useEffect } from 'react';

// TODO: fix 'window is not defined' error
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    setWindowDimensions(getWindowDimensions)

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

