"use client";

import { IExercise } from "@/type/ExacisaceType";
import React, { createContext, useState } from "react";

interface DataContextType {
  todayPlan: IExercise[];
  settodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  saved: IExercise[];
  setSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
  MyPlaneBtn: string;
  setMyPlaneBtn: React.Dispatch<React.SetStateAction<string>>;
}

export const DataProvider = createContext<DataContextType | undefined>(
  undefined
);

interface SheredataProps {
  children: React.ReactNode;
}

function Sheredata({ children }: SheredataProps) {
  const [todayPlan, settodayPlan] = useState<IExercise[]>([]);
  const [saved, setSaved] = useState<IExercise[]>([]);
  const [MyPlaneBtn, setMyPlaneBtn] = useState("todayplan");

  const data: DataContextType = {
    todayPlan,
    settodayPlan,
    saved,
    setSaved,
    MyPlaneBtn,
    setMyPlaneBtn,
  };

  return (
    <DataProvider.Provider value={data}>
      {children}
    </DataProvider.Provider>
  );
}

export default Sheredata;