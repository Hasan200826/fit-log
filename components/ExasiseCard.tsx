


type ExasiseCardProps = {
  Exasise:IExercise
};

import { IExercise } from "@/type/ExacisaceType";
import Image from "next/image";

export default function ExasiseCard({Exasise}:ExasiseCardProps) {
  return (
    <div className="w-full mx-auto max-w-[380px] overflow-hidden rounded-[28px] bg-[#15161b] text-white shadow-xl">

      {/* Image */}
      <div className=" relative h-[250px] w-full">
        <Image src={Exasise.image} fill className=" object-cover" alt="img"/>

      </div>

      {/* Content */}
      <div className="px-7 py-7">

        {/* Categories */}
        <div className="mb-6 flex flex-wrap gap-3">
           {Exasise.muscleGroups.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#b6ff00] px-5 py-1 text-sm uppercase tracking-wide text-black"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold">
          {Exasise.name}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-base text-gray-500">
          {Exasise.equipment}
        </p>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Stats */}
        <div className="flex items-center justify-between text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              🕓{Exasise.duration}
            </span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {Exasise.caloriesBurned}kalo
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              ⭐{Exasise.rating}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}