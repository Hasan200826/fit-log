
import ExasiseCard from '@/components/ExasiseCard';
import { IExercise } from '@/type/ExacisaceType';
import React from 'react';


const ExasisePromis = async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  return res.json()
}

async function ExaciseInfoSection() {
  const Exasises = await ExasisePromis()
  
  return (
    <div className=' grid grid-cols-3 grid-rows-3 gap-3 my-5'>
       {
        Exasises.map((Exasise:IExercise)=><ExasiseCard key={Exasise.id} Exasise={Exasise} />)
       }
    </div>
  );
}

export default ExaciseInfoSection;