import React, { useRef, useState } from "react";
import play from "./assets/play.png";
import pause from "./assets/pause.png";
import vid from "./assets/whatwecandoforyou.mp4";
import post from "./assets/poster.png";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // if we want to play a video auto matically
  // useEffect(() => {
  //   const video = videoRef.current;

  //   if (video) {
  //     video
  //       .play()
  //       .then(() => {
  //         setIsPlaying(true);
  //       })
  //       .catch((error) => {
  //         console.error("Failed to play the video:", error);
  //       });

  //     const handleEnded = () => {
  //       setIsPlaying(false);
  //     };

  //     video.addEventListener("ended", handleEnded);

  //     return () => {
  //       if (video) {
  //         video.removeEventListener("ended", handleEnded);
  //       }
  //     };
  //   }
  // }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Failed to play the video:", error);
          });
      }
    }
  };

  return (
    <div className="w-[98%] max-w-[600px]  mx-auto  text-center">
      <div className="relative" style={{ width: "80%", margin: "auto" }}>
        <video
          ref={videoRef}
          width="100%"
          height="50%"
          className="rounded-3xl"
          poster={post}
          
        >
          <source src={vid} type="video/mp4" />
        </video>
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <img className="w-[42px] h-[42px]" src={pause} alt="Pause" />
          ) : (
            <img className="w-[42px] h-[42px]" src={play} alt="Play" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
