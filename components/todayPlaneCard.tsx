import Image from "next/image";
import { IExercise } from "@/type/ExacisaceType";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import TodayCloseBtn from "./todayCloseBtn";

interface ExerciseCardProps {
  plan:IExercise,
}

const TodayPlanCard = ({ plan}: ExerciseCardProps) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-xl border border-zinc-800 bg-[#151820] p-3 text-white">

      {/* Image */}
      <div className="h-16 w-26 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={plan.image}
          alt={plan.name}
          width={104}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        {/* Title */}
        <h3 className="truncate text-sm font-semibold">
          {plan.name}
        </h3>

        {/* Category */}
        <p className="mt-0.5 text-[11px] text-zinc-400">
          {plan.difficulty}
        </p>

        {/* Details */}
        <div className="mt-2 flex items-center gap-3 text-[10px] text-zinc-400">

          <span className="flex items-center gap-1">
            {/* <Play size={10} /> */}
            {plan.duration} min
          </span>

          <span>🔥 {plan.caloriesBurned} kcal</span>

          <span>⚡ {plan.sets}</span>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 items-center gap-2">
        <Link href={`/${plan.id}`} className="rounded-md border border-zinc-700 px-3 py-1.5 text-[10px] text-zinc-300 transition hover:bg-zinc-800">
           View Details
        </Link>
          

        <button
          className="flex items-center gap-1 rounded-full bg-lime-400 px-3 py-1.5 text-[10px] font-semibold text-black transition hover:bg-lime-300"
        >
         ✓ Mark as Done
        </button>

        <TodayCloseBtn plan={plan}/>

      </div>
    </div>
  );
};

export default TodayPlanCard;