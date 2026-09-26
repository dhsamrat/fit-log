"use client";

import Image from "next/image";
import Link from "next/link";
import type { IMuscle } from "@/types/muscle.type";


interface PlanCardProps {
  muscle: IMuscle;
  activeTab: "plan" | "save";
  onRemove: (id: number) => void;
  onDone: (id: number) => void;
}

const PlanCard = ({
  muscle,
  activeTab,
  onRemove,
  onDone,
}: PlanCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-[#292d34] bg-[#15171c] p-4 transition hover:border-[#3b4048] md:flex-row md:items-center">

      {/* Image */}
      <div className="relative h-24 w-full overflow-hidden rounded-lg md:w-28 md:shrink-0">
        <Image
          src={muscle.image}
          alt={muscle.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">

        <h3 className="text-sm font-black uppercase text-white">
          {muscle.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {muscle.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">

          <span>
            ◷ {muscle.duration} min
          </span>

          <span>
            🔥 {muscle.caloriesBurned} kcal
          </span>

          <span className="text-[#ccff00]">
            ☆ {muscle.rating}
          </span>

        </div>

      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">

        {/* View Details */}
        <Link
          href={`/workout/${muscle.id}`}
          className="rounded-full border border-[#30343b] px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 hover:text-white"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {activeTab === "plan" && (
          <button
            onClick={() => onDone(muscle.id)}
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b8e600]"
          >
            ✓ Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          onClick={() => onRemove(muscle.id)}
          className="px-2 text-gray-500 transition hover:text-red-400"
          title="Remove"
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default PlanCard;