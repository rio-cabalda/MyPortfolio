import { useEffect } from "react";
import useGlobalState from "./store/globalStateStore"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const {theme} = useGlobalState();

  useEffect(()=>{
    if(theme === 'dark'){
     // document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  },[theme]);



  return (
    <main className="font-custom-fontFamily text-[#363434] min-h-screen duration-300">
      <ToastContainer position="top-center" />
      <Navbar />
      {/* <div className="min-h-screen"> */}
          <Hero />
          <About />
          <MyProjects />
          <Skills />
          <Contact />
      {/* </div> */}
        
    </main>
  )
}

export default App
