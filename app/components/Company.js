import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileSignature } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import styles from './Company.module.css'

export default function Company() {
    const advantagesArray = [
        {id: 1, icon: faFileSignature, title: 'Presupuesto Gratis', 
            description:'Te ofreceremos un presupuesto detallado y sin compromiso para tu proyecto.'},
        {id: 2, icon: faDollarSign, title: '¡Dos Cuotas!', 
            description:'Facilitamos el pago de tu proyecto: 60% al inicio y 40% al finalizar.'},
        {id: 3, icon: faThumbsUp, title: 'A la medida', 
            description:'Nos adaptamos a tus necesidades y preferencias, realizando un trabajo único.'},
        {id: 4, icon: faComments, title: 'Comunicación', 
            description:'Estarás informado en todo momento. Resolveremos tus dudas o sugerencias.'},
        {id: 5, icon: faTrophy, title: 'Experiencia', 
            description:'Contamos con +30 años de experiencia. Trayectoria profesional de calidad.'},
        {id: 6, icon: faClock, title: 'A tiempo', 
            description:'Respetamos los plazos acordados y entregamos resultados en la fecha establecida.'}
    ]
    return (
        <>
            <h2>Empresa</h2>
            
            <section className="wrapper">
                <div id="company" className="top">Empresa</div>
                <div className="bottom" aria-hidden="true">Empresa</div>
            </section>

            <p className="center">En nuestra empresa <span>Herrería Torres</span> nos esforzamos por brindar un servicio 
                de <span>excelencia</span> a nuestros clientes. No solo realizamos trabajos de calidad, 
                sino que también ofrecemos <span>facilidades</span> y <span>ventajas</span> que nos hacen destacar.
                A continuación, te presentamos algunos de los beneficios que <span>obtendrás</span> al elegirnos:
            </p>

            <div data-aos="fade-up" data-aos-offset="300" className={styles.advantages}>
                {advantagesArray.map(advantages => (
                    <div key={advantages.id} className={styles.item}>
                        <FontAwesomeIcon icon={advantages.icon} size="2xl" style={{color: "var(--blue"}}/>
                        <div className={styles.text}>
                            <p>{advantages.title}</p>
                            <p>{advantages.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}