import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './Product.module.css'

export default function Product({product, currentCategory}) {

    const {name, image} = product;

    const template = `¡Hola! Los contacto desde su página web, estoy interesado en el ${name} de la galeria de ${currentCategory.name}.`;
    const encoded = encodeURIComponent(template);
    const link = `${process.env.NEXT_PUBLIC_API_URL}?text=${encoded}`;

    return(
        <>    
            <div className={styles.product}>
            
                <div className={styles.img}>
                    <Image
                        src={`${image}`}
                        alt={`${name} image`}
                        width={310}
                        height={550}
                        className={styles.img}
                        priority={true}
                        draggable={false}
                    />
                </div>
                
                <div className={styles.actions}>
                    <p>{name}</p>

                    <Link href={link} passHref={true} legacyBehavior={true}>
                        <a target='_blank'>
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: "var(--green)", cursor: 'pointer'}} size="2xl"/>
                        </a>
                    </Link>
                </div>
            </div>
        </>      
    )
}