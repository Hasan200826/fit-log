import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { DataProvider } from '@/contextfolder/sheredata'
function TodayCloseBtn({plan}) {
  const {todayPlan,settodayPlan} = useContext(DataProvider)
  const handleTodayCloseBtn = ()=>{
    settodayPlan(todayPlan.filter((exasise)=>exasise.id !== plan.id))
  }
  return (
    <button 
       onClick={handleTodayCloseBtn}
       className="text-zinc-500 hover:text-white">
      <IoMdClose className=" text-2xl" />
    </button>
  );
}

export default TodayCloseBtn;