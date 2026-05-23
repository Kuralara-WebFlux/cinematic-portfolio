"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Controls from "../Controls/Controls";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const Particles = dynamic(() => import("../CinematicLayer/Particles"), {
  ssr: false,
});

export default function VideoHero() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 100,
      duration: 1.5,
    });

    gsap.from(".hero-sub", {
      opacity: 0,
      y: 50,
      delay: 0.4,
      duration: 1.2,
    });
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    gsap.to(".video-layer", {
      x: x * 40,
      y: y * 40,
      duration: 1,
      ease: "power2.out"
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (bgVideoRef.current) bgVideoRef.current.muted = !isMuted;
    if (mainVideoRef.current) mainVideoRef.current.muted = !isMuted;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      bgVideoRef.current?.pause();
      mainVideoRef.current?.pause();
    } else {
      bgVideoRef.current?.play();
      mainVideoRef.current?.play();
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      
      {/* Background Video */}
      <video
        ref={bgVideoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-40 video-layer"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Main Video */}
      <video
        ref={mainVideoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-contain video-layer"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Particles Layer */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white pointer-events-none">
        <h1 className="hero-title text-6xl font-bold">
          KURINJI ESWAR
        </h1>

        <p className="hero-sub mt-4 text-xl">
          Full Stack Developer • AI Engineer • Founder
        </p>
      </div>

      {/* Floating Controls */}
      <Controls 
        isMuted={isMuted} 
        isPlaying={isPlaying} 
        toggleMute={toggleMute} 
        togglePlay={togglePlay} 
      />

      {/* Scroll Indicator */}
      <ScrollIndicator />

    </section>
  );
}
