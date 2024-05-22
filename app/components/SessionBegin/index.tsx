import styles from './style.module.css'
import { BeginValues } from './types'
import { Tables } from '@/app/protocols'
import Slideshow from '../Slideshow'

interface BeginProps {
  values: Tables<BeginValues>[]
}

const images = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCWQKVpXuZiYuxOSerDpg6P8bAFanfUEtswVB6mpJ7Q&s',
    width: 1920,
    height: 1080,
  },
  {
    src: 'https://compote.slate.com/images/eb00a5c5-ba32-4ada-8b6e-ddf0fe6c350b.jpeg?crop=1560%2C1040%2Cx0%2Cy0',
    width: 1920,
    height: 1080,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7mwTWPuzyTqOtXY7JXjsM-djeFsYq6g09s6Z0IX_ww&s',
    width: 1920,
    height: 1080,
  },
  // Adicione mais URLs de imagens e suas dimensões conforme necessário
]

export const SessionBegin: React.FC<BeginProps> = async ({ values }) => {
  return (
    <section id="inicio" className={styles.begin}>
      {values.map((value: Tables<BeginValues>) => (
        <div
          className={`${styles.layout_begin} container`}
          key={value.fields.id}
        >
          <div className={styles.text}>
            <h1 className="title--big">{value.fields.title}</h1>
            <p className={styles.description}>{value.fields.about}</p>
          </div>
          <Slideshow images={value.fields.logoBgs} />
        </div>
      ))}
    </section>
  )
}
