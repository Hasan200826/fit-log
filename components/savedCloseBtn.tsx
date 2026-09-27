"use client";

import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { DataProvider } from "@/contextfolder/sheredata";
import { IExercise } from "@/type/ExacisaceType";

interface SavedCloseBtnProps {
  exasise: IExercise;
}

function SavedCloseBtn({ exasise }: SavedCloseBtnProps) {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error(
      "SavedCloseBtn must be used inside Sheredata Provider"
    );
  }

  const { saved, setSaved } = context;

  const handlSaveClsBtn = () => {
    setSaved(saved.filter((exercise) => exercise.id !== exasise.id));
  };

  return (
    <button
      onClick={handlSaveClsBtn}
      className="shrink-0 text-zinc-500 hover:text-white"
    >
      <IoMdClose className="text-2xl" />
    </button>
  );
}

export default SavedCloseBtn;