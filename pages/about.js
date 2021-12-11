import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, pagination } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import HeroImage from '../assets/images/hero.jpg';
import AreImage from '../assets/images/are.jpg';
import AllImage from '../assets/images/all.jpg';
import AboutImage from '../assets/images/about.jpg';
import ChangeImage from '../assets/images/change.jpg';
import Link from 'next/link';
import Head from 'next/head';
import Logo from '../assets/images/logo.svg';
import Image from 'next/image';
import styles from '../styles/about.module.scss';
import axios from 'axios';

const About = () => {
  const [Data, setData] = useState([]);
  const Images = [AreImage, AllImage, AboutImage, ChangeImage, HeroImage];
  //-->  default options for slider component
  const sliderOptions = {
    direction: 'vertical',
    autoplay: true,
    parallax: true,
    loop: true,
    speed: 1200,
  };

  useEffect(() => {
    //   get data from api
    (async function () {
      await axios.get('/api/about_data').then((res) => {
        setData(res.data);
      });
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Carbon-About</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo_icon.svg' />
        <link
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        ></link>
      </Head>
      <Link href='/'>
        <div className={styles.logo}>
          <Image src={Logo} alt='' width='130' height='40' />
        </div>
      </Link>
      <Swiper
        {...sliderOptions}
        modules={[Autoplay, Pagination]}
        className={styles.swiper__container}
        pagination={{ dynamicBullets: true }}
      >
        {Data.map((data, index) => {
          let icon = Images[index];
          return (
            <SwiperSlide key={index} className={styles.swiper__object}>
              <section className={styles.swiper__item_container}>
                <div className={styles.content__area}>
                  {/* ----- title ----- */}
                  <h1>{data.title}</h1>

                  {/* ----- tag line ----- */}
                  <h2>{data.tagline}</h2>

                  {/* ----- accent ----- */}
                  <h3 className={styles.accent}>{data.accent}</h3>
                </div>
                {/* ----- image ----- */}
                <div className={styles.section__image}>
                  <Image src={icon} alt='' layout='fill' />
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
