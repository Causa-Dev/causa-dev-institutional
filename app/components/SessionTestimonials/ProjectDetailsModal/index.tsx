/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from './style.module.css'
import { testimonialsType } from '../types'

interface ProjectDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  testimonial: testimonialsType | null
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  isOpen,
  onClose,
  testimonial,
}) => {
  if (!isOpen || !testimonial) return null

  const markdownContent = testimonial.detailsText.content
    .map((node: any) => {
      if (node.nodeType === 'paragraph') {
        return node.content
          .map((contentNode: any) => contentNode.value)
          .join('\n')
      } else if (node.nodeType === 'embedded-asset-block') {
        const { file, description } = node.data.target.fields
        const url = `https:${file.url}`
        return `![${description || 'Image'}](${url})`
      }
      return ''
    })
    .join('\n\n')

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ProjectDetailsModal
