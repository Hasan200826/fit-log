"use client";

import { DataProvider } from "@/contextfolder/sheredata";
import { IExercise } from "@/type/ExacisaceType";
import { showToast } from "nextjs-toast-notify";
import { useContext } from "react";

interface SavedBtnProps {
  findExasise: IExercise;
}

const SavedBtn = ({ findExasise }: SavedBtnProps) => {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error("SavedBtn must be used inside Sheredata Provider");
  }

  const { saved, setSaved } = context;

  function handleSaveBtn() {
    const isAlreadySaved = saved.some(
      (exercise) => exercise.id === findExasise.id
    );

    if (isAlreadySaved) {
      showToast.error(
        `${findExasise.name} is already added to saved list`,
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
      setSaved([...saved, findExasise]);

      showToast.success(
        `${findExasise.name} is added to saved list`,
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
    <div className="pointer-coarse">
      <button
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:bg-lime-300"
        onClick={handleSaveBtn}
      >
        ♡ Save for later
      </button>
    </div>
  );
};

export default SavedBtn;