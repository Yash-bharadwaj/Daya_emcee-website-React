"use client";

import { InfiniteMovingImages } from "../ui/infinite-moving-images";
import { BackgroundBeams } from "../ui/background-beams";
import { motion } from "motion/react";

export function ImageGallery() {
  // Select images from DayaEmcee folder
  const galleryImages = [
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
    "/DayaEmcee/images/image14.jpeg",
    "/DayaEmcee/images/image15.jpeg",
    "/DayaEmcee/images/image16.jpeg",
    "/DayaEmcee/images/image18.jpeg",
    "/DayaEmcee/images/image19.jpeg",
    "/DayaEmcee/images/image20.jpeg",
    "/DayaEmcee/images/image21.jpeg",
    "/DayaEmcee/images/image22.jpeg",
    "/DayaEmcee/images/image23.jpeg",
    "/DayaEmcee/images/image24.jpeg",
  ];

  const galleryImages2 = [
    "/DayaEmcee/images/image25.jpeg",
    "/DayaEmcee/images/image26.jpeg",
    "/DayaEmcee/images/image27.jpeg",
    "/DayaEmcee/images/image28.jpeg",
    "/DayaEmcee/images/Crowd.jpeg",
    "/DayaEmcee/images/image5.jpg",
    "/DayaEmcee/images/imageAward.jpg",
  ];

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 overflow-x-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 gradient-daya mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Capturing moments from 
            <span className="text-[#fdbb2d] font-semibold"> unforgettable events</span> and celebrations
          </p>
        </motion.div>

        {/* Infinite Moving Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col antialiased items-center justify-center relative"
        >
          <InfiniteMovingImages
            items={galleryImages}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
          
          {/* Second Row - Opposite Direction */}
          <InfiniteMovingImages
            items={galleryImages2}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </motion.div>
      </div>
    </section>
  );
}

