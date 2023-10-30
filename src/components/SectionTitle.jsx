import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionTitle = ({param1, param2}) => {
    const headingVariants = {
        initial:{y:50, opacity:0},
        animate:{y:0, opacity:1, 
        transition:{
            duration: 1,ease:"easeInOut" ,staggerChildren: 0.3,
        }}
    }

  return (
    <motion.h2 
            initial="initial"
            whileInView="animate"
            variants={headingVariants} 
            className=' block text-center text-3xl text-gray-700 md:text-5xl font-bold dark:text-white uppercase'>{param1} <span className='text-transparent bg-gradient-to-tr from-[#82d3e7] to-[#006d88] dark:from-[#44a1b6] dark:to-[#4eb7ce] bg-clip-text duration-500'>{param2}</span></motion.h2>
  )
}
SectionTitle.propTypes = {
  param1: PropTypes.string.isRequired, // Add the specific data type (e.g., string)
  param2: PropTypes.string.isRequired, // You can adjust the data type for param2 as needed
};

export default SectionTitle