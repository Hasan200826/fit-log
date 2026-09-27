"use client";

import { useContext } from "react";
import { DataProvider } from "@/contextfolder/sheredata";
import TodayPlanCard from "./todayPlaneCard";
import { IExercise } from "@/type/ExacisaceType";
import Link from "next/link";

const ToDayPlan = () => {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error("ToDayPlan must be used inside Sheredata Provider");
  }

  const { todayPlan } = context;

  return (
    <div className="w-full p-4 flex flex-col gap-4 justify-center">
      {todayPlan.length > 0 ? (
        todayPlan.map((plan: IExercise) => (
          <TodayPlanCard
            key={plan.id}
            plan={plan}
            
          />
        ))
      ) : (
        <div className="capitalize text-center">
          <h2 className="text-[20px] font-bold">
            nothing here yet
          </h2>

          <p className="text-[10px] my-2">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="bg-[#CCFF00] px-5 py-1 rounded-2xl text-black"
          >
            go to workout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToDayPlan;