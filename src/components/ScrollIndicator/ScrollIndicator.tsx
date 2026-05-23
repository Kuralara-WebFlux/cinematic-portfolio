"use client";

import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollIndicator() {
  useGSAP(() => {
    gsap.to(".scroll-arrow", {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut"
    });
  });

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-full w-12 h-20 flex flex-col items-center justify-center gap-2">
        <div className="w-[2px] h-6 bg-white/20 relative overflow-hidden rounded-full">
           <div className="w-full h-1/2 bg-white absolute top-0 scroll-line" />
        </div>
        <ChevronDown size={20} className="text-white scroll-arrow" />
      </div>
    </div>
  );
}
