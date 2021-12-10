import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import main_1 from '../assets/images/m_slider_1.jpg';
import main_2 from '../assets/images/m_slider_2.jpg';
import main_3 from '../assets/images/m_slider_3.jpg';
import main_4 from '../assets/images/m_slider_4.jpg';
import main_5 from '../assets/images/m_slider_5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Home.module.scss';
import { Autoplay, EffectFade } from 'swiper';
import Logo from '../assets/images/logo.svg';
import Intro from '../components/home/Intro';
import Causes from '../components/home/Causes';
import axios from 'axios';
import Sector from '../components/home/Sector';
import Final from '../components/home/Final';

export default function Home() {
  const [sliderContent, setSliderContent] = useState([]);
  //-->  default options for slider component
  const sliderOptions = {
    direction: 'vertical',
    autoplay: true,
    parallax: true,
    loop: true,
    speed: 1500,
    allowTouchMove: false,
  };

  const sliderOption_two = {
    autoplay: true,
    parallax: true,
    loop: true,
    speed: 1500,
    effect: 'fade',
    allowTouchMove: false,
  };
  const Main_Images = [
    {
      key: 1,
      image: main_1,
    },
    {
      key: 2,
      image: main_2,
    },
    {
      key: 3,
      image: main_3,
    },
    {
      key: 4,
      image: main_4,
    },
    {
      key: 5,
      image: main_5,
    },
  ];

  useEffect(() => {
    (async function () {
      // alert('Some links do not work');
      await axios
        .get('/api/home_content')
        .then((res) => setSliderContent(res.data));
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Carbon-Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        ></link>
      </Head>
      <div className={styles.logo}>
        <Image src={Logo} alt='' width='130' height='40' />
      </div>
      <header className={styles.header}>
        {/* ----- nav section ----- */}
        <nav className={styles.nav__bar}>
          <Link href='/track'>
            <a>Track</a>
          </Link>
          <Link href='/about'>
            <a>About us</a>
          </Link>
          <Link href='/list'>
            <a>Rankings</a>
          </Link>
        </nav>

        {/* ----- The main swiper ----- */}
        <Swiper
          className={styles.header__main_swiper}
          modules={[Autoplay]}
          {...sliderOptions}
        >
          <h1 className={styles.left__hero_text}>
            TRACK YOUR CARBON FOOT-PRINT
          </h1>
          <lottie-player
            src='https://assets2.lottiefiles.com/private_files/lf30_7udbsx97.json'
            background='transparent'
            speed='1'
            style={{
              width: '200px',
              height: '100px',
              position: 'absolute',
              zIndex: '20',
              bottom: '10vh',
            }}
            loop
            autoplay
          ></lottie-player>
          {Main_Images.map((data, index) => {
            return (
              <SwiperSlide key={data.key} virtualIndex={index}>
                <div className={styles.image__holder}>
                  <div />
                  <Image
                    src={data.image}
                    alt=''
                    layout='fill'
                    className={styles.main__slider_image}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ----- section 2 ----- */}
        <div className={styles.header__sect_two}>
          <section className={styles.header__nav_sect}>
            <h1>
              JOIN THE FIGHT AGAINST <br />
              <b> GREEN HOUSE GASES</b>
            </h1>
          </section>
          <Swiper
            className={styles.header__mini_swiper}
            modules={[Autoplay, EffectFade]}
            {...sliderOption_two}
          >
            {sliderContent.map((data, index) => {
              return (
                <SwiperSlide key={data.key} virtualIndex={index}>
                  <div className={styles.captions}>
                    <h2>{data.content}</h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </header>

      {/* ----- main content ----- */}
      <main className={styles.main}>
        <Intro />
        <Causes />
        <Sector />
        <Final />
      </main>
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></Script>
    </div>
  );
}
