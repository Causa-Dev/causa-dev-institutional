import styles from './style.module.css'
import Image from 'next/image'
import { Tables } from '@/app/protocols'
import { FooterValues } from './types'

interface FooterProps {
  values: Tables<FooterValues>[]
}

export const Footer: React.FC<FooterProps> = async ({ values }) => {
  return (
    <>
      {values.map((value: Tables<FooterValues>) => (
        <footer key={value.fields.id} className={styles.footer}>
          <div className={`${styles.infoContainer} container`}>
            <div>
              <h2>
                <span className={`${styles.infoSubtitle} regular-text`}>
                  {value.fields.textTalk}
                </span>
                <span className="title title--extra-small">
                  {value.fields.inviteTalk}
                </span>
              </h2>

              <address>
                <p className={styles.infoField}>
                  <Image
                    src={`https:${value.fields.mailIcon.fields.file.url}`}
                    width={
                      value.fields.mailIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.mailIcon.fields.file.details.image.height
                    }
                    alt={value.fields.mailIcon.fields.description}
                  />
                  {value.fields.emailTech}
                </p>
                <a
                  href={`https://${value.fields.linkedinTech}`}
                  target="_blank"
                  rel="noopener"
                  className={styles.infoField}
                >
                  <Image
                    src={`https:${value.fields.linkedInIcon.fields.file.url}`}
                    width={
                      value.fields.linkedInIcon.fields.file.details.image.width
                    }
                    height={
                      value.fields.linkedInIcon.fields.file.details.image.height
                    }
                    alt={value.fields.linkedInIcon.fields.description}
                  />
                  <span>{value.fields.linkedinTech}</span>
                </a>
              </address>
            </div>
          </div>

          <div className={styles.logoContainer}>
            <Image
              className={styles.tpblogo}
              src={`https:${value.fields.logo.fields.file.url}`}
              width={value.fields.logo.fields.file.details.image.width}
              height={value.fields.logo.fields.file.details.image.height}
              alt={value.fields.logo.fields.description}
            />
          </div>
        </footer>
      ))}
    </>
  )
}
