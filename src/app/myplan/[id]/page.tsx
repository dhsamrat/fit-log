
import SaveListButton from '@/components/muscleDetails/SaveLaterButton';
import TodayPlanButton from '@/components/muscleDetails/TodayPlanButton';
import { getMuscle } from '@/lib/app';
import type { IMuscle } from '@/types/muscle.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IMuscleDetailsPageProps {
    params: Promise< {
        id: string;
    }>;
}

export async function generateStaticParams() {

  const muscleData = await getMuscle();
  const muscleId = muscleData.map((muscle: IMuscle)=>{
    return {id: muscle.id.toString()};
  });
  return muscleId;
}

const MuscleDetailsPage = async ({params}: IMuscleDetailsPageProps) => {
    const {id} = await params;
    const muscleData = await getMuscle();
    const muscle = muscleData.find((muscle: IMuscle) => String (muscle.id) === String (id)
    ) as IMuscle;
    console.log(muscle, "muscle")
    return (
       <main className="min-h-screen bg-[#0b0c0f] py-10">
      <div className="container mx-auto px-5 lg:px-6">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-gray-400 transition hover:text-[#ccff00]"
        >
          ← Back to workouts
        </Link>

        {/* Details Layout */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <Image
              src={muscle.image}
              alt={muscle.name}
              width={600}
              height={600}
              unoptimized
              className="h-full max-h-650px w-full object-cover"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex flex-col justify-center">

            {/* Title */}
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {muscle.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {muscle.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {muscle.muscleGroups.map((group: string) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292d34] bg-[#15171c]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="text-xs text-gray-200">
                  {muscle.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="text-xs text-gray-200">
                  ★ {muscle.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {muscle.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">

              <TodayPlanButton muscle={muscle}></TodayPlanButton>

              <SaveListButton muscle={muscle}></SaveListButton>

            </div>

          </div>
        </div>
      </div>
    </main>
    );
};

export default MuscleDetailsPage;