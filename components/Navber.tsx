"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { DataProvider } from "@/contextfolder/sheredata";

const Navbar = () => {
  const context = useContext(DataProvider);

  if (!context) {
    throw new Error("Navbar must be used inside Sheredata Provider");
  }

  const { todayPlan, saved } = context;

  return (
    <div className="w-full h-[80px] flex items-center shadow-2xs shadow-gray-400 sticky top-0 left-0 z-10 bg-gray-900">
      <div className="text-white container mx-auto">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="FITLOG Logo"
              width={40}
              height={40}
            />
            <span>FITLOG</span>
          </Link>

          {/* Navigation */}
          <ul className="flex gap-5 cursor-pointer">
            <li>
              <Link href="/">Workouts</Link>
            </li>

            <li>
              <Link href="/plane">My Plan</Link>
            </li>
          </ul>

          {/* Plan & Saved */}
          <div className="flex gap-6 items-center capitalize">

            {/* Plan */}
            <Link
              href="/plane"
              className="flex gap-2 items-center"
            >
              <p>plan</p>

              <div className="bg-[#C2F800] px-2 text-center rounded-full text-black">
                {todayPlan.length}
              </div>
            </Link>

            {/* Saved */}
            <Link
              href="/plane"
              className="flex gap-2 items-center"
            >
              <p>saved</p>

              <div className="text-white border border-white px-2 text-center rounded-full">
                {saved.length}
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;