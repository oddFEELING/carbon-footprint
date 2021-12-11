import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { convert, max } from '../hooks/convert';
import styles from '../styles/track.module.scss';

const Track = () => {
  const [FootPrint, setFootPrint] = useState(0);
  const [Result, setResult] = useState(false);
  // user data state
  const [UserData, setUserData] = useState({
    house_hold_size: 1,
    fridge_usage: 0,
    freezer_usage: 0,
    oven_usage: 0,
    washer_usage: 0,
    microwave_usage: 0,
    cooling_usage: 0,
    incandescent_bulb: 0,
    led_bulb: 0,
    tv_usage: 0,
    console_usage: 0,
    theatre_usage: 0,
    petrol_car: 0,
    diesel_car: 0,
    taxi: 0,
    national_rail: 0,
    underground: 0,
    flight_intl: 0,
    flight_dmst: 0,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // functionto set values
  const setValue = (prop) => (event) => {
    setUserData({
      ...UserData,
      [prop]: event.target.value,
    });
  };

  //   ]effect to update footprint
  useEffect(() => {
    setFootPrint(convert(UserData));
  }, [UserData]);

  function handleServe() {
    setResult(true);
    console.log(`The Maximum emission is: ${JSON.stringify(max)}`);
    console.log(UserData);
  }
  function reverseRes() {
    setResult(false);
  }

  /*Dynamic rendering after refactor */
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
      <h1>CARBON TRACKER</h1>

      {/* ----- household usage ----- */}
      <div className={`${styles.input__container} ${styles.outside}`}>
        <p className={styles.input__symbol}>H</p>
        <p>Household size</p>
        <input
          className={styles.input}
          type='number'
          defaultValue={1}
          min='1'
          placeholder='Household population?'
          onChange={setValue('house_hold_size')}
        />
      </div>

      {/* ----- electric usage ----- */}
      <section className={styles.section__div}>
        <h2>ELECTRIC USAGE (HRS ACTIVE PER DAY)</h2>

        {/* ----- fridge input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Refrigerator</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Refrigerator'
            onChange={setValue('fridge_usage')}
          />
        </div>

        {/* ----- freezer input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Freezer</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Freezer'
            onChange={setValue('freezer_usage')}
          />
        </div>

        {/* ----- oven input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Oven</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Oven'
            onChange={setValue('oven_usage')}
          />
        </div>

        {/* ----- dishwasher input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Dish washer</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Dish washer'
            onChange={setValue('washer_usage')}
          />
        </div>

        {/* ----- microwave input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Microwave</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Microwave'
            onChange={setValue('microwave_usage')}
          />
        </div>

        {/* ----- ac input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Air conditioner</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Air conditioner'
            onChange={setValue('cooling_usage')}
          />
        </div>
      </section>

      {/* ----- entertainment usage ----- */}
      <section className={styles.section__div}>
        <h2>ENTERTAINMENT (HRS ACTIVE PER DAY)</h2>

        {/* ----- television input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Television</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Television'
            onChange={setValue('tv_usage')}
          />
        </div>

        {/* ----- console input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Game console</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Game console'
            onChange={setValue('console_usage')}
          />
        </div>

        {/* ----- theatre input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>HRS</p>
          <p>Home Theatre</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Home theatre'
            onChange={setValue('theatre_usage')}
          />
        </div>
      </section>

      {/* ----- lighting usage ----- */}
      <section className={styles.section__div}>
        <h2>LIGHTING (NUMBER OF BULBS)</h2>

        {/* ----- incandescent input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>UNITS</p>
          <p>Incandescent bulbs</p>
          <input
            className={styles.input}
            type='number'
            placeholder='No of bulbs'
            onChange={setValue('incandescent_bulb')}
          />
        </div>

        {/* ----- led input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>UNITS</p>
          <p>LED bulbs</p>
          <input
            className={styles.input}
            type='number'
            placeholder='No of bulbs'
            onChange={setValue('led_bulb')}
          />
        </div>
      </section>

      {/* ----- vehicle usage ----- */}
      <section className={styles.section__div}>
        <h2>PERSONL TRANSPORT (DISTANCE PER DAY)</h2>

        {/* ----- petrol input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Petrol car</p>
          <input
            className={styles.input}
            type='number'
            placeholder='distance driven'
            onChange={setValue('petrol_car')}
          />
        </div>

        {/* ----- diesel input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Diesel car</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Distance driven'
            onChange={setValue('diesel_car')}
          />
        </div>
      </section>

      {/* ----- public transport usage ----- */}
      <section className={styles.section__div}>
        <h2>PUBLIC TRANSPORT (ESTIMATE DISTANCE PER DAY)</h2>

        {/* ----- public_transport input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Taxi</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Taxi'
            onChange={setValue('taxi')}
          />
        </div>

        {/* ----- national_rail input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>National rail</p>
          <input
            className={styles.input}
            type='number'
            placeholder='National railo'
            onChange={setValue('national_rail')}
          />
        </div>

        {/* ----- national_rail input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Underground trains</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Underground trains'
            onChange={setValue('underground')}
          />
        </div>
      </section>

      {/* ----- flight section ----- */}
      <section className={styles.section__div}>
        <h2>FLIGHT (ESTIMATE DISTANCE PER YEAR)</h2>

        {/* ----- international flight input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Internation flights</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Estimated flight distance '
            onChange={setValue('flight_intl')}
          />
        </div>

        {/* ----- domestic flight input ----- */}
        <div className={styles.input__container}>
          <p className={styles.input__symbol}>KM</p>
          <p>Domestic flights</p>
          <input
            className={styles.input}
            type='number'
            placeholder='Estimated flight distance  '
            onChange={setValue('flight_dmst')}
          />
        </div>
      </section>

      {/* ----- results ----- */}
      <button className={styles.button} onClick={handleServe}>
        {' '}
        Run tracker
      </button>
      {Result ? (
        <div
          className={styles.result__container}
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-duration='800'
          data-aos-ease='ease-out'
        >
          <h1>Your carbon footprint is </h1>
          <h3>
            <b>{FootPrint > 0 ? FootPrint : 0}</b> tonnes of CO2e
          </h3>
          {max.value > 0 ? (
            <p>
              Your most emission comes from<b> {max.section}</b> with{' '}
              <b>{max.value.toFixed(3)}</b> tonnes of CO2e per day
            </p>
          ) : (
            <p>{''}</p>
          )}
          <button className={styles.res__close} onClick={reverseRes}>
            X Close
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Track;
