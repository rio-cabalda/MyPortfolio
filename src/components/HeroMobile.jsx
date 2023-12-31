import { useEffect } from "react";
import { motion,useAnimation  } from "framer-motion";
import avatar from '../assets/hero/avatar.png';
import hand from '../assets/hero/hand.png';
import { Facebook, Linkedin, Github,ArrowBigDownDash } from "lucide-react";
import useGlobalState from "../store/globalStateStore";
import CV from '../assets/file/CV.pdf';

const HeroMobile = () => {
    const controls = useAnimation();
    const waving = true;
    const {theme} = useGlobalState();

    const wavingVariants = {
    initial: { rotate: 2 },
    waving: { rotate: -30, transition: {
      duration: 0.3, 
    }},
  };

  const startWaving = async () => {
    while (waving) {
      await controls.start('waving');
      await controls.start('initial');
      await new Promise((resolve) => setTimeout(resolve, 60)); // 1-second pause
    }
  };

  const socialVariants = {
    initial: {opacity: 0 },
    animate: {opacity: 1, 
    transition: { staggerChildren: 0.5, duration: 1, delayChildren: 2}
    }
  }

  const titleVariants = {
    initial:{opacity:0, scale:0},
    animate:{opacity:1, scale:1,
      transition:{
        type:"spring", stiffness:100, damping:10, duration:0.5, delayChildren: 1 ,staggerChildren:0.5
      }}
  }
  
  useEffect(() => {
    startWaving();
    //eslint-disable-next-line
  }, []);

  return (
    <>
    <article className="lg:hidden max-w-custom mx-auto z-10 flex-grow grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <motion.div 
        initial="initial"
        animate="animate"
        variants={titleVariants}
        exit="initial" className="flex flex-col justify-end md:justify-start items-center md:items-end md:pt-20">
        <motion.div 
        variants={titleVariants}
        className="flex w-fit h-fit gap-5 px-8 py-4 bg-white dark:bg-[#363636] dark:text-white rounded-lg shadow-md items-center md:items-start ">
        <div className="translate-x-3 translate-y-1 lg:translate-x-3 lg:translate-y-3">
            <motion.div
            initial="initial" 
            animate={controls}
            variants={wavingVariants}
            exit="initial"
            className="w-16 h-16"
            >
                <div className="w-10">
                    <img className="w-full" src={hand} alt="hand" />
                </div>
            </motion.div>
        </div>
        <div>
            <p className="text-slate-600 dark:text-slate-100">{"Hello, I'm"}</p>
            <h2 className="text-5xl tracking-widest font-bold">Rio</h2>
        </div>
        </motion.div>
        <motion.div
        variants={titleVariants}
        className="w-fit h-fit mt-2 md:mt-10 px-6 py-2 text-right bg-white dark:bg-[#363636] dark:text-slate-100 rounded-lg shadow-md text-slate-600">
        <p>Front-end Developer</p>
        <p >Computer Engineer</p>
        </motion.div>
    </motion.div>

    
    <div className="w-full flex flex-col justify-end items-center md:items-start">
        <div className="h-[50vh] md:h-[70vh] lg:h-[70vh]">
        <img  className="h-full brightness-90 dark:brightness-[0.8] object-cover" src={avatar} alt="Avatar" />
        </div>
    </div>

    </article>

    <aside className="lg:hidden p-4 absolute right-0 bottom-1/2 lg:bottom-0 z-50">
    <motion.ul 
    initial="initial" animate="animate" variants={socialVariants} 
    className="flex flex-col gap-2">
        <motion.li 
        variants={socialVariants}
        className="relative w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 overflow-hidden duration-300">
        <a className=" flex justify-center items-center" href={CV} download="Cabalda-CV" >
          <span className="w-fit h-1/2 text-center bg-[#28282B] text-white dark:text-black dark:bg-white absolute top-0 left-1/2 -translate-x-1/2 translate-y-[45%] z-30 font-bold">CV</span>
          <motion.div className="z-20"initial={{ y: 1 }}
            animate={{ y: 40 }}
            transition={{ duration: 1, repeat: Infinity }}>
            <ArrowBigDownDash color={theme === 'light'?'#fff':'#000'} />
          </motion.div>
          
          </a> 
        </motion.li >
        <motion.li 
        variants={socialVariants}
        className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 duration-300">
        <a href="https://www.linkedin.com/in/riojoy-cabalda" rel="noreferrer" target="_blank" > <Linkedin size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a> 
        </motion.li >
        <motion.li 
        variants={socialVariants}
        className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 duration-300">
        <a href="https://github.com/rio-cabalda" rel="noreferrer" target="_blank" > <Github size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a>
        </motion.li>
        <motion.li
        variants={socialVariants} 
        className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full hover:scale-110 active:scale-90 duration-300">
        <a href="https://www.facebook.com/rjcabalda" rel="noreferrer" target="_blank" > <Facebook className="-translate-x-[1px]" size={25} color={theme === 'light'?'#fff':'#000000'} strokeWidth={1}/></a>
        </motion.li>
    </motion.ul>
    </aside>
</>
)
}

export default HeroMobile