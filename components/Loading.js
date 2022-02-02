import styles from '../styles/Loading.module.css'
import Image from 'next/image'

export default function Loading() {
    return (
         <div className={styles.loading}>
             <Image src="/images/pikachu.gif" width='290' height='200' alt='Pikachu Gif' />
             <h1 className={styles.title}><span>Load</span>ing...</h1>
         </div>
     )
}