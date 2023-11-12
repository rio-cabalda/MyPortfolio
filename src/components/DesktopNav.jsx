import { Sun, Moon } from "lucide-react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const DesktopNav = ({navLinks,navigation,theme,handleNav,handleToggle}) => {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    
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
    <nav className={`backdrop-blur-sm hidden lg:flex items-center justify-between w-full px-8 lg-custom:px-0 py-4 gap-5 text-[#315467] dark:text-white duration-300`}>
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
                    onClick={()=>handleNav("home")}
                    className="content-center flex items-center text-4xl font-semibold leading-none cursor-pointer">
                        <span className="text-[#f77f00] dark:text-[#fcbf49]">&#123;</span>
                            &nbsp;dev-rio&nbsp; 
                        <span className="text-[#f77f00] dark:text-[#fcbf49]">&#125;</span>
                    </motion.h2>
            </div>
            <motion.ul 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="flex text-lg tracking-widest">
                {navLinks.map((navLink,i) => (
                    <motion.li key={navLink.title} variants={variants} custom={i}>
                        <a className={`z-50 uppercase font-semibold no-underline relative text-right inline-block px-2 xl:px-4 py-2 mx-1 leading-none cursor-pointer ${navigation === navLink.title ? 'text-[#e69846] dark:text-[#f77f00]':'hover:text-[#e69846] dark:hover:text-[#f77f00]'} duration-300`}
                        // after:absolute after:w-3/4 after:origin-center after:bottom-0 after:left-1/2 after:-translate-x-[52%] after:h-[4px] after:bg-sky-400 after:transform ${navigation === navLink.title ? 'after:scale-x-100':'after:scale-x-0 hover:after:scale-x-100'} after:duration-300 after:rounded-full after:ease-in
                        onClick={()=>handleNav(navLink)}>
                            {navLink.title}</a>
                    </motion.li>
                ))}        
            </motion.ul>
            {/* Theme Toggle */}
            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, duration:1}} className="w-14 h-fit bg-gradient-to-br from-[#1d9ce154] to-[#bf34ce47] dark:from-slate-100 dark:to-slate-100 p-1 rounded-full flex items-center justify-start dark:justify-end transform duration-300" onClick={handleToggle}>
                <motion.span layout transition={spring} className="max-w-fit text-black bg-white rounded-full ">{theme === 'dark'? <Sun size={20}/> : <Moon size={20}/>}</motion.span>
            </motion.button>
        </nav>
)
}

DesktopNav.propTypes = {
    navLinks: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
    })
    ).isRequired,
    navigation: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    handleNav: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default DesktopNav