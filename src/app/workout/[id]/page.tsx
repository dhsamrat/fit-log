import WorkoutActions from "@/components/WorkoutActions";
import Image from "next/image";
import type { Workout } from "@/types/workout";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout: Workout = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {workout.difficulty}
            </span>

            <span className="text-sm">
              ⭐ {workout.rating}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            {workout.name}
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            {workout.description}
          </p>

          {/* Workout Information */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gray-100 p-4">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="mt-1 font-semibold">
                {workout.duration} minutes
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              <p className="text-sm text-gray-500">Calories</p>
              <p className="mt-1 font-semibold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              <p className="text-sm text-gray-500">Sets</p>
              <p className="mt-1 font-semibold">{workout.sets}</p>
            </div>

            <div className="rounded-xl bg-gray-100 p-4">
              <p className="text-sm text-gray-500">Reps</p>
              <p className="mt-1 font-semibold">{workout.reps}</p>
            </div>
          </div>

          {/* Equipment */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Equipment</h2>

            <p className="mt-2 text-gray-600">
              {workout.equipment}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Muscle Groups</h2>

            <div className="mt-2 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-black px-3 py-1 text-sm text-white"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Action */}
      <WorkoutActions workout={workout} />

      {/* Instructions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Instructions</h2>

        <ol className="mt-5 space-y-4">
          {workout.instructions.map((instruction, index) => (
            <li
              key={instruction}
              className="flex gap-4 rounded-xl border border-gray-200 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                {index + 1}
              </span>

              <p className="text-gray-700">
                {instruction}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
};

export default WorkoutDetailsPage;