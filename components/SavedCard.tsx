
import Image from "next/image";
import { IExercise } from "@/type/ExacisaceType";
import Link from "next/link";
import SavedCloseBtn from "./savedCloseBtn";


interface ExerciseCardProps {
  exasise:IExercise
}


const SavedCard = ({exasise}: ExerciseCardProps) => {
  return (
    <div className="flex w-full h-[80px] items-center gap-3 rounded-lg border border-zinc-800 bg-[#151820] p-2.5">

      {/* Image */}
      <div className="h-16 w-26 shrink-0 overflow-hidden rounded-md">
        <Image
          src={exasise.image}
          alt={exasise.name}
          width={64}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Exercise Info */}
      <div className="min-w-0 flex-1">

        <h3 className="text-[11px] font-bold uppercase text-white">
          {exasise.name}
        </h3>

        <p className="text-[9px] text-zinc-400">
          {exasise.difficulty}
        </p>

        <div className="mt-1 flex items-center gap-2 text-[8px] text-zinc-400">
          <span>◷ {exasise.duration} min</span>
          <span>🔥 {exasise.caloriesBurned} kcal</span>
          <span>⚡ {exasise.sets}</span>
        </div>

      </div>

      {/* View Details */}
      <Link href={`/${exasise.id}`} className="shrink-0 rounded-md border border-zinc-700 px-3 py-1.5 text-[8px] text-zinc-300 hover:bg-zinc-800">
           View Details
      </Link>

      {/* Close */}
      <SavedCloseBtn exasise={exasise} />

    </div>
  );
};

export default SavedCard;