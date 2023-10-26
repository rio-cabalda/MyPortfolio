import developer from '../assets/about/web-developer.svg';
import webDev from '../assets/about/webDev.svg';
import laptop from '../assets/about/laptop.svg';
import phone from '../assets/about/phone.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useEffect, useRef,useState } from 'react';
const About = () => {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });
    const bgy = useTransform(scrollYProgress,[0,1],[0,100]);

    useEffect(()=>{
        bgy.on("change", () => {
            // This callback will be triggered when scrollYProgress changes.
            setScrollY(bgy.current);
        });
    },[scrollYProgress,bgy]);

    const headingVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity: 1,
            transition:{
                duration: 0.7,
                staggerChildren: 0.5
            }}
    }
    const contentVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity: 1,
            transition:{
                duration: 1.2,
                staggerChildren: 0.5,
                delayChildren: 0.5
            }}
    }
return (<>
    <section id="about" className="flex items-center w-full min-h-screen bg-gradient-to-br from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200">
        <motion.article 
            initial="initial"
            whileInView="animate"
            variants={headingVariants}
            className='max-w-custom mx-auto grid grid-cols-2'>
            <motion.div  variants={headingVariants} className='w-[30rem] overflow-hidden justify-self-end'>
                <img className='w-full object-cover transform scale-125' src={developer} alt="Developer" />
            </motion.div>
            <motion.div  variants={headingVariants} className='flex flex-col gap-5 dark:text-white'>
                <motion.h3 variants={headingVariants} className='text-3xl leading-none'>ABOUT ME</motion.h3>
                <motion.h2 variants={headingVariants} className='text-[3rem] font-bold'>PERSONAL DETAILS</motion.h2>
                <motion.p variants={headingVariants} className='text-lg'>An aspiring front end developer and passionate about developing easy-to-use and easily adjust to various screen sizes application. My professional pursuits started in the telecommunications field where I’ve had an opportunity to experience the digital revolution and understand the complexities of technology.</motion.p>
            </motion.div>
        </motion.article>
    </section>
    <section ref={ref} className='flex flex-col justify-center gap-10 w-full min-h-screen mx-auto bg-gradient-to-tr from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200'>

    <SectionTitle param1='WHAT' param2='CAN I DO'/>
        <motion.div 
        initial="initial"
        whileInView={scrollY < 84 ? "animate": ""}
        // whileInView="animate"
        variants={contentVariants}
        className='max-w-custom h-full mx-auto grid grid-cols-3 gap-5 dark:text-[#ffff]'>
            <motion.div variants={contentVariants} className='p-5 justify-items-center flex flex-col items-center gap-5  rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1]'>
                <img className='w-20 h-[70px] translate-y-1' src={webDev} alt="Web Development"/>
                <h3>WEB DEVELOPMENT</h3>
                <p className='self-start'>I encompasses the technical aspect of building and maintaining websites and web applications. It involves coding, programming, and server management to bring a web design to life. Ensuring the functionality, interactivity, and performance of a website.</p>
            </motion.div>
            <motion.div variants={contentVariants} className='p-5 flex flex-col items-center gap-5 rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1]'>
                <img className='w-20 h-20' src={laptop} alt="Web Design"/>
                <h3>WEB DESIGN</h3>
                <p className='self-start'>Providing an enjoyable online experience and an art of creating visually appealing and user-friendly digital interfaces. It involves the use of graphic design elements, color schemes, typography, and layout techniques to craft websites that engage and captivate users. </p>
            </motion.div>
            <motion.div variants={contentVariants} className='p-5 flex flex-col items-center gap-5 rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1]'>
            <img className='w-20 h-20' src={phone} alt="Web Design"/>
                <h3>RESPONSIVE DESIGN</h3>
                <p className='self-start'>Take pride in crafting responsive web designs that adapt seamlessly to diverse devices and screen sizes, whether they&rsquo;re browsing on a desktop, tablet, or smartphone. Using my acquired skills, I can create flexible layouts and elements to cater to the evolving landscape of digital accessibility.</p>
            </motion.div>
        </motion.div>
    </section>
    </>)
}

export default About