

import SavedBtn from '@/components/SavedBtn';
import TodayPlanBtn from '@/components/TodayPlanBtn';
// import { IExercise } from '@/type/ExacisaceType';
import Image from 'next/image';
import React from 'react';
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// const ExasisePromis = async()=>{
//   const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
//   return res.json()
// }

async function Page({params}:PageProps) {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
  const findExasise = await res.json()
  // const ExasisePromis = res.json()
  // const findExasise = await ExasisePromis()
  // const findExasise =Exasises.find((Exasise:IExercise)=> Number(Exasise.id) === Number(id))
   return (
    <div className="min-h-screen bg-[#0b0d0f] p-4 text-white sm:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#0b0d0f]">

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <Image src={findExasise.image} alt='image' width={500} height={500} className='w-full h-full' />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col">

            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold tracking-wide sm:text-4xl">
                {findExasise.name}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                {findExasise.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex gap-3">
                {findExasise.muscleGroups.map((muscleGroup:string) => (
                  <span
                    key={muscleGroup}
                    className="rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-black"
                  >
                    {muscleGroup}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/5 bg-gray-900 border-1 border-black rounded-[10px] capitalize">
              <div className=' flex justify-between border-b-1 px-2 m-2 '>
                 <h3>Equipment</h3>
                 <h3>{findExasise.equipment}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2 '>
                 <h3>difficulty</h3>
                 <h3>{findExasise.difficulty}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2 '>
                 <h3>sets</h3>
                 <h3>{findExasise.sets}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2 '>
                 <h3>reps</h3>
                 <h3>{findExasise.reps}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2'>
                 <h3>duration</h3>
                 <h3>{findExasise.duration}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2'>
                 <h3>caloriesBurned</h3>
                 <h3>{findExasise.caloriesBurned}</h3>
              </div>
              <div className=' flex justify-between border-b-1 px-2 m-2 '>
                 <h3>rating</h3>
                 <h3>{findExasise.rating}</h3>
              </div>
             
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-[20px] font-semibold tracking-wide">
                INSTRUCTIONS
              </h2>

              <div className="mt-5 space-y-5">
                {findExasise.instructions.map((instruction:string, index:number) => (
                  <div
                    key={index}
                    className="flex gap-4 text-sm leading-6 text-gray-300"
                  >
                    <span className="font-bold text-gray-500">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TodayPlanBtn findExasise={findExasise}/>
              <SavedBtn findExasise={findExasise}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;