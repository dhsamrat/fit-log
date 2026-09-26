"use client";

import React, { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import { MuscleContext } from "@/components/context/MuscleContext";
import type { IMuscle } from "@/types/muscle.type";

import PlanTabs, { PlanStats } from "./PlanTabs";
import SortDropdown from "./SortDropDown";

const MyPlanContent = () => {
  const context = useContext(MuscleContext);

  if (!context) {
    throw new Error(
      "MyPlanContent must be used inside MuscleProvider"
    );
  }

  const {
    plan,
    setPlan,
    save,
    setSave,
  } = context;

  const [activeTab, setActiveTab] = useState<
    "plan" | "save"
  >("plan");

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const currentList: IMuscle[] =
    activeTab === "plan" ? plan : save;


  const sortedList = useMemo(() => {
    const copiedList = [...currentList];

    copiedList.sort((a, b) => {
      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

    return copiedList;
  }, [currentList, sortBy]);


  const handleRemovePlan = (id: number) => {
    setPlan(
      plan.filter(
        (muscle: IMuscle) => muscle.id !== id
      )
    );

    toast.success(
      "Workout removed from today's plan"
    );
  };



  const handleRemoveSave = (id: number) => {
    setSave(
      save.filter(
        (muscle: IMuscle) => muscle.id !== id
      )
    );

    toast.success(
      "Workout removed from saved"
    );
  };



  const handleDone = (id: number) => {
    setPlan(
      plan.filter(
        (muscle: IMuscle) => muscle.id !== id
      )
    );

    toast.success(
      "Workout marked as done"
    );
  };


  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/*  STATS  */}

        <div className="mt-7">
          <PlanStats
            workouts={currentList}
          />
        </div>

        {/*  TABS + SORT  */}

        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          {/* Tabs */}

          <PlanTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Sort */}

          <SortDropdown
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

        </div>

        {/*  WORKOUT LIST  */}

        <div className="mt-5 space-y-3">

          {/*  EMPTY STATE  */}

          {sortedList.length === 0 && (
            <div className="rounded-xl border border-[#292d34] bg-[#15171c] px-5 py-16 text-center">

              <h2 className="text-xl font-black uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>

            </div>
          )}

          {/*  CARDS  */}

          {sortedList.map((muscle, index) => (

            <div
              key={`${muscle.id}-${index}`}
              className="flex flex-col gap-5 rounded-xl border border-[#292d34] bg-[#15171c] p-4 transition hover:border-[#3b4048] md:flex-row md:items-center"
            >

              {/*  IMAGE  */}

              <div className="relative h-24 w-full overflow-hidden rounded-lg md:h-20 md:w-28">

                <Image
                  src={muscle.image}
                  alt={muscle.name}
                  fill
                  unoptimized
                  className="object-cover"
                />

              </div>

              {/*  WORKOUT INFORMATION  */}

              <div className="min-w-0 flex-1">

                <h2 className="text-base font-black uppercase text-white">
                  {muscle.name}
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {muscle.equipment}
                </p>

                {/* Stats */}

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">

                  {/* Duration */}

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">
                      ◷
                    </span>

                    {muscle.duration} min
                  </span>

                  {/* Calories */}

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">
                      ♨
                    </span>

                    {muscle.caloriesBurned} kcal
                  </span>

                  {/* Rating */}

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">
                      ★
                    </span>

                    {muscle.rating}
                  </span>

                </div>

              </div>

              {/* ACTIONS  */}

              <div className="flex flex-wrap items-center gap-2">

                {/* View Details */}

                <Link
                  href={`/myplan/${muscle.id}`}
                  className="rounded-lg border border-[#30343b] px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
                >
                  View Details
                </Link>

                {/* TODAY'S PLAN  */}

                {activeTab === "plan" && (
                  <>
                    {/* Mark as Done */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDone(muscle.id)
                      }
                      className="rounded-lg bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b8e600]"
                    >
                      ✓ Mark as Done
                    </button>

                    {/* Remove */}

                    <button
                      type="button"
                      onClick={() =>
                        handleRemovePlan(muscle.id)
                      }
                      className="px-2 py-2 text-lg text-gray-500 transition hover:text-red-400"
                    >
                      ×
                    </button>
                  </>
                )}

                {/*  SAVED  */}

                {activeTab === "save" && (
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveSave(muscle.id)
                    }
                    className="px-2 py-2 text-lg text-gray-500 transition hover:text-red-400"
                  >
                    ×
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
};

export default MyPlanContent;