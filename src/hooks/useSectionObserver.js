import { useEffect,useRef } from "react";
import useGlobalState from "../store/globalStateStore";


const useSectionObserver = ( sectionName) => {
    const {setNavigation} = useGlobalState();
    const sectionRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Run your function when the observed section is in view
            setNavigation(sectionName)
        }
        });
    },
    {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // Margin around the root, effectively extends the area of the viewport
        threshold: 0.5, // Specifies at what percentage of the target's visibility the observer's callback should be executed
    }
    );

    if (sectionRef.current) {
    observer.observe(sectionRef.current);
    }

    return () => {
    if (sectionRef.current) {
         //eslint-disable-next-line
        observer.unobserve(sectionRef.current);
    }
    };
     //eslint-disable-next-line
}, []);

return sectionRef;
};

export default useSectionObserver;