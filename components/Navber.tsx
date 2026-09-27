"use client"

import Image from 'next/image';
import React, { useContext } from 'react';
import Logo from '@/assets/logo.png'
import Link from 'next/link';
import {DataProvider} from '@/contextfolder/sheredata'
const Navber = () => {
  const {todayPlan,saved} = useContext(DataProvider)
  return (
      <div className=' w-full h-[80px] flex items-center shadow-2xs shadow-gray-400 sticky top-0 left-0 z-10 bg-gray-900'>
        <div className=' text-white container mx-auto '>
           <div className=' flex justify-between items-center'>
            <div className=' flex items-center'>
              <Image src={Logo} alt='Logo'/>FITLOG
            </div>
            
            <ul className=' flex gap-5 cursor-pointer'>
              <Link href='/'><li>Workouts</li></Link>
              <Link href='/plane'><li>My Plan</li></Link>
            </ul>
            <div className=' flex gap-6 items-center capitalize'>
               <div className=' '>
                  <Link href='/plane' className='flex gap-2 items-center'>
                    <p>plan</p>
                    <div className=' bg-[#C2F800] px-2 text-center rounded-full'>{todayPlan.length}</div>
                  </Link>
                  
               </div>
               <div className=' '>
                  <Link href='/plane' className=' flex gap-2 items-center'>
                   <p>saved</p>
                  <div className=' text-white border-1 border-white px-2 text-center rounded-full'>{saved.length}</div>
                  </Link>
               </div>
               
            </div>
          </div>
         </div>
      </div>
      
   
  );
};

export default Navber;