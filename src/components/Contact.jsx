import { motion,useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
  const ref = useRef();
const isInView = useInView(ref, { margin: "-100px" });
const formRef = useRef();
const [isLoading, setIsLoading] = useState(false);

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [text, setText] = useState('');

const variants = {
  initial: {opacity: 0, y: 100},
  animate: {opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    }}
}

const pathVariants = {
  initial:{pathLength: 0},
  animate:{ pathLength: 1,
    transition:{
      duration:3,
    }
  }
}
  console.log(isInView);
const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);
  emailjs.sendForm('service_9dc8wcp', 'template_pkc400z', formRef.current, 'VJu7Va-npVJnrmD0h')
      .then(() => {
          setIsLoading(false);
          toast.success('Email sent');
      }, () => {
        setIsLoading(false);
        toast.error('Error: Something wrong.')
      });
      setName('');
      setEmail('');
      setText('');
}

  return (
    <section id="contact" ref={ref} className="px-4 w-full min-h-screen flex items-center dark:text-white  bg-gradient-to-br from-[#6261BC] to-[#d4ecfd] dark:from-[#8128F5] dark:to-[#593656] duration-200">
      <div className="max-w-custom mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <motion.div initial="initial" whileInView="animate" variants={variants} className="w-full h-full leading-none flex flex-col gap-5 lg:gap-10 text-center lg:text-left py-5">
          <motion.h1 variants={variants} className="text-5xl lg:text-8xl font-bold text-orange-400">Let&apos;s work <br />together</motion.h1>
          <div>
            <motion.h2 variants={variants} className="text-lg lg:text-2xl font-bold">Email</motion.h2>
            <motion.p  variants={variants}className="text-base lg:text-lg font-semibold">riojoycabalda14@gmail.com</motion.p>
          </div>
          <div>
            <motion.h2 variants={variants} className="text-lg lg:text-2xl font-bold">Address</motion.h2>
            <motion.p  variants={variants}className="text-base lg:text-lg font-semibold">Brgy. Aplaya, Digos City,<br />Davao del Sur, Philippines</motion.p>
          </div>
          <div>
            <motion.h2 variants={variants} className="text-lg lg:text-2xl font-bold">Phone</motion.h2>
            <motion.p  variants={variants}className="text-base lg:text-lg font-semibold">+6394-6262-6886</motion.p>
          </div>
        </motion.div>
        <div className="pb-16 lg:pb-0 relative w-full flex justify-center lg:justify-start items-center">
        <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1}}
            transition={{ delay: 4, duration: 1 }}
            className='max-w-[90%] md:max-w-[50%] lg:max-w-full flex flex-col flex-1 gap-5 relative z-20 text-black dark:text-white text-sm lg:text-base '
          >
            <input type="text" value={name} onChange={(e)=>setName(e.value)} className='p-2 lg:p-5 bg-transparent border-2 border-slate-700 dark:border-slate-300 rounded-md outline-none placeholder:text-slate-900 dark:placeholder:text-slate-300' required placeholder="Name" name="name"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.value)} className='p-2 lg:p-5 bg-transparent border-2 border-slate-700 dark:border-slate-300 rounded-md outline-none placeholder:text-slate-900 dark:placeholder:text-slate-300' required placeholder="Email" name="email"/>
            <textarea rows={8} value={text} onChange={(e)=>setText(e.value)} className='p-2 lg:p-5 bg-transparent border-2 border-slate-700 dark:border-slate-300 rounded-md outline-none placeholder:text-slate-900 dark:placeholder:text-slate-300' placeholder="Message" name="message"/>
            <button disabled={isLoading} className='bg-orange-400 active:bg-orange-400 hover:bg-orange-500 disabled:bg-slate-600 rounded-md flex-1 p-2 lg:p-5'>{isLoading? "Submitting...": "Submit"}</button>
          </motion.form>
          <motion.div
            className="absolute top-0 left-0 flex justify-center py-7 h-full w-full stroke-orange-500 z-10"
            initial={{ opacity: 1,}}
            whileInView={{ opacity: 0,}}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg className='w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]'  viewBox="-1 -1 35 35">
              <motion.path
                strokeWidth={0.7}
                fill="none"
                initial="initial"
                animate={isInView && "animate"}
                variants={pathVariants}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
              M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
              C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
              c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
              c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
              c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
              c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
              c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
              c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
              c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
              c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
              l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
              C32.666,7.326,25.339,0,16.333,0z"
              />
            </svg>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact