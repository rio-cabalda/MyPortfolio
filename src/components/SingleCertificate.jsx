import PropTypes from 'prop-types';
import {motion } from 'framer-motion';

function extractString(filePath) {
    // Split the file path by "/"
   const pathParts = filePath.split('/');
   const pathLength = pathParts.length - 1;
   // Get the fourth element (index 3) and extract the file name without extension
   const fileNameWithExtension = pathParts[pathLength];
   return 'Cabalda_'+fileNameWithExtension;
 }

const SingleCertificate = ({image, title, certLink, download,topics}) => {
    const fileName = extractString(download);
    console.log(fileName);
    const variants = {
        initial: { opacity: 0},
        animate: { opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.3,
            }}
    }




return (
    <section className='w-full min-h-screen pt-28 lg:pt-40 px-4 lg:px-0 flex flex-wrap items-start lg:items-center justify-center backface-hidden'>
            <motion.div 
                initial="initial" whileInView="animate" variants={variants}
                className=' w-full bg-white dark:bg-gradient-to-br dark:from-[#1d9de1] dark:to-[#be34ce] md:bg-transparent md:dark:bg-none p-4 rounded-lg shadow-lg md:shadow-none lg-custom:p-0 h-full flex flex-col lg:flex-row items-center justify-start gap-3 lg:gap-10 backface-hidden'>
                
                <motion.div variants={variants} className='w-[15rem] md:w-[20rem] lg:w-[90rem] lg:h-fit rounded-md shadow-md overflow-hidden '>
                    <img className='w-full object-fit' src={image} alt={title} />
                </motion.div>

                <motion.div variants={variants} className='flex flex-col justify-center text-lg gap-2 lg:gap-5 dark:text-white' >
                    <motion.h3 variants={variants} className='text-center lg:text-left text-xl lg:text-5xl font-bold'>{title}</motion.h3>
                    <motion.div variants={variants} className='italic text-base lg:text-lg text-gray-900 dark:text-gray-200'>
                            {topics.map((item,index)=>(<span key={item}>{`${item}${index===(topics.length - 1)? "":", "}`}</span>))}
                    </motion.div>
                    <motion.div variants={variants} className='flex flex-col gap-2 lg:gap-5 text-xs lg:text-lg'>
                        <motion.div variants={variants} className='flex justify-center lg:justify-start py-3 gap-5 uppercase tracking-tighter'>
                        <motion.a variants={variants} href={certLink} target='_blank' rel="noreferrer" className='flex items-center font-bold leading-none gap-2 border-b-2 border-black dark:border-white pb-2'>Certificate URL</motion.a>
                        <motion.a variants={variants} href={download} download={extractString(`${download}`)} target='_blank' rel="noreferrer" className='flex items-center font-bold leading-none gap-2 border-b-2 border-black dark:border-white pb-2 '>Download Certificate</motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

        </section>
)
}

SingleCertificate.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    certLink: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    };  

export default SingleCertificate