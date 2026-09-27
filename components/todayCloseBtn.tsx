"use client";

import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { DataProvider } from "@/contextfolder/sheredata";
import { IExercise } from "@/type/ExacisaceType";

interface TodayCloseBtnProps {
  plan: IExercise;
}

function TodayCloseBtn({ plan }: TodayCloseBtnProps) {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error(
      "TodayCloseBtn must be used inside Sheredata Provider"
    );
  }

  const { todayPlan, settodayPlan } = context;

  const handleTodayCloseBtn = () => {
    settodayPlan(
      todayPlan.filter((exercise) => exercise.id !== plan.id)
    );
  };

  return (
    <button
      onClick={handleTodayCloseBtn}
      className="text-zinc-500 hover:text-white"
    >
      <IoMdClose className="text-2xl" />
    </button>
  );
}

export default TodayCloseBtn;