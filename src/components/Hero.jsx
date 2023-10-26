import { motion,useAnimation  } from "framer-motion";
import { useEffect } from "react";
import avatar from '../assets/hero/avatar.png';
import hand from '../assets/hero/hand.png';
import { Facebook, Linkedin, Github } from "lucide-react";
import useGlobalState from "../store/globalStateStore";

const Hero = () => {
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
    transition: { staggerChildren: 1, duration: 1, delayChildren: 3}
    }

  }

  const textVariants = {
    initial: {x:0},
    animate: {
      x:"-220%", 
      transition: {
        delay:3,
        duration:15,
        repeatType:"mirror",
        repeat:Infinity }
    }
  }
  
  useEffect(() => {
    startWaving();
  }, []);



  return (
    <section id="home" className="relative pt-20 flex w-full min-h-[100vh] overflow-hidden 
    bg-gradient-to-tr from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="absolute w-3/4 -bottom-[120px] -left-5 text-[50vh] text-[#3434343d] dark:text-[#cfcfcf3d] whitespace-nowrap lead duration-500"> 
            FRONT-END DEVELOPER
        </motion.div>
      <article className="z-10 flex-grow grid grid-cols-3">
        <div className="flex flex-col items-end pt-20">
          <motion.div 
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{type:"spring", stiffness:100, damping:10, duration:0.5, delay:3}}
          exit="initial"
          className="flex w-fit h-fit gap-5 px-8 py-4 bg-white dark:bg-[#363636] dark:text-white rounded-lg shadow-md items-center ">
            <div className="translate-x-3 translate-y-1">
              <motion.div
                className="w-16 h-16"
                initial="initial"
                animate={controls}
                variants={wavingVariants}
                exit="initial" 
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
            initial={{ x:-500, opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration:5, delay:3.5, 
              ease:[0, 0.71, 0.2, 1.01], type:"spring", stiffness:500, damping:15, restDelta: 0.001 
            }}
            exit="initial"
            className="w-fit h-fit mt-10 px-6 py-2 text-right bg-white dark:bg-[#363636] dark:text-slate-100 rounded-lg shadow-md text-slate-600">
            <p>Front-end Developer</p>
            <p >Computer Engineer</p>
          </motion.div>
        </div>

        <div className="flex flex-col justify-end">
          {/* avatar */}
          <div className=" h-[70vh]">
            <img  className="h-full object-cover" src={avatar} alt="Avatar" />
            
          </div>
        </div>
        {/* Sliding Text Container */}
        
        <div className="">
          {/* 333333 */}
        </div>
      </article>

      <aside className="p-4 fixed right-0 bottom-0 z-50">
        <motion.ul initial="initial" animate="animate" variants={socialVariants} className="flex flex-col gap-2">
          <motion.li variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full hover:scale-110 active:scale-90 duration-300">
            <a href="https://www.facebook.com/rjcabalda" rel="noreferrer" target="_blank" > <Facebook className="-translate-x-[1px]" size={25} color={theme === 'light'?'#fff':'#3b5998'} strokeWidth={1}/></a>
          </motion.li>
          <motion.li variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 duration-300">
            <a href="www.linkedin.com/in/rio-joy-cabalda-5457b2269" rel="noreferrer" target="_blank" > <Linkedin size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a> 
          </motion.li >
          <motion.li variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 duration-300">
          <a href="https://github.com/rio-cabalda" rel="noreferrer" target="_blank" > <Github size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a>
          </motion.li>
        </motion.ul>
      </aside>
    </section>
  )
}

export default Hero