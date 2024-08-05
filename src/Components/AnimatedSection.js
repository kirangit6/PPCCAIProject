import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }} // Start from 150px below and fully transparent
      whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and fully opaque
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;