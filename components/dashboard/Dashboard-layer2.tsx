"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayer2() {
  return (
    <>
      <div className="h-full bg-leaf bg-cover bg-center w-full">
        <div className="bg-opacity-75 bg-white w-full pb-5">
          <h1 className="text-4xl font-bold text-center pt-4">
            Beauty & Relaxation
          </h1>
          <p className="text-center mt-4">
            Your spa description goes here. Make appointment now
          </p>
          <div className="flex justify-center mt-4">
          <Button asChild>
            <Link href="dashboard/book">Make Appointment</Link>
          </Button>
        </div>
        </div>
      </div>
    </>
  );
}
