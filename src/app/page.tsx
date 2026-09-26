"use client";

import { useEffect, useState } from "react";
import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

const HomePage = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        setError("Failed to load workouts");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <p>Loading workouts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Fit Log</h1>

      <p className="mb-6">Total Workouts: {workouts.length}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;