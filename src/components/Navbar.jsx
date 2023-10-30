import useGlobalState from "../store/globalStateStore"
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Home,Info,Laptop2, Lightbulb,UserSquare } from 'lucide-react';

const Navbar = () => {
    const {theme, setTheme, navigation, setNavigation} = useGlobalState();
    const navLinks = [
        {title:'home', icon:Home},
        {title:'about',icon:Info},
        {title:'projects',icon:Laptop2},
        {title:'skills',icon:Lightbulb},
        {title:'contact',icon:UserSquare}];

    const scrollInView =(elementID)=>{
        const element = document.getElementById(elementID);
            if (element) {
            element.scrollIntoView();
            }
        }
    
    const handleNav = (state) =>{
        const typeState = typeof state;
        const defineState = state?.title.toLowerCase();
        if(typeState === 'string'){
            setNavigation('home');
            scrollInView('home');
        }           
        else{
            setNavigation(defineState);
            scrollInView(defineState);
        }}
            
    const handleToggle = () => {
        setTheme();
    }

return (
<header className="fixed bottom-0 lg:top-0 left-0 w-full h-fit z-50 lg:bg-gradient-to-b from-white to-transparent dark:from-black/70 dark:to-transparent">
    <div className="max-w-custom mx-auto">

    <DesktopNav navLinks={navLinks}
                navigation={navigation}
                theme={theme}
                handleNav={handleNav}
                handleToggle={handleToggle}
                />

    <MobileNav navLinks={navLinks}
                navigation={navigation}
                theme={theme}
                handleNav={handleNav}
                handleToggle={handleToggle} />
    </div>
</header >
)
}

export default Navbar