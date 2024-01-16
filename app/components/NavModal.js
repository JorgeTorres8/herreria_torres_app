import { useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from "./Nav";
import styles from './NavModal.module.css'

export default function NavModal ({ isOpen, toggle}) {

  useEffect(() => {
    if(isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen])
  
  return (
    <>
      <div
        className={styles.container}
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`
        }}
      >
        <button className={styles.button}>
          <FontAwesomeIcon onClick={toggle} icon={faCircleXmark} size='xl' style={{color: "#ff4500"}}/>
        </button>

        <div className={styles.nav}>
          <Nav toggle={toggle} isOpen={isOpen} />
        </div>
      </div>
    </>
  );
}