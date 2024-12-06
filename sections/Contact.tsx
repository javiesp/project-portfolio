import React, { useContext } from 'react';
import SectionCard from '@components/SectionCard';
import ThemeContext from '@contexts/ThemeContext';
import { socialLinks } from '@sections/me';
import ClipCopy from '@components/ClipCopy';
// styles
import styles from '@styles/Contact.module.sass';
import BgTitle from '@components/BgTitle';

const Contact = () => {
  const { themeStyle } = useContext(ThemeContext);

  return (
    // change your title and section id
    <SectionCard id='contact' title='CONTACT' page='04'>
      <>
        <BgTitle title='CONTACTO' />
        <p className={styles.articleDescription}>
          {/* change your contact description */}
          Si buscas a un <b>Desarrollador Fullstack</b>?<br></br> estoy{' '}
          <b>disponible</b> y buscando nuevos desarollos💕
        </p>
        <ClipCopy copy='jaantonia.espinam@gmail.com' theme={themeStyle} />
        <p className={styles.socialLinksTitle}>Envíame un email🤖</p>
        <section className={styles.socialLinksContainer}>
          {/* add your social information in the projectData.tsx file */}
          {socialLinks.map((s, i) => {
            return (
              <a
                key={i}
                href={s.link}
                aria-label={`navigate to ${s.link}`}
                className={styles.link}
                data-social-links={s.title}
              >
                {s.icon}
              </a>
            );
          })}
        </section>
      </>
    </SectionCard>
  );
};

export default Contact;
