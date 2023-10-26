import { Sun, Moon } from "lucide-react";
import useGlobalState from "../store/globalStateStore"
import { motion } from 'framer-motion';
import { useState } from "react";

const Navbar = () => {
    const {theme, setTheme} = useGlobalState();
    const [selectedLink, setSelectedLink] = useState('home');
    const navLinks = [{title:'home',link:'#home'},{title:'about',link:'#about'},{title:'project',link:'#projects'}, {title:'skills',link:'#skills'},{title:'contact',link:'#contact'}];


    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    const handleNav = (e) =>{
        e.preventDefault();
        const value = e.target.textContent;
        setSelectedLink(value.toLowerCase().toString());
    }
    const handleToggle = () => {
        setTheme();
    }
    const variants = {
        hidden:{
            opacity: 0,
            y:-60
        },
        visible:(i)=>({
            opacity: 1,
            y:0,
            transition: {duration: 1, delay: i*0.3 }
        })    
    }

  return (
    <motion.header className="fixed w-full z-20 backdrop-blur-sm">
        <nav className={`flex items-center justify-between w-full px-8 py-4 gap-5 dark:text-white duration-300`}>
            <div>
                <motion.h2 
                    initial={{opacity:0, scale: 0}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay:2.1,
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                        type: "spring",
                        damping: 9,
                        stiffness: 200,
                        restDelta: 0.001
                    }
                    }}
                    className="content-center flex items-center text-4xl font-semibold leading-none">RIO JOY</motion.h2>
            </div>
            <motion.ul 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="flex text-base tracking-widest ">
                {navLinks.map((navLink,i) => (
                    <motion.li key={navLink.title} variants={variants} custom={i}>
                        <a href="#contact" className={`uppercase font-semibold no-underline relative text-right inline-block px-4 py-2 mx-1  after:absolute after:w-3/4 after:origin-center after:bottom-0 after:left-1/2 after:-translate-x-[52%] after:h-[1.5px] after:bg-sky-400 after:transform ${selectedLink === navLink.title ? 'after:scale-x-100':'after:scale-x-0 hover:after:scale-x-100'} after:duration-300 after:rounded-full after:ease-in leading-none`}
                        onClick={(e)=>handleNav(e)}>
                            {navLink.title}</a>
                    </motion.li>
                ))}        
            </motion.ul>
            {/* Theme Toggle */}
            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, duration:1}} className="w-14 h-fit bg-slate-300 dark:bg-slate-100 p-1 rounded-full flex items-center justify-start dark:justify-end transform duration-300" onClick={handleToggle}>
                <motion.span layout transition={spring} className="max-w-fit text-black bg-white rounded-full ">{theme === 'dark'? <Sun size={20}/> : <Moon size={20}/>}</motion.span>
            </motion.button>
        </nav>
    </motion.header>
  )
}

export default Navbar