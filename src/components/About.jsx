import developer from '../assets/about/web-developer.png';
import webDev from '../assets/about/webDev.svg';
import laptop from '../assets/about/laptop.svg';
import phone from '../assets/about/phone.svg';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {

    const headingVariants = {
        initial: { y:100, opacity: 0},
        animate: { y:0, opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.5,
            }}
    }

    const infoVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1,
            transition:{
                duration: 1,
                delayChildren: 0.5,
                staggerChildren: 0.5,

            }}
    }
    const contentVariants = {
        initial: { opacity: 0, scale: 0.2},
        animate: { opacity: 1, scale: 1,
            transition:{
                duration: 1,
            }}
    }
return (<>
    <section id="about" className="flex items-start w-full bg-gradient-to-br from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200">
        <motion.article 
        initial="initial" whileInView="animate" variants={headingVariants}
            className='max-w-custom w-full min-h-[80vh] mx-auto px-4 pt-10  lg:pb-0 lg:pt-20 gap-6 grid grid-cols-1 md:grid-cols-3 items-start'>

            <motion.div variants={headingVariants} className='w-full h-full flex justify-center items-center pt-4 md:pt-0 md:items-center justify-self-center lg:justify-self-end'>
                <img className='w-60 h-fit md:w-[20rem] object-cover transform' src={developer} alt="Developer" />
            </motion.div>

            <motion.div initial="initial" whileInView="animate"  variants={infoVariants} className='h-full col-span-2 flex flex-col md:justify-center gap-5 dark:text-white pb-5'>
                <motion.h3 variants={infoVariants} className='text-xl md:text-3xl'>ABOUT ME</motion.h3>
                <motion.h2 variants={infoVariants} className='leading-none text-3xl md:text-[3rem] font-bold'>PERSONAL DETAILS</motion.h2>
                <motion.p variants={infoVariants} className='text-md md:text-lg'>An aspiring front end developer and passionate about developing easy-to-use and easily adjust to various screen sizes application. My professional pursuits started in the telecommunications field where I’ve had an opportunity to experience the digital revolution and understand the complexities of technology.</motion.p>
            </motion.div>
        </motion.article>
    </section>

   <section className='flex flex-col justify-center pt-5 pb-16 lg:pt-4 gap-10 w-full mx-auto bg-gradient-to-tr from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200'>

    <SectionTitle className="delay-2000" param1='WHAT' param2='CAN I DO'/>

        <div className='max-w-custom h-full mx-auto grid lg:grid-cols-3 gap-5 dark:text-[#ffff]'>

            <motion.div initial="initial" whileInView="animate" variants={contentVariants} className='max-w-xs flex flex-col justify-items-center items-center rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1] overflow-hidden'>

                <div className='customClipPath bg-gradient-to-br from-orange-600 to-orange-400 w-full h-40 pt-6 flex justify-center items-start'>
                    <img className='w-20 h-[70px] translate-y-1' src={webDev} alt="Web Development"/>
                </div>
                <h3 className='-mt-9 z-10 font-bold bg-gradient-to-b p-2 from-orange-600 to-orange-400'>WEB DEVELOPMENT</h3>
                <p className='self-start p-5'>I encompasses the technical aspect of building and maintaining websites and web applications. It involves coding, programming, and server management to bring a web design to life. Ensuring the functionality, interactivity, and performance of a website.</p>
            </motion.div>
            <motion.div initial="initial" whileInView="animate" variants={contentVariants} className='max-w-xs flex flex-col justify-items-center items-center rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1] overflow-hidden'>
                <div className='customClipPath bg-gradient-to-br from-blue-600 to-blue-400 w-full h-40 pt-6 flex justify-center items-start'>
                    <img className='w-20 h-20 ' src={laptop} alt="Web Design"/>
                </div>
                <h3 className='-mt-9 z-10 font-bold bg-gradient-to-b p-2 from-blue-600 to-blue-400'>WEB DESIGN</h3>
                <p className='self-start p-5'>Providing an enjoyable online experience and an art of creating visually appealing and user-friendly digital interfaces. It involves the use of graphic design elements, color schemes, typography, and layout techniques to craft websites that engage and captivate users. </p>
            </motion.div>
            <motion.div initial="initial" whileInView="animate" variants={contentVariants} className='max-w-xs flex flex-col justify-items-center items-center rounded-xl shadow-lg bg-white/60 dark:bg-[#363636a1] overflow-hidden'>
                <div className='customClipPath bg-gradient-to-br from-green-600 to-green-400 w-full h-40 pt-6 flex justify-center items-start'>
                    <img className='w-20 h-20' src={phone} alt="Web Design"/>
                </div>
                <h3 className='-mt-9 z-10 font-bold bg-gradient-to-b p-2 from-green-600 to-green-400'>RESPONSIVE DESIGN</h3>
                <p className='self-start p-5'>Take pride in crafting responsive web designs that adapt seamlessly to diverse devices and screen sizes, whether they&rsquo;re browsing on a desktop, tablet, or smartphone. Using my acquired skills, I can create flexible layouts and elements to cater to the evolving landscape of digital accessibility.</p>
            </motion.div>
        </div>
    </section>
    </>)
}

export default About