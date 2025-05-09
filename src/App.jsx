import { use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import { div } from 'motion/react-client';

function App() {

  const releaseDate = new Date('2026-05-26T00:00:00')
  const [show, setShow] = useState(false)
 
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = releaseDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        setShow(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [releaseDate]);

  if (show) {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
       <motion.div
        className="flex flex-col items-center justify-center text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-green-400 mb-4">🚀 GTA 6 is Here!</h2>
        <p className="text-lg text-white mb-6">The wait is over. Dive into the action now!</p>
        <a
        href='https://www.rockstargames.com/VI'
          className="px-6 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-xl text-white font-semibold"
          >
          Explore Now
        </a>
      </motion.div>
      </div>
    )
  }
  

  return (
    <div className="min-h-screen overflow-hidden w-full bg-[#121330] flex flex-col justify-center items-center text-[#e5eaef] font-sans px-4">
      <div className='text'>
         <h1 className="text-4xl font-extrabold  text-center mb-8">GTA 6 Countdown</h1>
    <h3 className="text-xl md:text-xl font-semibold text-center mb-12">Number of Days Left for GTA 6 Release</h3>
      </div>
   
  
    <div className="flex gap-6">
      {/* Days */}
      <div className="flex flex-col items-center numBox bg-slate-800 p-4 rounded-2xl shadow-lg">
  <div className="relative h-[52px] w-[80px]  bg-slate-100 rounded-xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={timeLeft.days}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="absolute text-3xl font-bold text-[#121330]"
      >
        {timeLeft.days}
      </motion.span>
    </AnimatePresence>
  </div>
  <p className="mt-2 text-sm uppercase tracking-wide text-white">Days</p>
</div>
  
      {/* Hours */}
      <div className="flex flex-col items-center numBox bg-slate-800 p-4 rounded-2xl shadow-lg">
  <div className="relative h-[52px] w-[80px]  bg-slate-100 rounded-xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={timeLeft.hours}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="absolute text-3xl font-bold text-[#121330]"
      >
        {timeLeft.hours}
      </motion.span>
    </AnimatePresence>
  </div>
  <p className="mt-2 text-sm uppercase tracking-wide text-white">Hours</p>
</div>
  
      {/* Minutes */}
      <div className="flex flex-col items-center numBox bg-slate-800 p-4 rounded-2xl shadow-lg">
  <div className="relative h-[52px] w-[80px]  bg-slate-100 rounded-xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={timeLeft.minutes}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="absolute text-3xl font-bold text-[#121330]"
      >
        {timeLeft.minutes}
      </motion.span>
    </AnimatePresence>
  </div>
  <p className="mt-2 text-sm uppercase tracking-wide text-white">Minutes</p>
</div>
  
      {/* Seconds */}
      <div className="flex flex-col items-center numBox bg-slate-800 p-4 rounded-2xl shadow-lg">
  <div className="relative h-[52px] w-[80px]  bg-slate-100 rounded-xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={timeLeft.seconds}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="absolute text-3xl font-bold text-[#121330]"
      >
        {timeLeft.seconds}
      </motion.span>
    </AnimatePresence>
  </div>
  <p className="mt-2 text-sm uppercase tracking-wide text-white">Seconds</p>
</div>
    </div>
  </div>
  
  )
}

export default App
