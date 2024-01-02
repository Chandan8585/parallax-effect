import "./App.css";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import React, { useEffect, useState } from 'react'
import Island from "../src/images/island.jpg";
import Beach from "../src/images/Beach.jpg";
import Ocean2 from "../src/images/ocean2.jpg";
import Ocean from "../src/images/ocean.jpg";
import wave from "../src/images/wave.jpg";
import ship from "../src/images/ship.jpg";
import fish from "../src/images/firsh.jpg";
import dolphin from "../src/images/dolphin.jpg";
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
    translateX: [-50, 0], // Adjust these values as needed
  });
  
  const shipParallax = useParallax({
    translateX: [50, 0], // Adjust these values as needed
  });
  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });
  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });
  const  parallaxFish = useParallax({
    easing: "ç",
    translateX: [0, 170], // Adjust these values as needed
  });
  
  const parallaxDolphin = useParallax({
    easing: "easeOutQuad",
    translateX: [1700, 0],// Adjust these values as needed
  });
  
  return (
    <div>
      <header className={showNavbar ? 'show-navbar' : ''}>
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg" />
        </div>
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
          <h1 ref={parallaxEasing.ref}>HEY THERE</h1>
          <h2 ref={parallaxEasingLeft.ref}>LET'S DEEP DIVE INTO THE NATURE</h2>
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
          // ref={parallaxRotateY.ref}
          src={Ocean2}
          className="ocean2"
        />
  
      </section>
      <section className="bg-container">
        <div className="container-body">
          <img src={fish} alt="Fish" className="fish" ref={parallaxFish.ref} />
          <img src={dolphin} alt="Dolphin" className="dolphin" ref={parallaxDolphin.ref} />
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