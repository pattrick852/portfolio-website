'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.8 },
    },
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 custom={0} variants={textVariants}>
            Creative Developer
          </motion.h1>
          <motion.p custom={1} variants={textVariants} className={styles.subtitle}>
            Crafting beautiful, modern digital experiences with attention to detail
          </motion.p>
          <motion.div custom={2} variants={textVariants} className={styles.stats}>
            <div className={styles.stat}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <h3>30+</h3>
              <p>Clients Served</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.ctaContainer}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">Get In Touch</a>
          </motion.button>
          <motion.button
            className={styles.ctaButtonSecondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects">View Work</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
