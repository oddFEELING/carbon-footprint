import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import styles from '../../styles/component_styles/intro.module.scss';

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className={styles.container}>
      {/* ----- absolute text ----- */}
      <h1 className={styles.accent}>
        {' '}
        CAR <br />
        BON
      </h1>

      {/* ----- header area ----- */}
      <span className={styles.title__section}>
        <h2 data-aos='fade-right'>What is </h2>
        <h1 data-aos='fade-right' data-aos-delay='300'>
          CARBON FOOTPRINT
        </h1>
        <h3 data-aos='fade-right' data-aos-delay='300'>
          "Your contribution to global warming"
        </h3>
      </span>

      {/* ----- content area ----- */}
      <section className={styles.content}>
        {' '}
        <p data-aos='fade-up' data-aos-delay='500' data-aos-duration='700'>
          Yep! The amount of Green House Gases (GHG) released into the
          atmosphere by your daily activities directly or indirectly is what is
          referred to as your carbon footprint. Of all these gases, Carbon
          dioxide is the most prominent gas as it makes up about 76% of the
          total GHG with an estimated emission rate of 32,000 Million Metric
          tons of Co2 as at 2020 and is projected to go above 35,000 Million
          Metric tons by 2030. So how do you contribute to these millions you
          may ask?
        </p>
        <section
          className={styles.foot}
          data-aos='fade-up'
          data-aos-delay='1000'
          data-aos-duration='400'
          data-aos-anchor-placement='bottom-bottom'
        >
          well except breathing you obviously....
        </section>
      </section>

      {/* ----- finishing text ----- */}
    </section>
  );
};

export default Intro;
