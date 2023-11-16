import { Tables, Values } from '@/app/protocols'

import Image from 'next/image'

import style from './style.module.css'

interface OurValuesProps {
  values: Tables<Values>[] // Declara a propriedade values como um array de objetos Values
}

export const OurValues: React.FC<OurValuesProps> = async ({ values }) => {
  return (
    <section className={`${style.main_box} container`}>
      <h3 className={`title title--small ${style.title}`}>Nossos Valores</h3>
      <div className={style.values_content}>
        {values?.map((value: Tables<Values>) => (
          <div key={value.fields.title} className={style.value}>
            <Image
              className={style.value_image}
              src={`https:${value.fields.symbol.fields.file.url}`}
              alt={value.fields.title}
              width={value.fields.symbol.fields.file.details.image.width}
              height={value.fields.symbol.fields.file.details.image.height}
            ></Image>
            <h4 className={`title title--extra-small ${style.value_text}`}>
              {value.fields.title}
            </h4>
            <span className="regular-text-static">
              {value.fields.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
