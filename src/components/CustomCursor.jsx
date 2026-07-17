import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef();
  const followerRef = useRef();

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleHover = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "white",
        duration: 0.3
      });
    };

    const handleUnhover = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleHover);
        link.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-5 h-5 border border-white/50 rounded-full z-[9998] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
