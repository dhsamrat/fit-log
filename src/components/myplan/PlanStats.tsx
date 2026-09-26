"use client";

import type { IMuscle } from "@/types/muscle.type";

interface PlanStatsProps {
  workouts: IMuscle[];
}

const PlanStats = ({ workouts }: PlanStatsProps) => {
  const exercises = workouts.length;

  const minutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[#292d34] bg-[#15171c] sm:grid-cols-3">

      {/* Exercises */}
      <div className="border-b border-[#292d34] p-5 sm:border-b-0 sm:border-r">
        <p className="text-xs text-gray-500">
          Exercises
        </p>

        <p className="mt-1 text-3xl font-black text-[#ccff00]">
          {exercises}
        </p>
      </div>

      {/* Minutes */}
      <div className="border-b border-[#292d34] p-5 sm:border-b-0 sm:border-r">
        <p className="text-xs text-gray-500">
          Minutes
        </p>

        <p className="mt-1 text-3xl font-black text-white">
          {minutes}
        </p>
      </div>

      {/* Calories */}
      <div className="p-5">
        <p className="text-xs text-gray-500">
          Calories
        </p>

        <p className="mt-1 text-3xl font-black text-white">
          {calories}
        </p>
      </div>

    </div>
  );
};

export default PlanStats;