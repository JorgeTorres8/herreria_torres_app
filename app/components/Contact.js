import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './Contact.module.css'

export default function Contact() {

    const template = 'Hola, estoy interesado en los servicios de Herrería Torres. Los contacto por medio de su página web.';
    const encoded = encodeURIComponent(template);
    const link = `${process.env.NEXT_PUBLIC_API_URL}?text=${encoded}`;

    return(
        <>
            <div id="contact" className={styles.hidden}></div>
            <section  className={styles.banner}>
                <div className={`container ${styles.grid}`}>
                    <div className={styles.content}>
                        
                        <h5>Contacto</h5>

                        <section className={styles.wrapper}>
                            <div className={styles.top}>Contacto</div>
                            <div className={styles.bottom} aria-hidden="true">Contacto</div>
                        </section>

                        <p>
                            Si te interesa alguno de nuestros servicios o productos, o si tienes alguna consulta, 
                            no dudes en contactarnos por el medio que más te convenga <span>¡Estamos disponibles para atenderte! </span>
                            Nuestra área de servicio abarca toda la ciudad de <span>Caracas</span> y sus alrededores.
                        </p>
                    
                        <div data-aos="zoom-out" className={styles.links}>

                            <div className={styles.group}>
                                <div className={styles.link}>
                                    <Link href={link} passHref={true} legacyBehavior={true}>
                                        <a target='_blank'>
                                            <FontAwesomeIcon icon={faWhatsapp} className={`icon ${styles.iconW}`} size="xl"/>
                                            0414-1616977
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.link}>
                                    <Link href='https://www.instagram.com/herreria_torress/' passHref={true} legacyBehavior={true}>
                                        <a target='_blank'>
                                            <FontAwesomeIcon icon={faInstagram} className={`icon ${styles.iconI}`} size="xl"/>
                                            @herreria_torress
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            

                            <div className={styles.link} style={{alignSelf: "center"}}>
                                <Link href="mailto:herreriatorres8@gmail.com" passHref={true} legacyBehavior={true}>
                                    <a target='_blank'>
                                        <FontAwesomeIcon icon={faEnvelope} className={`icon ${styles.iconG}`} size="xl"/>
                                        herreriatorres8@gmail.com
                                    </a>
                                </Link>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </section>

            <div className={`container ${styles.info}`}>

                <p>¡Empecemos a realizar tu proyecto deseado!</p>

                <div className={styles.imgContainer}>
                    <Image width={450} height={420} src="/img/welder.png" alt="Welder image" draggable="false" className={styles.img}/>
                </div>
            </div>
        </>
    )
}