// app/loading.js
"use client"; // Required since we're using hooks and client-side GSAP

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const spinnerRef = useRef(null);
  const textRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // GSAP animation for spinner
    gsap.to(spinnerRef.current, {
      rotation: 360,
      duration: 1,
      repeat: -1, // Infinite rotation
      ease: "linear",
    });

    // GSAP animation for text fade-in
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Simulate loading percentage (replace with real progress in a production app)
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20); // Random increments for demo
      });
    }, 300);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div
          ref={spinnerRef}
          className="mb-4 h-16 w-16 rounded-full border-4 border-gray-300 border-t-blue-600"
        ></div>
        <p ref={textRef} className="text-lg text-gray-600">
          Loading... {percentage}%
        </p>
      </div>
    </div>
  );
}
