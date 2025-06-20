import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroView } from "@/components/Hero";
import { FeaturedCarsView } from "@/components/FeaturedCars";
import { GarageView } from "@/components/Garage";
import { RaceScheduleWrapper } from "@/components/RaceSchedule";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 font-['Geist'] tracking-tighter">
      <Navbar />

      <Suspense
        fallback={
          <div className="text-[#1D0609] h-[1307px]">Loading hero...</div>
        }
      >
        <HeroView />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-[#1D0609] h-[848px]">
            Loading featured cars...
          </div>
        }
      >
        <FeaturedCarsView />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-[#1D0609] h-[1052px]">Loading garage...</div>
        }
      >
        <GarageView />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-[#1D0609] h-[420px]">
            Loading race schedule...
          </div>
        }
      >
        <RaceScheduleWrapper />
      </Suspense>
    </div>
  );
}
