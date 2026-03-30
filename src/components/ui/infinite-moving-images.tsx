"use client";

import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useState } from "react";

export const InfiniteMovingImages = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const applyDirectionSpeed = () => {
      if (direction === "left") {
        container.style.setProperty("--animation-direction", "forwards");
      } else {
        container.style.setProperty("--animation-direction", "reverse");
      }
      if (speed === "fast") {
        container.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        container.style.setProperty("--animation-duration", "40s");
      } else {
        container.style.setProperty("--animation-duration", "80s");
      }
    };

    if (scroller.children.length > items.length) {
      applyDirectionSpeed();
      setStart(true);
      return;
    }

    Array.from(scroller.children).forEach((item) => {
      scroller.appendChild(item.cloneNode(true));
    });

    applyDirectionSpeed();
    setStart(true);
  }, [direction, speed, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((image, idx) => (
          <li
            className="w-[180px] max-w-[90vw] relative rounded-2xl flex-shrink-0 overflow-hidden border-2 border-transparent gradient-daya p-[2px] md:w-[220px] lg:w-[240px]"
            key={`${image}-${idx}`}
          >
            <div className="rounded-xl overflow-hidden bg-slate-800 h-full">
              <img
                src={image}
                alt={`Emcee Daya gallery ${idx + 1}`}
                className="w-full h-[240px] md:h-[280px] object-cover rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
