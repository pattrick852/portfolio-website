'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory and payment integration',
      tags: ['Next.js', 'TypeScript', 'Stripe'],
      image: '🛍️',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization and user management',
      tags: ['React', 'Chart.js', 'Firebase'],
      image: '📊',
    },
    {
      id: 3,
      title: 'Mobile App Design',
      description: 'UI/UX design and development for a fitness tracking mobile application',
      tags: ['React Native', 'Figma', 'Animation'],
      image: '📱',
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'Headless CMS with powerful API and intuitive admin interface',
      tags: ['Node.js', 'MongoDB', 'REST API'],
      image: '📝',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          Selected Work
        </motion.h2>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className={styles.projectImage}>{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button
                className={styles.viewButton}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
