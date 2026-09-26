"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { MuscleContext } from "@/components/context/MuscleContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const context = useContext(MuscleContext);
  const pathname = usePathname();

  if (!context) {
    throw new Error("Navbar must be inside MuscleProvider");
  }

  const { plan, save } = context;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#202329] bg-[#000000]">
      <div className="mx-auto flex min-h-[62px] max-w-[1400px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG"
            width={28}
            height={28}
          />

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}

        {/* Workouts */}
      
        <div className="hidden items-center gap-2 md:flex">

         <Link
        href="/"
        className={`rounded-full px-5 py-2 text-xs font-medium transition ${
        pathname === "/"
        ? "bg-[#182100] text-[#ccff00]"
        : "text-gray-400 hover:text-white"
       }`}>
      Workouts
      </Link>

      <Link
      href="/myplan"
      className={`rounded-full px-5 py-2 text-xs font-medium transition ${
      pathname === "/myplan"
      ? "bg-[#182100] text-[#ccff00]"
      : "text-gray-400 hover:text-white"
    }`}>
    My Plan
    </Link>

    </div>   

        {/* Counters */}
        <div className="flex items-center gap-4">

          {/* Plan */}
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#33363d] px-1.5 text-[10px] text-gray-300">
              {save.length}
            </span>
          </Link>

        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-center gap-2 border-t border-[#202329] py-3 md:hidden">

        <Link
          href="/"
          className="rounded-full bg-[#182100] px-5 py-2 text-xs font-medium text-[#ccff00]"
        >
          Workouts
        </Link>

        <Link
          href="/myplan"
          className="rounded-full px-5 py-2 text-xs font-medium text-gray-400"
        >
          My Plan
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;