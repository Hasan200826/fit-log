"use client"

import React, { useContext } from 'react';
import {DataProvider} from '@/contextfolder/sheredata'
import { IExercise } from '@/type/ExacisaceType';

const PlaneHeading = () => {
   const { todayPlan, saved } = useContext(DataProvider); 
   const totleDuration =(int:number)=>{
     const totletodayPlan = todayPlan.reduce((sum:number,num:IExercise)=>sum + num.duration,0);
     const totleSaved = saved.reduce((sum:number,num:IExercise)=>sum+ num.duration,0);
     return int+totletodayPlan+totleSaved
   }
   const totleCalorise =(int:number)=>{
     const totletodayPlan = todayPlan.reduce((sum:number,num:IExercise)=>sum + num.caloriesBurned,0);
     const totleSaved = saved.reduce((sum:number,num:IExercise)=>sum+ num.caloriesBurned,0);
     return int+totletodayPlan+totleSaved
   }
 return (
    <div className=' container mx-auto capitalize text-center md:text-left'>
      <div className=' py-5'>
        <h1 className=' text-white text-2xl font-bold'>my plan</h1>
        <p className=' text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className=' bg-gray-800 rounded-[10px] p-5 flex justify-between'>
        <div className=' w-60'>
           <h4 className=' capitalize text-gray-500'>exercise</h4>
           <p className=' text-4xl font-bold text-[#C2F800]'>{todayPlan.length+saved.length}</p>
        </div>
        <div className=' w-60'>
           <h4 className=' capitalize text-gray-500'>munites</h4>
           <p className=' text-4xl font-bold text-white'>{totleDuration(0)}</p>
        </div>
        <div className=' w-60'>
           <h4 className=' capitalize text-gray-500'>calorise</h4>
           <p className=' text-4xl font-bold text-white'>{totleCalorise(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaneHeading;