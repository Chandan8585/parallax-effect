import "./App.css";
import React, { useEffect, useState } from 'react';
import { useParallax } from "react-scroll-parallax";
import Island from "../src/images/island.jpg";
import Beach from "../src/images/Beach.jpg";
import Ocean2 from "../src/images/ocean2.jpg";
import Ocean from "../src/images/ocean.jpg";
import wave from "../src/images/wave.jpg";
import ship from "../src/images/ship.jpg";
import dolphin from "../src/images/dolphin.png";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowNavbar(scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxRotateY = useParallax({
    rotateY: [0, 360],
  });

  const waveParallax = useParallax({
    translateX: [-50, 0],
  });

  const shipParallax = useParallax({
    translateX: [50, 0],
  });

  const parallaxDolphin2 = useParallax({
    translateY: [0, -window.innerHeight * 0.5],
    translateX: [0, 300, { easing: 'linear' }],
    rotateZ: [0, 360 * 3, { easing: 'linear' }],
  });

  const parallaxDolphin = useParallax({
    translateY: [0, -window.innerHeight * 1.5],
    translateX: [50, 300, { easing: 'linear' }],
    rotateZ: [0, 360 * 3, { easing: 'linear' }],
  });

  return (
    <div>
      <header className={showNavbar ? 'show-navbar' : ''}>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Services</li>
          <li>Learn more</li>
        </nav>
      </header>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src={Island}
        />
        <div className="absolute-text">
          <h1>HEY THERE</h1>
          <h2>LET'S DEEP DIVE INTO THE NATURE</h2>
        </div>
      </section>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src={Beach}
        />
      </section>
      <section className="card-container">
        <div className="card" ref={waveParallax.ref}>
          <img src={wave} alt="Wave" />
        </div>
        <div className="card" ref={shipParallax.ref}>
          <img src={ship} alt="Ship" />
        </div>
      </section>
      <section className="bg-container">
        <img
          src={Ocean2}
          className="ocean2"
        />
      </section>
      <section className="bg-container">
        <div className="container-body">
          <img src={dolphin} alt="Dolphin" className="dolphin" ref={parallaxDolphin.ref} />
          <img src={dolphin} alt="Dolphin" className="dolphin" ref={parallaxDolphin2.ref} />
        </div>
      </section>
      <section className="bg-container">
        <img
          src={Ocean}
        />
      </section>
    </div>
  );
};

export default App;
