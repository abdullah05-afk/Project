// src/components/CursorHole.jsx
import React, { useEffect, useRef } from 'react';
import './CursorHole.css'; // Import the CSS file

const CursorHole = () => {
  const holeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (holeRef.current) {
        holeRef.current.style.left = `${event.clientX - 25}px`; // Adjust for centering
        holeRef.current.style.top = `${event.clientY - 25}px`; // Adjust for centering
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="cursor-hole" ref={holeRef}></div>;
};

export default CursorHole;

