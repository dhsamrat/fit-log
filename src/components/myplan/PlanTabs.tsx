"use client";

import React from "react";
import type { IMuscle } from "@/types/muscle.type";

interface PlanStatsProps {
  workouts?: IMuscle[];
}

interface PlanTabsProps {
  activeTab: "plan" | "save";
  setActiveTab: (tab: "plan" | "save") => void;
}

export const PlanStats = ({ workouts = [] }: PlanStatsProps) => {
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
      <div className="p-5 sm:p-6">
        <p className="text-xs text-gray-500">Exercises</p>

        <p className="mt-1 text-3xl font-bold text-[#ccff00]">
          {exercises}
        </p>
      </div>

      {/* Minutes */}
      <div className="border-t border-[#292d34] p-5 sm:border-x sm:border-y-0 sm:p-6">
        <p className="text-xs text-gray-500">Minutes</p>

        <p className="mt-1 text-3xl font-bold text-white">
          {minutes}
        </p>
      </div>

      {/* Calories */}
      <div className="border-t border-[#292d34] p-5 sm:border-t-0 sm:p-6">
        <p className="text-xs text-gray-500">Calories</p>

        <p className="mt-1 text-3xl font-bold text-white">
          {calories}
        </p>
      </div>
    </div>
  );
};

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div className="flex w-fit rounded-lg border border-[#292d34] bg-[#15171c] p-1">
      {/* Today's Plan */}
      <button
        type="button"
        onClick={() => setActiveTab("plan")}
        className={`rounded-md px-4 py-2 text-xs font-medium transition ${
          activeTab === "plan"
            ? "bg-[#20242c] text-white"
            : "text-gray-500 hover:text-white"
        }`}
      >
        Today's Plan
      </button>

      {/* Saved */}
      <button
        type="button"
        onClick={() => setActiveTab("save")}
        className={`rounded-md px-4 py-2 text-xs font-medium transition ${
          activeTab === "save"
            ? "bg-[#20242c] text-white"
            : "text-gray-500 hover:text-white"
        }`}>
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;