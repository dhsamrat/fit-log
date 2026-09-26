import Link from "next/link";
import Image from "next/image";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-gray-900">
            {workout.name}
          </h2>

          <span className="shrink-0 rounded-full bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
            ⭐ {workout.rating}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {workout.description}
        </p>

        {/* Difficulty */}
        <div className="mt-4">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {workout.difficulty}
          </span>
        </div>

        {/* Workout Info */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 font-semibold text-gray-800">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 font-semibold text-gray-800">
              {workout.caloriesBurned} kcal
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
  href={`/workout/${workout.id}`}
  className="mt-5 block w-full rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
>
  View Details
</Link>
      </div>
    </article>
  );
};

export default WorkoutCard;