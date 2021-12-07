import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import styles from '../../styles/component_styles/final.module.scss';
import axios from 'axios';

const Final = () => {
  const [CardData, setCardData] = useState([]);

  useEffect(async () => {
    AOS.init({
      duration: 1300,
    });

    await axios.get('/api/big_buttons').then((res) => {
      console.log(res.data);
      setCardData(res.data);
    });
  }, []);

  return (
    <section className={styles.container}>
      {/* ----- text area ----- */}
      <div className={styles.text__section}>
        {/* ----- preamble ----- */}
        <h3 className={styles.preamble} data-aos='zoom-in-down'>
          Now that you know this
        </h3>

        {/* ----- main text ----- */}
        <h1
          className={styles.main__title}
          data-aos='zoom-in-down'
          data-aos-delay='300'
        >
          WHAT'S NEXT?
        </h1>
      </div>

      {/* ----- button area ----- */}
      <section
        className={styles.button__section}
        data-aos='fade-right'
        data-aos-offset='100'
        data-aos-delay='300'
      >
        {CardData.map((data, index) => {
          return (
            <div key={index} className={styles.card__item} bg={data.bg}>
              <h1>{data.title}</h1>
              <h3>{data.desc}</h3>
              <Link href={data.link}>
                <button>{data.btn}</button>
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Final;
