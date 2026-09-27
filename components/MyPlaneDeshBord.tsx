"use client";

import React, { useContext } from "react";

import { DataProvider } from "@/contextfolder/sheredata";

import ToDayPlan from "./ToDayPlan";
import SaveBox from "./SaveBox";

const MyPlaneDeshBord = () => {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error(
      "MyPlaneDeshBord must be used inside Sheredata Provider"
    );
  }

  const {
    todayPlan,
    settodayPlan,
    saved,
    setSaved,
    MyPlaneBtn,
    setMyPlaneBtn,
  } = context;

  function handleBtn(btnType: string) {
    setMyPlaneBtn(btnType);
  }

  const handleSelection = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === "duration") {
      settodayPlan(
        [...todayPlan].sort(
          (a, b) => b.duration - a.duration
        )
      );

      setSaved(
        [...saved].sort(
          (a, b) => b.duration - a.duration
        )
      );
    } else if (e.target.value === "Calories") {
      settodayPlan(
        [...todayPlan].sort(
          (a, b) => b.caloriesBurned - a.caloriesBurned
        )
      );

      setSaved(
        [...saved].sort(
          (a, b) => b.caloriesBurned - a.caloriesBurned
        )
      );
    } else if (e.target.value === "Rating") {
      settodayPlan(
        [...todayPlan].sort(
          (a, b) => b.rating - a.rating
        )
      );

      setSaved(
        [...saved].sort(
          (a, b) => b.rating - a.rating
        )
      );
    } else {
      settodayPlan([...todayPlan]);
      setSaved([...saved]);
    }
  }

  return (
    <div className="container mx-auto">

      {/* Top controls */}
      <div className="flex justify-between py-8">

        {/* Plan / Saved buttons */}
        <div className="capitalize border border-white rounded-[7px] p-1">

          <button
            onClick={() => handleBtn("todayplan")}
            className={`px-4 py-1 capitalize ${
              MyPlaneBtn === "todayplan"
                ? "bg-gray-700"
                : ""
            } rounded-[7px]`}
          >
            Todays plan
          </button>

          <button
            onClick={() => handleBtn("saved")}
            className={`px-6 py-1 capitalize ${
              MyPlaneBtn === "saved"
                ? "bg-gray-700"
                : ""
            } rounded-[7px]`}
          >
            Saved
          </button>

        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 capitalize">

          <p>sort by :</p>

          <select
            onChange={handleSelection}
            className="px-8 py-1 capitalize outline-0 border border-white rounded-[7px] bg-gray-950"
          >
            <option value="">Sort Type</option>
            <option value="duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>

        </div>
      </div>

      {/* Content */}
      <div className="min-h-[200px] w-full flex justify-center items-center text-white border border-white rounded-2xl shadow-2xl">

        {MyPlaneBtn === "todayplan" ? (
          <ToDayPlan />
        ) : (
          <SaveBox />
        )}

      </div>

    </div>
  );
};

export default MyPlaneDeshBord;