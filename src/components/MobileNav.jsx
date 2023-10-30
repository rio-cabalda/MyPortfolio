import React from 'react';
import { Sun, Moon } from "lucide-react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MobileNav = ({navLinks,navigation,theme,handleNav,handleToggle}) => {
    const variants = {
        initial: {y:100},
        animate: (i) => ({y:0,
            transition:{
                duration: 1,
                delay: i * 0.3
            }
        })
    }

return (
<nav className="lg:hidden bg-slate-200 dark:bg-slate-800 w-full h-14 text-xs">
    <motion.ul initial="initial" animate="animate" variants={variants} className='w-full h-full grid grid-cols-6'>
        {navLinks.map((link,i) => (
            <motion.li variants={variants} custom={i} key={link.title} 
            className={`flex flex-col justify-center items-center gap-1 ${navigation === link.title? "text-violet-800 dark:text-violet-600 bg-slate-300 dark:bg-slate-700": "text-slate-500 dark:text-slate-600"} cursor-pointer duration-500`}
            onClick={()=>handleNav(link)}
            >
                {React.createElement(link.icon,{className: "w-6 h-6"})} 
                <span className='uppercase font-semibold'>{link.title}</span>
            </motion.li>
        ))}     
        <motion.li variants={variants} className='flex flex-col justify-center items-center gap-1 cursor-pointer text-yellow-700'
            onClick={handleToggle}>
            {theme === 'light'? <Sun className='w-6 h-6'/> : <Moon className='w-6 h-6'/>}
            <span className='uppercase font-semibold'>{theme}</span>
        </motion.li>
    </motion.ul>
</nav>
)
}

MobileNav.propTypes = {
    navLinks: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
    })
    ).isRequired,
    navigation: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    handleNav: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default MobileNav