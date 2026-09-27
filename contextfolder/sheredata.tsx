'use client'

import { IExercise } from '@/type/ExacisaceType';
import React, { createContext, useState } from 'react';

export const DataProvider = createContext<DataContextType | undefined>({});


function Sheredata({children}) {
  const [todayPlan,settodayPlan] =useState<IExercise[]>([])
  const [saved,setSaved] =useState<IExercise[]>([])
  const [MyPlaneBtn,setMyPlaneBtn]=useState('todayplan');
  const data ={
     todayPlan,
     settodayPlan,
     saved,
     setSaved,
     MyPlaneBtn,
     setMyPlaneBtn
  }
  return (
    <DataProvider.Provider value={data}>
      {children}
    </DataProvider.Provider>
  );
}

export default Sheredata;