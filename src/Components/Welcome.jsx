import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import logo from '../assets/code.jpg';

export default function Welcome() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['JARVIS'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
 
  return (
    <div className="container">
      <div className="code-img d-flex">
        <img src={logo} alt='logo' />
      </div>
      
      <h1>
      Welcome to 
      <div className="main-logo animated">
        <span ref={el} />
      </div>
      </h1>
     
    </div>
  );
}