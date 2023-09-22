import React, { useState, useEffect } from 'react';
import { useTrail, a } from '@react-spring/web';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import TopUpButton from '../components/TopUpButton'
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CV from '../files/Aleksandr_Garin_CV.pdf';
import Footer from '../components/Footer';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 70 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  Trail.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  return (
    <div>
      {trail.map(({ height }, index) => (
        <a.div key={index}>
          <a.div style={{ opacity: trail[index].opacity, transform: `translateX(${trail[index].x}px)` }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [open, setOpen] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 5) { // Change 200 to your desired scroll position
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Select the element to animate
    const slideInElement1 = document.querySelector('.slide-in-element-1');
    const slideInElement2 = document.querySelector('.slide-in-element-2');
    const slideInElement3 = document.querySelector('.slide-in-element-3');

    // Create the slide-in animation
    gsap.fromTo(
      slideInElement1,
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        scrollTrigger: {
          trigger: slideInElement1,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          continuous: true,
        },
      }
    );
     // Create the combined animation for slideInElement2
    gsap.fromTo(
      slideInElement2,
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: 1,
        scrollTrigger: {
          trigger: slideInElement2,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          continuous: true,
        },
      }
    );

    gsap.fromTo(
      slideInElement3,
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1.7,
        duration: 1,
        scrollTrigger: {
          trigger: slideInElement1,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          continuous: true,
        },
      }
    );
    }, []);

  return (
    <>
      <Navbar />
      <section id='home' className='flex flex-col gap-4 text-center justify-center items-center h-screen w-full font-rajdhani pt-20 px-5 bg-white dark:bg-black z-30'>
        <motion.div className='slide-in-element-1 overflow-hidden'>
          <h1 className='font-bold text-3xl md:text-4xl tracking-widest text-black dark:text-white'>HI THERE</h1>
        </motion.div>
        <motion.div className='slide-in-element-2'>
          <h1 className='font-extrabold text-5xl md:text-5xl lg:text-6xl tracking-wide text-black dark:text-white overflow-hidden'>I`M ALEX</h1>
        </motion.div>
        <motion.div className='slide-in-element-3'>
          <div className='overflow-hidden justify-center items-center text-center self-center'>
              <Trail open={open}>
                <span className='flex flex-col gap-5 font-regular text-xl tracking-wide max-w-md md:max-w-lg text-black dark:text-white'>This is my official portfolio website where I showcase all of my work related to software development.</span>
                <span className='relative self-center'>
                 <a href={CV} target="_blank" rel="noreferrer" className='inline-flex mt-5 py-2.5 px-5 mr-2 gap-3 text-sm font-medium border border-1 rounded-lg text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-bg ease-in-out duration-500'>
                   <p className=''>Download CV</p>
                  
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg>
                </a>
                </span>
              </Trail>
            </div>
           
        </motion.div>
        
      </section>
      <About />
      <Contact/>
      <Footer />
      <TopUpButton />
    </>
  )
}
