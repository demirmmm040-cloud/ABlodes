import React, { useState, useRef, useEffect } from 'react';

interface VisualComparatorProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const VisualComparator: React.FC<VisualComparatorProps> = ({
  beforeImage,
  afterImage,
  title,
  beforeLabel = "Slow DIY Builder Web (Grade: F)",
  afterLabel = "BLODES Premium Core-Speed Engine (Grade: A+)"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-400 font-mono flex items-center gap-1.5 uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 block shrink-0"></span>
          Live Visual Comparison: {title}
        </h3>
        <span className="text-[10px] text-zinc-500 font-mono">Drag slider horizontally</span>
      </div>

      <div
        ref={containerRef}
        className="relative h-[250px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-zinc-850 bg-zinc-950 select-none cursor-ew-resize"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Before Image (Left side) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={beforeImage}
            alt="Before Redesign"
            className="w-full h-full object-cover filter grayscale opacity-45"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-red-950/20" />
          <div className="absolute top-4 left-4 bg-zinc-950/75 border border-zinc-800 text-[10px] text-zinc-400 px-2.5 py-1 rounded font-mono z-10 select-none">
            {beforeLabel}
          </div>
        </div>

        {/* After Image (Right side, clipped based on sliderPosition) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <img
            src={afterImage}
            alt="After Redesign"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/10" />
          <div className="absolute top-4 right-4 bg-emerald-500 text-zinc-950 text-[10px] font-sans font-bold px-2.5 py-1 rounded shadow-lg z-10 select-none">
            {afterLabel}
          </div>
        </div>

        {/* Vertical Divider handle line */}
        <div
          className="absolute top-0 bottom-0 w-1.5 bg-emerald-500 cursor-ew-resize z-20 flex items-center justify-center shadow-2xl"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Circular handle grip slider knob */}
          <div className="w-8 h-8 rounded-full bg-zinc-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform z-30 select-none">
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
