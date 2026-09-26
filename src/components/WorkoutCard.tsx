import Image from "next/image";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        {workout.name}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {workout.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span>{workout.difficulty}</span>
        <span>⭐ {workout.rating}</span>
      </div>

      <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
      </div>
    </article>
  );
};

export default WorkoutCard;