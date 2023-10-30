import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { motion, useScroll, useSpring } from 'framer-motion';
import featured from '../data/featuredProject';
import SingleProject from './SingleProject';
import useSectionObserver from '../hooks/useSectionObserver';

const MyProjects = () => {
  const ref = useRef();
  const animationRef = useRef();
  const sectionRef = useSectionObserver('projects');// this function will change the state of navigation when this component is in viewport
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start start", "end start"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Stop animation if the component is out of view
            entry.target.style.opacity = 0;
            entry.target.style.pointerEvents = 'none';
          } else {
            // Restart animation if the component is in view
            entry.target.style.opacity = 1;
            entry.target.style.pointerEvents = 'auto';
          }
        });
      },
      { threshold: 0.2 } // Tweak the threshold value as needed
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        //eslint-disable-next-line
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  const scaleX = useSpring(scrollYProgress, {stiffness:100, damping:30});

  return (
    <div ref={ref} className='relative w-full bg-gradient-to-br from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200'>
      <div ref={animationRef}>
      <div ref={sectionRef} className="sticky top-10 lg:top-20 left-0 w-full">
        <SectionTitle param1='my featured' param2='projects'/>
        <motion.div style={{scaleX}} className={`transform origin-center scale-0 h-1 mt-2  rounded-full bg-sky-700 dark:bg-sky-500 duration-75`}></motion.div>
      </div>

      <section id="projects" className='max-w-custom mx-auto'>
        {featured.map((project) => (
            <SingleProject key={project.id} {...project} />
          )
        )}
      </section>
      </div>
    </div>
  )
}

export default MyProjects