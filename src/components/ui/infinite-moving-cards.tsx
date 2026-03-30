"use client";

import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
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
        "scroller relative z-20 max-w-7xl overflow-hidden overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-full",
        className
      )}
      style={{ contain: "layout style paint", overflowY: "hidden" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ willChange: "transform", overflowY: "hidden" }}
      >
        {items.map((item, idx) => (
          <li
            className="w-[280px] max-w-[90vw] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-4 py-4 md:w-[350px] md:px-8 md:py-6 lg:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={`${item.name}-${item.title}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
