"use client";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isInPlan}
        className="rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isInPlan ? "Added to Today's Plan" : "+ Add to Today's Plan"}
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        disabled={isSaved}
        className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100"
      >
        {isSaved ? "Saved" : "♡ Save for Later"}
      </button>
    </div>
  );
};

export default WorkoutActions;