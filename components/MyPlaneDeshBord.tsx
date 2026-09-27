"use client"

import React, { useContext, useState } from 'react';
import {DataProvider} from '@/contextfolder/sheredata'
import ToDayPlan from './ToDayPlan';
import SaveBox from './SaveBox';
const MyPlaneDeshBord = () => {
  // const [MyPlaneBtn,setMyPlaneBtn]=useState('todayplan');
  const {todayPlan,settodayPlan,saved,setSaved,MyPlaneBtn,setMyPlaneBtn} = useContext(DataProvider)

  console.log('todayplane=',todayPlan);
  console.log('saved=',saved);
  
  
  function handleBtn (btntype:string){
    setMyPlaneBtn(btntype)
  }
  const handleSelection = (e)=>{
    if(e.target.value==='duration'){
      settodayPlan([...todayPlan].sort((a,b)=>b.duration - a.duration));
      setSaved([...saved].sort((a,b)=>b.duration - a.duration));
    }else if(e.target.value==='Calories') {
      settodayPlan([...todayPlan].sort((a,b)=>b.caloriesBurned - a.caloriesBurned))
      setSaved([...saved].sort((a,b)=>b.caloriesBurned - a.caloriesBurned))
    }else if(e.target.value==='Rating'){
      settodayPlan([...todayPlan].sort((a,b)=>b.rating - a.rating))
      setSaved([...saved].sort((a,b)=>b.rating - a.rating))
    }else{
      settodayPlan([...todayPlan])
      setSaved([...saved])
    }
    
  }

  return (
    <div className=' container mx-auto'>
       <div className=' flex justify-between py-8'>
          <div className=' capitalize border-1 rounded-[7px] border-white p-1'>
            <button 
            onClick={()=>handleBtn('todayplan')}
            className={` px-4 py-1 capitalize ${MyPlaneBtn==='todayplan'? 'bg-gray-700':''} rounded-[7px]`}>Todays plan</button>
            <button
             onClick={()=>handleBtn('saved')}
             className={` px-6 py-1 capitalize  ${MyPlaneBtn==='saved'? 'bg-gray-700':''} rounded-[7px]`}>saved</button>
          </div>
          <div className=' flex items-center gap-2 capitalize'>
            <p>sort by :</p>
            <select
            onClick={handleSelection }
            name="" id="" className=' px-8 py-1 capitalize outline-0 border-1 border-white rounded-[7px] bg-gray-950 '>
              <option value="">Sort Typr</option>
              <option value="duration">duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
       </div>
       <div className=' min-h-[200px] w-full flex justify-center items-center text-white border-1 border-white rounded-2xl shadow-2xl'>
          {MyPlaneBtn ==='todayplan'? <ToDayPlan/>:<SaveBox/>}
       </div>
    </div>
  );
};

export default MyPlaneDeshBord;