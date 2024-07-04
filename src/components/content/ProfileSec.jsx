import download_icon from '/src/assets/icons/download_icon.svg';
import React, { useRef, useEffect } from 'react';

function ProfileSec({ registerSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionRef.current, 'Profile');
    }
  }, [registerSection]);

  return (
    <>
      <div className='section-item' id="Profile" ref={sectionRef}>
        <div id="name-tag">
          <div>
            <h1>Jhonatan A.&nbsp;</h1>
            <h1>Corrales G.</h1>
          </div>
          <div>
            <span>&lt;/&gt; Jh0nC</span>
            <h4>Desarrollador Jr. Full Stack</h4>
          </div>
        </div>
        <div id="action-btn">
          <a href="" type='submit'>
            <img src={download_icon} alt="download" />
            <h3>Descargar CV</h3>
          </a>
        </div>
        <div id="description">
        <p><b>¡Hola!</b> Mi nombre es <i>Jhonatan</i>. Soy un desarrollador de software <b><i>Full Stack</i></b>. Llevo <b>3</b> años en el campo y me especializo en entornos de trabajo como <i>ReactJs</i>, <i>NodeJs</i>, <i>Laravel</i> y <i>.Net</i>.</p>Tengo experiencia en marcos de trabajo
        </div>
      </div>
    </>
  );
}

export default ProfileSec;