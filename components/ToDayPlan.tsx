import { useContext } from "react";

import {DataProvider} from '@/contextfolder/sheredata'
import TodayPlanCard from "./todayPlaneCard";
import { IExercise } from "@/type/ExacisaceType";
import { DiVim } from "react-icons/di";
import Link from "next/link";

const ToDayPlan = () => {
   const {todayPlan} = useContext(DataProvider);

  return (
    <div className=" w-full p-4 flex flex-col gap-4 justify-center">
      {
        todayPlan.length > 0?
        todayPlan.map((plan:IExercise)=> <TodayPlanCard key={plan.id} plan={plan} Today={todayPlan}/>): <div className=" capitalize text-center">
           <h2 className=" text-[20px] font-bold">nathing here yet</h2>
           <p className=" text-[10px] my-2">Browse the library and add a lift to get today moving.</p>
           <Link href='/' className=" bg-[#CCFF00] px-5 py-1 rounded-2xl text-black">go to workout</Link>
        </div>
      }
    </div>
  );
};

export default ToDayPlan;