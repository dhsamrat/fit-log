import type { IMuscle } from "@/types/muscle.type";
import Image from "next/image";
import Link from "next/link";

interface IMuscleCardProps {
  muscle: IMuscle;
}

const MuscleCard = ({ muscle }: IMuscleCardProps) => {
  return (
    <div className="">
      <Link
        href={`/myplan/${muscle.id}`}
        className="block h-full"
      >
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#25282e] bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40 hover:shadow-lg">

          <div className="relative h-[180px] w-full overflow-hidden bg-[#101216] sm:h-[190px]">
            <Image
              src={muscle.image}
              alt={muscle.name}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/*  CONTENT */}
          <div className="flex flex-1 flex-col p-5">

            {/* Muscle Groups */}
            <div className="mb-3 flex min-h-[24px] flex-wrap gap-2">
              {muscle.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Workout Name */}
            <h2 className="text-[16px] font-black uppercase leading-tight tracking-wide text-white transition-colors group-hover:text-[#ccff00]">
              {muscle.name}
            </h2>

            {/* Equipment */}
            <p className="mt-2 text-xs text-gray-400">
              {muscle.equipment}
            </p>

            {/* Divider */}
            <div className="my-4 border-t border-[#292c32]" />

            {/* STATS */}
            <div className="mt-auto flex items-center justify-between text-[11px] text-gray-400">

              {/* Duration */}
              <div className="flex items-center gap-1.5">
                <span className="text-gray-500">
                  ◷
                </span>

                <span>
                  {muscle.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1.5">
                <span className="text-gray-500">
                  ♨
                </span>

                <span>
                  {muscle.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <span className="text-[#ccff00]">
                  ★
                </span>

                <span>
                  {muscle.rating}
                </span>
              </div>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MuscleCard;