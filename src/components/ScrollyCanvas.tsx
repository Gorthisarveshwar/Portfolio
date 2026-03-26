"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load all images cleanly
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameNumber}.png`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setImagesLoaded(true);
          }
        };
        imagesRef.current.push(img);
      }
    };
    preloadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const renderFrame = useCallback((frameIndex: number) => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img) return;

    const { width, height } = canvas;
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    // object-fit: cover mathematics
    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [imagesLoaded]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES)
    );
    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle Resize and initial draw
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(currentProgress * TOTAL_FRAMES)
      );
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, renderFrame, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 animate-pulse">
            Loading Experience...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
