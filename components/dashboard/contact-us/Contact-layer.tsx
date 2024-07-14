"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactLayer() {
  return (
    <>
      <div className="h-full bg-map w-full flex items-center justify-center">
        <div className="flex space-x-8">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle className="">Contact Us</CardTitle>
              <CardDescription>
                We&apos;re Here to Help and Hear from You!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">Phone: 000-000-0000</div>
              <div className="mb-2">Email: test@email.com</div>
              <div>Address: 000 ave, city, state, zip code</div>
            </CardContent>
          </Card>
          {/* <div>
            <Image
              src="/images/map.png"
              width={800}
              height={800}
              alt="Company Location"
              className="object-cover rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
