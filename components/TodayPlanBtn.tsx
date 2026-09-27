'use client'

import React, { useContext } from 'react';
import {DataProvider} from '@/contextfolder/sheredata'
import { IExercise } from '@/type/ExacisaceType';
import { showToast } from 'nextjs-toast-notify';

interface TodayPlanBtnPromp {
 findExasise:IExercise,
}
const TodayPlanBtn = ({findExasise}:TodayPlanBtnPromp) => {
  const {todayPlan,settodayPlan} = useContext(DataProvider)
  function handlTodayPlanBtn (){
     const findObj = todayPlan.find((Exasise:IExercise)=>Exasise.id === findExasise.id)
        if(findObj){
          showToast.error(`${findExasise.name} is alrady addd to ToDayPlan list`, {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          icon: '',
          sound: true,
          });
        }else{
          settodayPlan([...todayPlan, findExasise]);
          showToast.success(`${findExasise.name} is add to ToDayPlan list`, {
                duration: 4000,
                progress: true,
                position: "top-right",
                transition: "bounceIn",
                icon: '',
                sound: true,
                });
        }
    
  }
  
  
  return (
    <div>
      <button
       onClick={handlTodayPlanBtn}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:bg-lime-300">
                <span>▣</span>
                Add to todays plan
              </button>
    </div>
  );
};

export default TodayPlanBtn;