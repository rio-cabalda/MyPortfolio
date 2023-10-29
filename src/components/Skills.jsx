import SectionTitle from "./SectionTitle"
import skills from "../data/skills";
import { motion } from 'framer-motion';

const Skills = () => {
  const variants = {
    initial: {scale: 0.2, opacity: 0 },
    animate: {scale: 1, opacity: 1,
              transition:{
                duration: 1,
                // type:"spring",
                // stiffness: 900,
                // dumping: 10,
                staggerChildren: 0.2
              }
            }
  }

  return (
    <section id="skills" className='w-full min-h-screen dark:text-white bg-gradient-to-tr pt-10 lg:pt-20 from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200 flex justify-center items-start'>
      <div className="max-w-custom mx-auto flex flex-col items-center justify-center gap-10">
          <SectionTitle param1="my" param2="skills" />
          <motion.div 
            initial="initial" whileInView="animate"variants={ variants }
            className="flex flex-wrap gap-5 w-full h-full px-4 md:px-0 md:w-3/4 md::h-1/2 justify-center items-stretch transform origin-center overflow-auto pb-10">
            {skills.map((item)=>(
              <motion.div variants={ variants } className="w-24 h-24 lg:w-40 lg:h-40 flex p-2 lg:p-4 pb-1 text-center flex-col justify-start items-center bg-white/30 shadow-md rounded-lg" key={item.id}>
                <img className={`w-10 h-10 lg:w-20 lg:h-20 object-contain p-1 ${item.title === "github" ? "scale-150":""}`} src={item.image} alt={item.title} />
                <h3 className="w-full flex-grow font-semibold uppercase text-xs lg:text-sm whitespace-normal flex items-center justify-center">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>

  )
}

export default Skills