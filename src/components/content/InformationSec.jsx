import React, { useRef, useEffect } from 'react';

function InformationSec({ registerSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionRef.current, 'Information');
    }
  }, [registerSection]);

  return (
    <div className='section-item' id="Information" ref={sectionRef}>
      Information Section
    </div>
  );
}

export default InformationSec;