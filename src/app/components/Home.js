import React, { useRef, useEffect, useState } from "react";
import fishes from '../media/fishes.mp4';
import "../styles/home.css";

const Home = () => {
  const videoRef = useRef(null);
  const [smoothTransition, setSmoothTransition] = useState(null);
  const [scrollAccumulation, setScrollAccumulation] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (!videoRef.current) return;

      const videoDuration = videoRef.current.duration;
      const totalScrolls = 10;
      const scrollStep = videoDuration / totalScrolls;

      const normalizedDelta = event.deltaY / 100;
      setScrollAccumulation((prev) => prev + normalizedDelta);

      if (Math.abs(scrollAccumulation) >= 1) {
        const direction = Math.sign(scrollAccumulation);
        smoothAdjustVideoTime(direction * scrollStep);
        setScrollAccumulation(0);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollAccumulation]);

  const smoothAdjustVideoTime = (totalSeconds) => {
    if (smoothTransition) {
      clearInterval(smoothTransition);
    }

    const steps = 30; // Number of small steps
    const stepDuration = 100; // Duration of each step in ms
    const stepIncrement = totalSeconds / steps;

    let stepCount = 0;

    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = Math.max(
          0,
          Math.min(videoRef.current.currentTime + stepIncrement, videoRef.current.duration)
        );
      }

      stepCount += 1;
      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    setSmoothTransition(interval);
  };

  return (
    <div className="BackgroundVedioTest2Con">
      <video
        ref={videoRef}
        src={fishes}
        muted
        className="BackgroundVedioTest2Video"
      />
    </div>
  );
};

export default Home;



