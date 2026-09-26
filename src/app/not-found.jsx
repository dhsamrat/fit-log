import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-62px)] items-center justify-center bg-[#0b0c0f] px-5 py-16">
      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[140px] font-black leading-none tracking-tighter text-[#15171c] sm:text-[200px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-[#ccff00]/20 bg-[#15171c] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
              Workout Not Found
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            This workout went missing.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
            Looks like the page you are looking for doesn&apos;t exist or has already been moved. Let&apos;s get you back to your workouts.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <Link
            href="/"
            className="rounded-lg bg-[#ccff00] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b8e600]"
          >
            ← Back to Workouts
          </Link>

          <Link
            href="/myplan"
            className="rounded-lg border border-[#30343b] bg-[#15171c] px-6 py-3 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            View My Plan
          </Link>

        </div>

        {/* Bottom decoration */}
        <div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-3">
          <div className="h-px flex-1 bg-[#25282e]" />
          <span className="text-lg text-[#ccff00]">✦</span>
          <div className="h-px flex-1 bg-[#25282e]" />
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-gray-600">
          Train hard · Log honestly
        </p>

      </div>
    </main>
  );
};

export default NotFoundPage;