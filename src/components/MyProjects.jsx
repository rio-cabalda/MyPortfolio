import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { motion, useScroll, useSpring } from 'framer-motion';
import featured from '../data/featuredProject';
import SingleProject from './SingleProject';

const MyProjects = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start start", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {stiffness:100, damping:30});

  return (
    <div id='projects' ref={ref} className='relative w-full min-h-screen pt-20 bg-gradient-to-br from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200'>
      <div className="sticky top-20 left-0 w-full">
        <SectionTitle param1='my' param2='featured projects'/>
        <motion.div style={{scaleX}} className={`transform origin-center scale-0 h-1 mt-2  rounded-full bg-sky-700 dark:bg-sky-500 duration-75`}></motion.div>
      </div>
        {featured.map((project) => (
            <SingleProject key={project.id} {...project} />
          )
        )}
    </div>
  )
}

export default MyProjects