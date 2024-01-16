'use client'
import Image from "next/image";
import { useEffect } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useHerreria from "./hook/useHerreria";
import Nav from './components/Nav'
import NavModal from "./components/NavModal";
import Company from "./components/Company";
import Models from "./components/Models";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Purpose from "./components/Purpose";
import styles from './page.module.css'

export default function Home() {
  const {isOpen, toggle} = useHerreria();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.position}>
            <div className={styles.presentation}>

              <div className={styles.icon} onClick={toggle}>
                <FontAwesomeIcon icon={faBars} style={{color: "var(--white)"}} size="lg"/>
              </div>
              
              <div className={styles.nav}>
                <Nav/>
              </div>

              <NavModal isOpen={isOpen} toggle={toggle}/>
              <h1 className={styles.metal}>
                Herrería Torres
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
                >❝ Protegiendo hogares y empresas desde 1972 ❞</p>
              <div className={styles.image}>
                <Image width={120} height={120} src="/img/icon.png" alt="logo image"/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <Company/>

        <h3>Servicios</h3>
        <section className="wrapper">
          <div id="services" className="top">Servicios</div>
          <div className="bottom" aria-hidden="true">Servicios</div>
        </section>

        <p className={`center ${styles.main}`}> Somos expertos en <span>fabricación</span>, <span>instalación</span> y <span>reparación</span> de todo tipo de productos de herrería. 
          Contamos con una amplia gama de diseños para que elijas el que más se adapte a tu <span>proyecto</span>, ya sea en tu hogar o empresa. 
          Te invitamos a ver nuestra <span>galería</span> de diseños propuestos, envíanos el diseño que más te guste para cotizarlo. 
        </p>

        <p className="center"> También podemos hacer realidad <span>cualquier otro</span> diseño que hayas visto o tengas como referencia.
          Si quieres un diseño totalmente <span>nuevo</span> y <span>personalizado</span> nosotros lo crearemos para ti. 
          Nos esforzamos por brindarte un <span>servicio</span> profesional, creativo y de calidad.
        </p>

      </main>

      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
            <Sidebar/>
        </aside>

        <div className={styles.models}>
          <div>
            <Models/>
          </div>
        </div>
      </div>

      <Purpose/>

      <Contact/>

      <Footer/>
    </>
  )
}
