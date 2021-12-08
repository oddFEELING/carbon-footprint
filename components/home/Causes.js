import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import Image from 'next/image';
import axios from 'axios';
import Image_1 from '../../assets/images/cause_1.jpg';
import Image_2 from '../../assets/images/cause_2.jpg';
import Image_3 from '../../assets/images/cause_3.jpg';
import Image_4 from '../../assets/images/cause_4.jpg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/component_styles/causes.module.scss';

const Causes = () => {
  const Images = [Image_1, Image_2, Image_3, Image_4];
  const [SectionInfo, setSectionInfo] = useState([]);
  const containerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    (async function () {
      // get data
      await axios
        .get('/api/home_cards')
        .then((res) => setSectionInfo(res.data));

      // gsap animations
      let container = gsap.utils.selector(containerRef.current);
      const t1 = gsap.timeline({
        duration: 3,
        ease: ' Power3.easeInOut',
      });

      //start animation
      t1.to(container('#box_0'), {
        scrollTrigger: {
          trigger: container('#box_0'),
          endTrigger: container('#box_3'),
          end: 'bottom bottom',
          start: 'top top',
          end: 'top top',
          pin: true,
          toggleActions: 'restart pause reverse reset',
          scrub: 1,
        },
      })
        .to(container('#box_1'), {
          scrollTrigger: {
            trigger: container('#box_1'),
            endTrigger: container('#box_3'),
            end: 'bottom bottom',
            start: 'top top',
            pin: true,
            toggleActions: 'restart pause reverse reset',
            scrub: 1,
          },
        })
        .to(container('#box_2'), {
          scrollTrigger: {
            trigger: container('#box_2'),
            endTrigger: container('#box_3'),
            end: 'bottom bottom',
            start: 'top top',
            pin: true,
            toggleActions: 'restart pause reverse reset',
            scrub: 1,
          },
        })
        .to(container('box_3'), {
          scrollTrigger: {
            trigger: container('#box_3'),
            endTrigger: container('#box_3'),
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            toggleActions: 'restart pause reverse reset',
            scrub: 1,
          },
        });
    })();
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      {SectionInfo.map((data, index) => {
        //images for display
        let Bg = Images[index];
        // set alignment
        let alignLeft;
        if (data.align === 'left') {
          alignLeft = true;
        } else {
          alignLeft = false;
        }
        return (
          <div
            id={`box_${index}`}
            className={
              alignLeft
                ? `${styles.left} ${styles.item__box}`
                : `${styles.item__box}`
            }
            key={index}
          >
            {/* ----- Image section ----- */}
            <div
              className={
                alignLeft
                  ? `${styles.left} ${styles.image__container}`
                  : `${styles.image__container}`
              }
              data-aos-offset='300'
              data-aos={alignLeft ? 'fade-right' : 'fade-left'}
            >
              <Image
                src={Bg}
                alt=''
                layout='fill'
                className={styles.main__image}
              />
            </div>

            {/* ----- content section ----- */}
            <div
              data-aos='fade-up'
              data-aos-offset='200'
              className={
                alignLeft
                  ? `${styles.left} ${styles.main__content}`
                  : styles.main__content
              }
              style={{ backgroundColor: `${data.bgColor}` }}
            >
              {/* ----- absolute accent ----- */}
              <h1
                className={
                  alignLeft ? styles.accent : `${styles.left} ${styles.accent}`
                }
              >
                {data.accent}
              </h1>
              {/* ----- title ----- */}
              <h1
                className={
                  alignLeft
                    ? `${styles.left} ${styles.content__title}`
                    : styles.content__title
                }
              >
                {data.title}
              </h1>

              {/* ----- content section ----- */}

              {/* ----- Description ----- */}
              <h1
                className={
                  alignLeft
                    ? `${styles.left} ${styles.content__desc}`
                    : styles.content__desc
                }
              >
                {data.desc}
              </h1>

              {/* ----- text content ----- */}
              <p
                className={
                  alignLeft
                    ? `${styles.left} ${styles.content__content}`
                    : styles.content__content
                }
              >
                {data.content}
              </p>

              {/* ----- check for button ----- */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Causes;
