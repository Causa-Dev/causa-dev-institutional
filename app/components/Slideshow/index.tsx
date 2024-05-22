'use client'

import { useEffect, useState } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { ImageType } from '@/app/protocols'

interface SlideshowProps {
  images: ImageType[]
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={`https:${image.fields.file.url}`}
          alt={`causa dev logotipo ${index + 1}`}
          width={435}
          height={435}
          className={`${styles.slideshowImage} ${
            index === activeIndex ? styles.active : ''
          }`}
        />
      ))}
    </div>
  )
}

export default Slideshow
