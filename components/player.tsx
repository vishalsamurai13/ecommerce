import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

interface MusicPlayerProps {
  imageSrc: string;
  audioSrc: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ imageSrc, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* CD Image - Rotates when playing */}
      <div className={`w-16 h-16 rounded-full overflow-hidden border border-gray-300 shadow-lg transition-all ${isPlaying ? "spin-slow" : ""}`}>
        <Image src={imageSrc} alt="CD Cover" className="w-full h-full object-cover rounded-full" width={48} height={48} />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="p-2 bg-gray-800 text-white rounded-full flex items-center justify-center w-12 h-12 transition-all hover:bg-gray-700"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src={audioSrc} loop/>
    </div>
  );
};

export default MusicPlayer;
