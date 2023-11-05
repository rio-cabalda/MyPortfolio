import { Facebook, Linkedin, Github } from "lucide-react";
import useGlobalState from "../store/globalStateStore";
import avatar from '../assets/hero/avatar.png';
import { motion } from "framer-motion";
import CV from '../assets/file/CV.pdf'
const HeroContent = () => {
    const {theme} = useGlobalState();

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
            duration:1,
            staggerChildren:0.5
        }}
    }

return (
    <article className="hidden lg:flex gap-20 max-w-custom w-full mx-auto dark:text-slate-200 z-10">
        <div className="flex w-full items-center justify-end">
            <motion.div initial="initial" animate="animate" variants={titleVariants} className="flex flex-col justify-center gap-1 origin-left">
                <motion.h3 variants={titleVariants} className="text-4xl tracking-[0.5rem] font-semibold">hello!</motion.h3>
                <motion.h1 variants={titleVariants} className="text-8xl leading-none font-bold text-black dark:text-white">I&apos;m Rio</motion.h1>
                <motion.p variants={titleVariants} className="text-2xl font-bold tracking-[0.7rem] text-[#0450AB] dark:text-[#fcbf49]  shadow-slate-400 text-shadow-sm">front-end developer</motion.p>

            <div  className="flex mt-10 gap-5">
                <a href={CV} download="Cabalda-CV">
                    <button className="rounded-full px-4 py-2 bg-[#f77f00] dark:bg-[#f77f00] text-black shadow-md shadow-slate-700">Download CV</button>
                </a>
                <motion.div initial="initial" animate="animate" variants={socialVariants} className="flex gap-2">
                    <motion.div variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 shadow-md shadow-slate-700 duration-300">
                        <a href="https://www.linkedin.com/in/riojoy-cabalda" rel="noreferrer" target="_blank" > <Linkedin size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a> 
                    </motion.div>
                    <motion.div variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full p-2 hover:scale-110 active:scale-90 shadow-md shadow-slate-700 duration-300">
                        <a href="https://www.github.com/rio-cabalda" rel="noreferrer" target="_blank" > <Github size={25} color={theme === 'light'?'#fff':'#000'} strokeWidth={1}/> </a>
                    </motion.div>
                    <motion.div variants={socialVariants} className="w-10 h-10 flex justify-center items-center bg-[#28282B] dark:bg-white rounded-full hover:scale-110 active:scale-90 shadow-md shadow-slate-700 duration-300">
                        <a href="https://www.facebook.com/rjcabalda" rel="noreferrer" target="_blank" > <Facebook className="-translate-x-[1px]" size={25} color={theme === 'light'?'#fff':'#000000'} strokeWidth={1}/></a>
                    </motion.div>
                </motion.div>
            </div>
            </motion.div>

        </div>

        <div className="w-full justify-start flex items-end">
            <div className="h-[80vh]">
                <img  className="h-full brightness-90 dark:brightness-[0.8] object-cover" src={avatar} alt="Avatar" />
            </div>
        </div>
    </article>
)
}

export default HeroContent