"use client";

import { MuscleContext } from "@/components/context/MuscleContext";
import type { IMuscle } from "@/types/muscle.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodayPlanButton = ({ muscle }: { muscle: IMuscle }) => {
  const context = useContext(MuscleContext);

  if (!context) {
    throw new Error("TodayPlanButton must be inside MuscleProvider");
  }

  const { plan, setPlan } = context;

  const handleTodayPlan = () => {
    // Prevent duplicate workout
    const alreadyExists = plan.some(
      (item) => item.id === muscle.id
    );
    
    if (plan.length >= 5) {
      toast.error("Today's plan can contain maximum 5 workouts.");
      return;
    }



    if (alreadyExists) {
      toast.error(`${muscle.name} is already in today's plan.`);
      return;
    }

    setPlan((previousPlan) => [
      ...previousPlan,
      muscle,
    ]);

    toast.success(`"${muscle.name}" added to today's plan.`);
  };

  return (
    <button
      className="btn min-h-0 h-auto border-0 bg-[#ccff00] px-5 py-3 text-xs font-bold text-black hover:bg-[#b8e600]"
      onClick={handleTodayPlan}
    >
      🗓 Add to today&apos;s plan
    </button>
  );
};

export default TodayPlanButton;