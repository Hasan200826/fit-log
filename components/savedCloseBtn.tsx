import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { DataProvider } from '@/contextfolder/sheredata'
function SavedCloseBtn({exasise}) {
  const{saved,setSaved} = useContext(DataProvider)
  const handlSaveClsBtn =()=>{
    setSaved(saved.filter((saved)=> saved.id !== exasise.id))
  }
  return (
    <button 
    onClick={handlSaveClsBtn}
    className="shrink-0 text-zinc-500 hover:text-white">
       <IoMdClose className=" text-2xl" />
    </button>
  );
}

export default SavedCloseBtn;