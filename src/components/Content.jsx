import React, { useEffect, useRef, useCallback } from 'react';
import Profile from './content/ProfileSec.jsx';
import Information from './content/InformationSec.jsx';
import Contact from './content/ContactSec.jsx';

function Content({ setActiveIcon }) {
  const sections = useRef([]);

  const registerSection = useCallback((section, id) => {
    sections.current.push({ section, id });
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveIcon(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.current.forEach(({ section }) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach(({ section }) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [setActiveIcon]);

  return (
    <>
      <div className="">
        <Profile registerSection={registerSection} />
        <Information registerSection={registerSection} />
        <Contact registerSection={registerSection} />
      </div>
    </>
  );
}

export default Content;