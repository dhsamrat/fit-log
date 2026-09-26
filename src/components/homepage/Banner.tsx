import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-6 lg:px-8">

      <div className="relative overflow-hidden rounded-xl border border-[#292d34] bg-[#15171c]">

        <div className="grid min-h-[325px] items-center md:grid-cols-2">

          {/* Left Content */}
          <div className="px-6 py-10 sm:px-10 lg:px-12">

            {/* Eyebrow */}
            <p className="mb-4 text-[10px] font-bold tracking-widest text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            {/* Heading */}
            <h1 className="max-w-[600px] text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-2xl lg:text-3xl">
              Train With Intent.Log  <br /> Every Set.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-sm leading-6 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock
              it into today's plan, and watch the week's work add up.
            </p>

            {/* Button */}
            <Link
              href="#library"
              className="btn mt-6 min-h-0 h-auto border-0 bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black hover:bg-[#b8e600]"
            >
              Browse Workouts
              {/* <span className="text-base">→</span> */}
            </Link>

          </div>

          {/* Right Image */}
          <div className="flex h-full items-center justify-center px-6 py-8 md:px-8">
            <Image src={bannerImg}
            alt='Banner Image'
            width={300} height={300}
            ></Image>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;