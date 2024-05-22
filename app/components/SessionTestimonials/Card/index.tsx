import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { testimonialsType } from '../types'
import { ImageType } from '@/app/protocols'

interface CardProps {
  testimonial: testimonialsType
  quotationMark: ImageType
}
export const Card: React.FC<CardProps> = ({ testimonial, quotationMark }) => {
  const testimony = testimonial.testimony.replace(
    /__(.*?)__/g,
    '<strong>$1</strong>',
  )
  return (
    <article className={`${styles.card} `}>
      <Image
        className={styles.voluntary_img}
        src={`https:${testimonial.image.fields.file.url}`}
        alt={testimonial.image.fields.description}
        width={testimonial.image.fields.file.details.image.width}
        height={testimonial.image.fields.file.details.image.height}
      />
      <p className={`${styles.name} text2`}>{testimonial.name}</p>
      <p className={`${styles.office} text2`}>{testimonial.office}</p>
      <p
        className={`${styles.text_testimonial} regular-text `}
        dangerouslySetInnerHTML={{
          __html: testimony,
        }}
      ></p>
    </article>
  )
}
