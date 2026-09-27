"use client";

import React, { useContext } from "react";
import { DataProvider } from "@/contextfolder/sheredata";
import { IExercise } from "@/type/ExacisaceType";
import { showToast } from "nextjs-toast-notify";

interface TodayPlanBtnProps {
  findExasise: IExercise;
}

const TodayPlanBtn = ({ findExasise }: TodayPlanBtnProps) => {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error("TodayPlanBtn must be used inside Sheredata Provider");
  }

  const { todayPlan, settodayPlan } = context;

  function handlTodayPlanBtn() {
    const findObj = todayPlan.find(
      (exercise: IExercise) => exercise.id === findExasise.id
    );

    if (findObj) {
      showToast.error(
        `${findExasise.name} is already added to TodayPlan list`,
        {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          icon: "",
          sound: true,
        }
      );
    } else {
      settodayPlan([...todayPlan, findExasise]);

      showToast.success(
        `${findExasise.name} is added to TodayPlan list`,
        {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          icon: "",
          sound: true,
        }
      );
    }
  }

  return (
    <button onClick={handlTodayPlanBtn} className=" px-5 py-2 border-1 rounded-2xl">
      Add to Today Plan
    </button>
  );
};

export default TodayPlanBtn;