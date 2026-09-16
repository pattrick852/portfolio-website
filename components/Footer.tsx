'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <p>Designed & developed with attention to detail.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
