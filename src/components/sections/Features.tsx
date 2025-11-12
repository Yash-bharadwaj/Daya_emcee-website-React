"use client";

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  IconMusic,
  IconMicrophone2,
  IconHeadphones,
  IconDeviceSpeaker
} from "@tabler/icons-react";

export function DJFeaturesSection() {
  const features = [
    {
      title: "Professional Emcee Services",
      description:
        "Expert hosting, engaging announcements, and seamless event coordination to make your occasion truly memorable.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Event Gallery",
      description:
        "Experience the energy and excitement through our stunning collection of live event moments and hosting highlights.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Performance Reels",
      description:
        "Watch Emcee Daya in action through our performance reels showcasing engaging hosting and crowd interaction.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Hyderabad & Beyond",
      description:
        "Serving Hyderabad and surrounding areas with professional emcee services for weddings, corporate events, and celebrations.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <section id="features" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Premium Emcee Services & Features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From professional hosting to crowd engagement, Emcee Daya delivers exceptional experiences with charisma, energy, and expertise since 2024.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Emcee Services Showcase */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-gradient-to-br from-[#fdbb2d]/20 to-[#b21f1f]/20 rounded-lg p-4 flex flex-col items-center justify-center">
              <IconMicrophone2 className="w-12 h-12 text-[#fdbb2d] mb-2" />
              <span className="text-black dark:text-white font-medium">Hosting</span>
            </div>
            <div className="bg-gradient-to-br from-[#b21f1f]/20 to-[#1a2a6c]/20 rounded-lg p-4 flex flex-col items-center justify-center">
              <IconMusic className="w-12 h-12 text-[#b21f1f] mb-2" />
              <span className="text-black dark:text-white font-medium">Announcements</span>
            </div>
            <div className="bg-gradient-to-br from-[#1a2a6c]/20 to-[#fdbb2d]/20 rounded-lg p-4 flex flex-col items-center justify-center">
              <IconDeviceSpeaker className="w-12 h-12 text-[#1a2a6c] mb-2" />
              <span className="text-black dark:text-white font-medium">Event Flow</span>
            </div>
            <div className="bg-gradient-to-br from-[#fdbb2d]/20 to-[#1a2a6c]/20 rounded-lg p-4 flex flex-col items-center justify-center">
              <IconHeadphones className="w-12 h-12 text-[#fdbb2d] mb-2" />
              <span className="text-black dark:text-white font-medium">Coordination</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const emceeImages = [
    "/DayaEmcee/images/image1.2.jpeg",
    "/DayaEmcee/images/image4.jpeg",
    "/DayaEmcee/images/image6.jpeg",
    "/DayaEmcee/images/image7.jpeg",
    "/DayaEmcee/images/image8.jpeg",
    "/DayaEmcee/images/image9.jpeg",
    "/DayaEmcee/images/image10.jpeg",
    "/DayaEmcee/images/image11.jpeg",
    "/DayaEmcee/images/image12.jpeg",
    "/DayaEmcee/images/image13.jpeg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-6 h-full overflow-hidden">
      {/* First Row */}
      <div className="flex flex-row -ml-4 md:-ml-20">
        {emceeImages.slice(0, 5).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"emcee-images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-2 md:-mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt="Emcee Daya event"
              width="500"
              height="500"
              className="rounded-lg h-12 w-12 md:h-16 md:w-16 lg:h-32 lg:w-32 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Second Row */}
      <div className="flex flex-row ml-2 md:ml-4">
        {emceeImages.slice(5, 10).map((image, idx) => (
          <motion.div
            key={"emcee-images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-2 md:-mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt="Emcee Daya event"
              width="500"
              height="500"
              className="rounded-lg h-12 w-12 md:h-16 md:w-16 lg:h-32 lg:w-32 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Third Row - Special highlighted row */}
      <div className="flex flex-row -ml-2 md:-ml-12">
        {emceeImages.slice(0, 3).map((image, idx) => (
          <motion.div
            key={"emcee-images-third" + idx}
            style={{
              rotate: Math.random() * 15 - 7.5,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-2 md:-mr-3 mt-2 p-1 bg-gradient-to-br from-[#fdbb2d]/20 to-[#b21f1f]/20 border-2 border-[#fdbb2d]/30 shrink-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={image}
              alt="Emcee Daya featured"
              width="500"
              height="500"
              className="rounded-lg h-10 w-10 md:h-12 md:w-12 lg:h-24 lg:w-24 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
      
      {/* Performance count badge */}
      <motion.div 
        className="absolute bottom-4 right-4 gradient-daya text-white px-4 py-2 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
      >
        <span className="text-sm font-bold">100+ Events</span>
      </motion.div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="#reels"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconMicrophone2 className="h-20 w-20 absolute z-10 inset-0 text-[#fdbb2d] m-auto" />
          <img
            src="/DayaEmcee/images/image1.jpg"
            alt="Emcee Daya Performance Reels"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
      
      {/* Floating Music Notes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            <IconMicrophone2 className="w-6 h-6 text-[#fdbb2d]/60" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Hyderabad for Emcee Daya
        { location: [17.3850, 78.4867], size: 0.1 }, // Hyderabad
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
}; 