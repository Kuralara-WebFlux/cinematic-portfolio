"use client";

import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Code,
  Briefcase,
  Globe,
} from "lucide-react";

interface ControlsProps {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
  togglePlay: () => void;
}

export default function Controls({ isMuted, isPlaying, toggleMute, togglePlay }: ControlsProps) {
  const glassClass = "backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-center transition-all hover:bg-white/20 cursor-pointer";

  return (
    <div className="absolute bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Playback Controls */}
      <div className="flex gap-4 justify-end">
        <button onClick={togglePlay} className={glassClass} aria-label="Toggle Play">
          {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
        </button>
        <button onClick={toggleMute} className={glassClass} aria-label="Toggle Mute">
          {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
        </button>
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        <a href="#" className={glassClass} aria-label="GitHub">
          <Code size={20} className="text-white" />
        </a>
        <a href="#" className={glassClass} aria-label="LinkedIn">
          <Briefcase size={20} className="text-white" />
        </a>
        <a href="#" className={glassClass} aria-label="Website">
          <Globe size={20} className="text-white" />
        </a>
      </div>
    </div>
  );
}
