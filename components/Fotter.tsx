import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png"
const Fotter = () => {
  return (
    <div className=' border-t-1 border-gray-400 '>
      <div className=' container mx-auto h-[70px] text-white'>
         <div className=' flex justify-between items-center mt-4'>
           <div className=' flex items-center'>
             <Image src={Logo} alt='Logo' />FITLOG
           </div>
           <div>
             <p className=' text-gray-400 text-[10px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
           </div>
         </div>
      </div>
    </div>
      
  );  
};

export default Fotter;