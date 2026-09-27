"use client";

import { DataProvider } from "@/contextfolder/sheredata";
import { IExercise } from "@/type/ExacisaceType";
import { showToast } from "nextjs-toast-notify";
import { useContext } from "react";

interface SavedBtnProps {
  findExasise:IExercise
} 

const SavedBtn = ({ findExasise }:SavedBtnProps) => {
  const { saved, setSaved } = useContext(DataProvider);

  function handlSaveBtn() {
    const findObj = saved.find((Exasise:IExercise)=>Exasise.id === findExasise.id)
    if(findObj){
      showToast.error(`${findExasise.name} is alrady addd to saved list`, {
      duration: 4000,
      progress: true,
      position: "top-right",
      transition: "bounceIn",
      icon: '',
      sound: true,
      });
    }else{
      setSaved([...saved, findExasise]);
      showToast.success(`${findExasise.name} is add to saved list`, {
      duration: 4000,
      progress: true,
      position: "top-right",
      transition: "bounceIn",
      icon: '',
      sound: true,
      });
    }
    
  }

  return (
    <div className=" pointer-coarse">
      <button
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:bg-lime-300" 
       onClick={handlSaveBtn}>
       ♡ Save for later
       </button>
    </div>
    
  );
};

export default SavedBtn;