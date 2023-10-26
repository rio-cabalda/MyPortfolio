import PropTypes from 'prop-types';
import {Github, ScreenShare} from 'lucide-react';
import {motion } from 'framer-motion';


const SingleProject = ({image, title, stack, description, github, live}) => {
    const variants = {
        initial: {y: 70, opacity: 0},
        animate: {y:0, opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.3,
            }}
    }

return (
    
    <section>
        <div className='w-full min-h-screen flex flex-wrap items-center dark:text-white'>
            <motion.div 
                initial="initial" whileInView="animate" variants={variants}
                className='max-w-custom mx-auto px-4 lg-custom:px-0 h-full grid grid-cols-2 items-center gap-10 '>
                
                <motion.div variants={variants} className='w-full h-fit rounded-md shadow-md overflow-hidden'>
                    <img className='w-full object-fit' src={image} alt={title} />
                </motion.div>
                <motion.div variants={variants} className='flex flex-col justify-center text-lg gap-5' >
                    <motion.h3 variants={variants} className='text-5xl font-bold'>{title}</motion.h3>
                    <motion.div variants={variants} className='italic text-lg text-gray-900 dark:text-gray-200'>
                            {stack.map((item,index)=>(<span key={item}>{`${item}${index===(stack.length - 1)? "":", "}`}</span>))}
                    </motion.div>
                    <motion.div variants={variants} className='flex flex-col gap-5'>
                        <motion.p variants={variants}>{description}</motion.p>
                        <motion.div variants={variants} className='flex gap-5 uppercase tracking-tighter'>
                        <motion.a variants={variants} href={github} target='_blank' rel="noreferrer" className='flex items-center font-bold leading-none gap-2 border-b-2 border-black dark:border-white pb-2'>Source Code <Github className='bg-black rounded-full p-1 text-white dark:bg-white dark:text-black' size={30} strokeWidth={2} absoluteStrokeWidth /></motion.a>
                        <motion.a variants={variants} href={live} target='_blank' rel="noreferrer" className='flex items-center font-bold leading-none gap-2 border-b-2 border-black dark:border-white pb-2 '>Live Demo <ScreenShare className='bg-black rounded-full p-1 text-white dark:bg-white dark:text-black' size={30} strokeWidth={2} absoluteStrokeWidth /></motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    </section>
)
}
SingleProject.propTypes = {
image: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
github: PropTypes.string.isRequired,
live: PropTypes.string.isRequired,
stack: PropTypes.arrayOf(PropTypes.string).isRequired,
description: PropTypes.string.isRequired,
};

export default SingleProject