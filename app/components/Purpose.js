import React, {useState} from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import styles from './Purpose.module.css'

export default function Purpose() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.activeIndex);
    };

    const slides = [
        { title: 'Misión' },
        { title: 'Visión' },
        { title: 'Recompensa' }
    ];

  return (
    <>

        <div className='container'>

            <h4>Propósito</h4>

            <section className="wrapper">
                <div id="purpose" className="top">Propósito</div>
                <div className="bottom" aria-hidden="true">Propósito</div>
            </section>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiper}
                onSlideChange={handleSlideChange}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={styles.swiper_slide}>
                        <Image width={100} height={100} src="/img/icon.png" alt="logo image"/>
                        {currentSlide === index && <p className={`styles.title_cards ${currentSlide === 0 && styles.title_blue}`}>{slide.title}</p>}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.text}>
                {currentSlide === 0 &&
                    <p data-aos="zoom-in-right" data-aos-offset="50" data-aos-duration="800">
                        Nuestra misión es <span>ayudar</span> a los Venezolanos a realizar sus proyectos de herrería con calidad y precio justo. 
                        Queremos que Caracas y sus alrededores tengan lo mejor de <span>nuestro arte</span>.
                    </p>
                }
                {currentSlide === 1 &&
                    <p data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="600">
                        Nuestra visión es <span>proteger</span> los hogares, empresas y pertenencias de los Caraqueños y sus vecinos. 
                        Queremos <span>combatir</span> la delincuencia con nuestro excelente trabajo y brindar seguridad a nuestros clientes.
                    </p>
                }
                {currentSlide === 2 &&
                    <p data-aos="zoom-in-left" data-aos-offset="50" data-aos-duration="800">
                        Nuestra recompensa es que nuestros clientes nos <span>recomienden</span> a otras personas que necesiten nuestros servicios. 
                        Queremos crecer como empresa y dar seguridad <span>a más personas</span> con nuestro arte de la herrería.
                    </p>
                }
            </div>
        </div>
    </>   
  );
}