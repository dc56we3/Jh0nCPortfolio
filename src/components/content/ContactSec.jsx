import React, { useRef, useEffect } from 'react';

function ContactSec({ registerSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionRef.current, 'Contact');
    }
  }, [registerSection]);

  return (
    <div className='section-item' id="Contact" ref={sectionRef}>
      Contact Section
    </div>
  );
}

export default ContactSec;