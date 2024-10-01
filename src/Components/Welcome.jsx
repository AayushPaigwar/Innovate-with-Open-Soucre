import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import logo from '../assets/code.jpg';

export default function Welcome() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Opensource'],
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
      <div className="code-img d-flex" style={{ paddingTop: '20px' }}>
        <img src={logo} alt='logo' />
      </div>

      <div className="main-logo animated">
        <h1 style={{ color: 'black', fontSize: '40px' }}>
          Contribute To{" "}
          <span ref={el} />
        </h1>
      </div>
    </div >
  );
}
