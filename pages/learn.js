import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import FoodImg from '../assets/images/food.jpg';
import HomeImg from '../assets/images/home.jpg';
import ShoppingImg from '../assets/images/shopping.jpg';
import TransImg from '../assets/images/transport.jpg';
import FlightImg from '../assets/images/flight.jpg';
import Logo from '../assets/images/logo.svg';
import styles from '../styles/learn.module.scss';

const Learn = () => {
  const [Data, setData] = useState([]);

  // effect to fetch data
  useEffect(() => {
    (async function () {
      axios.get('/api/learn_data').then((res) => {
        setData(res.data);
      });
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Carbon-Learn</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo_icon.svg' />
        <link
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        ></link>
      </Head>
      {/* ----- logo area ----- */}
      <Link href='/'>
        <div className={styles.logo}>
          <Image src={Logo} alt='' width='130' height='40' />
        </div>
      </Link>
      <h1>LEARN TO REDUCE YOUR CARBON FOOTPRINT</h1>

      <div className={styles.card__container}>
        {Data.map((data) => {
          let imgBg;
          if (data.category === 'FOOD') {
            imgBg = FoodImg;
          } else if (data.category === 'TRANSPORT') {
            imgBg = TransImg;
          } else if (data.category === 'AIR TRAVEL') {
            imgBg = FlightImg;
          } else if (data.category === 'HOME') {
            imgBg = HomeImg;
          } else if (data.category === 'CLOTHING') {
            imgBg = ShoppingImg;
          }
          return (
            <div className={styles.card__item} key={data.key}>
              {/* ----- image ----- */}
              <div className={styles.card__image}>
                <Image
                  src={imgBg}
                  alt=''
                  layout='fill'
                  className={styles.klin}
                />
              </div>
              <div className={styles.card__text_area}>
                {/* ----- title ----- */}
                <h1>{data.title}</h1>

                {/* ----- category ----- */}
                <h2>Category: {data.category}</h2>
                <div className={styles.separator} />

                {/* ----- content ----- */}
                <p>{data.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link href='https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/'>
        <a>Go to Source</a>
      </Link>
    </div>
  );
};

export default Learn;