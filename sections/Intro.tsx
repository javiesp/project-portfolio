import React from 'react';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';

const Intro = () => {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT' page='01'>
      <>
        <BgTitle title='SOBRE MI' />
        <div>
          <p>
            {/* add your text here */}
            <span
              className={styles.myName}
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              JAVIERA ESPINA
            </span>
            {/* <br /> */}
            Soy <b> desarrolladora Fullstack </b>
            me gusta construir aplicaciones web utilizando frameworks como <b>Vuejs</b>, <b>React</b>, <b>SpringBoot</b> y <b>NestJs</b>
            . Disfruto tanto de la informática que puedo quedarme horas sumergida en el código buscando la mejor solución.
          </p>
          ¿Te interesa mi trabajo? {' '}
          <a onClick={scrollToContact}>
            <b style={{ textDecoration: 'underline' }}>Hablemos </b>💬
          </a>{' '}
        </div>
      </>
    </SectionCard>
  );
};

export default Intro;
