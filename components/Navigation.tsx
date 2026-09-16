'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: 300,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#">Portfolio</a>
        </motion.div>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={isOpen ? styles.active : ''}></span>
          <span className={isOpen ? styles.active : ''}></span>
          <span className={isOpen ? styles.active : ''}></span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
                className={styles.mobileLink}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
