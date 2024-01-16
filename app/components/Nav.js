import Link from "next/link";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from './Nav.module.css'

export default function Nav({toggle}) {
    const linkArray = [
        {id: 1, icon: faBuildingShield, href: '#company', name:'Empresa'},
        {id: 2, icon: faScrewdriverWrench, href: '#services', name:'Servicios'},
        {id: 3, icon: faLightbulb, href: '#purpose', name:'Propósito'},
        {id: 4, icon: faAddressBook, href: '#contact', name:'Contacto'}
    ]
    return (    
        <nav className={styles.nav}>
            <div className={styles.container}>
                {linkArray.map(link => (
                    <Link key={link.id} href={link.href} className={styles.link} onClick={toggle}>   
                        <FontAwesomeIcon className={styles.icon} icon={link.icon} style={{color: "var(--light-blue"}}/>
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}