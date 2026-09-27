import React, { useContext } from 'react';
import {DataProvider} from '@/contextfolder/sheredata'
import { IExercise } from '@/type/ExacisaceType';
import SavedCard from '@/components/SavedCard';
import Link from 'next/link';
const SaveBox = () => {
  const {saved} = useContext(DataProvider)
  return (
    <div className=' w-full p-5 flex gap-4 flex-col justify-start'>
       {
        saved.length>0 ?
         saved.map((exasise:IExercise)=> <SavedCard key={exasise.id} exasise={exasise}/>):<div className=" capitalize text-center">
           <h2 className=" text-[20px] font-bold">nathing here yet</h2>
           <p className=" text-[10px] my-2">Browse the library and add a lift to get today moving.</p>
           <Link href='/' className=" bg-[#CCFF00] px-5 py-1 rounded-2xl text-black">go to workout</Link>
        </div>
       }
    </div>
  );
};

export default SaveBox;