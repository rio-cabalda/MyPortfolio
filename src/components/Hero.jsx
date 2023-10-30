import useSectionObserver from "../hooks/useSectionObserver";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  const sectionRef = useSectionObserver('home');// this function will change the state of navigation when this component is in viewport

  


  return (
    <section ref={sectionRef} id="home" className='relative pt-0 pb-14 lg:pb-0 lg:pt-20 flex w-full min-h-screen overflow-hidden 
    bg-gradient-to-tr from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200'>

      {/* Slider text */}
      <div className="absolute w-full -bottom-[50px]  lg:-bottom-[120px] -left-5 text-[50vh] text-[#3434343d] dark:text-[#cfcfcf3d] whitespace-nowrap lead" direction="left">
      <div className="inline-block animate-marquee">&nbsp;&nbsp;FRONT-END DEVELOPER</div>
      <div className="inline-block animate-marquee">&nbsp;&nbsp;FRONT-END DEVELOPER</div>
      </div>
    
    <HeroDesktop />
    <HeroMobile />

    </section>
  )
}

export default Hero