import Image from 'next/image'
import inicioLogo from '../../../public/inicio.svg'
import styles from './style.module.css'


export function Inicio() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Impulsionamos pessoas, carreiras e projetos sociais</h1>
                    <p className={styles.description}>Somos uma comunidade de profissionais voluntários e acreditamos que a tecnologia é um meio poderoso para transformar vidas.</p>
                </div>
                <Image src={inicioLogo} alt='Logo Inicio' />
            </div>
            <div className={styles.testeQuemSomos}>

            </div>
        </>
    )
}