
import React from 'react';
import ExasiseCard from './ExasiseCard';
import Link from 'next/link';
import { IExercise } from '@/type/ExacisaceType';

const ExasisePromis = async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  return res.json()
}

async function ExaciseInfoSection() {
  const Exasises = await ExasisePromis()
  
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 my-5'>
       {
        Exasises.map((Exasise:IExercise)=><Link href={`/${Exasise.id}`} key={Exasise.id}><ExasiseCard  Exasise={Exasise} /></Link>)
       }
    </div>
  );
}

export default ExaciseInfoSection;