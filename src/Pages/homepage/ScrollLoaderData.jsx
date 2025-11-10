import React, { useEffect } from 'react';
import '../../stylesheets/ScrollLoaderData.css';
import EventSection from './EventSection';
import ScrollMagic from 'scrollmagic';
import Lenis from '@studio-freight/lenis';

function ScrollLoaderData() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll Down - Button Visibility
    const handleScroll = () => {
      const scrollBtn = document.querySelector('.scrollBtn');
      if (window.scrollY > 0) {
        scrollBtn.classList.add('move');
      } else {
        scrollBtn.classList.remove('move');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // ScrollMagic Controller
    const controller = new ScrollMagic.Controller({ loglevel: 3 });

    // Define ScrollMagic Scenes
    const scenes = [
      {
        triggerElement: '#section2',
        triggerHook: 'onEnter',
        duration: '100%',
        pinElement: '#section1 .pinWrapper',
      },
      {
        triggerElement: '#section2',
        triggerHook: 'onEnter',
        duration: '200%',
        pinElement: '#section2 .pinWrapper',
      },
      {
        triggerElement: '#section3',
        triggerHook: 'onEnter',
        duration: '200%',
        pinElement: '#section3 .pinWrapper',
      },
      {
        triggerElement: '#section4',
        triggerHook: 'onEnter',
        duration: '100%',
        pinElement: '#section4 .pinWrapper',
      },
    ];

    scenes.forEach((scene) => {
      new ScrollMagic.Scene({
        triggerElement: scene.triggerElement,
        triggerHook: scene.triggerHook,
        duration: scene.duration,
      })
        .setPin(scene.pinElement, { pushFollowers: false })
        .addTo(controller);
    });

    // Function to dynamically apply loader video styles
    const applyLoaderStyles = () => {
      const loaderVideo = document.getElementById('loaderVideo');
      if (loaderVideo) {
        // Apply styles based on screen width
        if (window.matchMedia('(max-width: 576px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.top = '25%';
          loaderVideo.style.left = '24px';
          loaderVideo.style.right = 'auto';
          loaderVideo.style.transform = 'translate(0%, -25%)';
        } else if (window.matchMedia('(max-width: 767px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 991px)').matches) {
          loaderVideo.style.width = '310px';
          loaderVideo.style.height = '310px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1199px)').matches) {
          loaderVideo.style.width = '400px';
          loaderVideo.style.height = '400px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '60px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1399px)').matches) {
          loaderVideo.style.width = '450px';
          loaderVideo.style.height = '450px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '80px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else {
          loaderVideo.style.width = '50%';
          loaderVideo.style.height = '50%';
          loaderVideo.style.top = '50%';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '100px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
          loaderVideo.style.position = 'absolute';
        }
      }
    };

    // Ensure loader styles are applied dynamically on mount
    const handleLoad = () => {
      const isLoaderCompleted = localStorage.getItem('loaderCompleted');
      if (isLoaderCompleted) {
        applyLoaderStyles(); 
        return;
      }

      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');

      applyLoaderStyles();

      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');

      // Mark loader as completed in localStorage
      localStorage.setItem('loaderCompleted', 'true');
    };

    handleLoad(); // Call immediately on mount
    window.addEventListener('resize', applyLoaderStyles); 

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', applyLoaderStyles);
      controller.destroy(true);
    };
  }, []);

  return (
    <div className="App">
      <section className="events-page">
        <EventSection

        
          id="section1"
          title="Planning & Decision Making"
          description="Our state-of-the-art planning algorithms, powered by unsupervised learning, reinforcement learning, and (inverse-) reinforcement learning, excel at mastering unknown and unseen on- and off-road environments."
          // videoSrc="/zig_zag_high_speed.m3u8"
          videoSrc="https://swaayattwebsitevideos.b-cdn.net/zig_zag_high_speed.m3u8"

        />
        <EventSection
          id="section2"
          title="Localization"
          description="Our state-of-the-art localization technology achieves pin-point accuracy with sparse maps, eliminating the need for dense HD maps."
          videoSrc="https://swaayattwebsitevideos.b-cdn.net/localization_video_for_website.m3u8"
        />
        <EventSection
          id="section3" 
          title="Perception"
          description="Our computationally efficient deep neural networks deliver ultra-high FPS on edge computing platforms."
          videoSrc="https://swaayattwebsitevideos.b-cdn.net/demo_seq_part1.m3u8"
        />
        <EventSection
          id="section4"
          title="Controls"
          description="Our reinforcement learning based control systems translate high-level plans into smooth, precise movements, ensuring unparalleled safety, comfort, and efficiency on every journey."
          videoSrc="https://swaayattwebsitevideos.b-cdn.net/salkanpur_demo_for_website_full_demo.m3u8"
        />
      </section>
    </div>
  );
}

export default ScrollLoaderData;
