'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/About.module.css'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Motion Design', 'Prototyping'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2>About Me</h2>
            <p>
              I'm a passionate developer and designer with a keen eye for creating
              beautiful, functional digital experiences. With over 5 years of
              experience in web development, I've helped countless brands bring
              their visions to life through innovative design and clean code.
            </p>
            <p>
              I believe in the power of simple, elegant solutions to complex problems.
              My approach combines strategic thinking with meticulous attention to detail,
              ensuring every project exceeds expectations.
            </p>
          </motion.div>

          <motion.div className={styles.skillsContainer} variants={containerVariants}>
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                className={styles.skillGroup}
                variants={itemVariants}
              >
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ x: 5 }}
                      className={styles.skill}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
