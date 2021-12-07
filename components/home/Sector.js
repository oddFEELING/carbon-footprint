import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgImage from '../../assets/images/sector_img.jpg';
import styles from '../../styles/component_styles/sector.module.scss';

const Sector = () => {
  return (
    <section className={styles.sector__container}>
      {/* ----- main section ----- */}
      <div className={styles.main__div}>
        {/* ----- title text ----- */}
        <h1 data-aos='fade-right'>ENERGY PER CAPITA</h1>

        {/* ----- content ----- */}
        <p data-aos='fade-right' data-aos-delay='400'>
          This project would be focusing on the per capita footprint of a
          houshold by converting the energy consumption of thehousehold to its
          CO2e and dividing it by the total household members.Then comparing it
          to the average of carbon footprint of the individuals country to give
          an overall comparison of their footprint. Just as there are different
          activities that make up our carbon footprints, these activities can be
          further grouped into sectors which are
        </p>
        <ul>
          <li
            data-aos='fade-left'
            data-aos-delay='800'
            data-aos-offset='0'
            data-aos-duration='400'
          >
            Energy (73.2%)
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='1000'
            data-aos-offset='0'
            data-aos-duration='400'
          >
            Agriculture, Forestry and land use (18.4%)
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='1200'
            data-aos-offset='0'
            data-aos-duration='400'
          >
            Waste (3.2%)
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='1400'
            data-aos-offset='0'
            data-aos-duration='400'
          >
            Industry (5.2%)
          </li>
        </ul>
        <Link href='https://ourworldindata.org/emissions-by-sector'>
          <a
            data-aos='fade-left'
            data-aos-delay='2000'
            data-aos-offset='0'
            data-aos-duration='100'
          >
            Source
          </a>
        </Link>
      </div>

      {/* ----- image section ----- */}
      <div className={styles.image__cup}>
        <Image
          src={bgImage}
          alt=''
          className={styles.image}
          data-aos='fade-up'
        />
      </div>
    </section>
  );
};

export default Sector;
