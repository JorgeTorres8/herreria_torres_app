import Image from 'next/image';
import useHerreria from '../hook/useHerreria'
import styles from './Category.module.css'

export default function Category({category}) {

  const {handleClickCategory, currentCategory} = useHerreria();

  const {id, name, icon } = category

  return (
    <div className={`${currentCategory?.id === id ? styles.currentCategory : styles.category}`} onClick={() => handleClickCategory(id)}>

      <Image 
        height={50}
        width={50}
        alt={`${name} image`}
        src={`${icon}`}
      />

      <button
        type="button"
        className={styles.button}
      >
        {name}
      </button>
    </div>
  )
}