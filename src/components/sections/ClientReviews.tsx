"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { BackgroundBeams } from "../ui/background-beams";
import { motion } from "motion/react";

export function ClientReviews() {
  const clientTestimonials = [
    {
      name: "Priya & Rahul Sharma",
      title: "Wedding Reception",
      quote: "Emcee Daya made our wedding absolutely magical! His hosting skills and energy kept everyone engaged throughout the event. Professional, charismatic, and amazing!",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "Tech Solutions Inc.",
      title: "Corporate Event",
      quote: "Outstanding hosting at our corporate event. Emcee Daya understood our requirements perfectly and created an amazing atmosphere. Highly recommended!",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "Kavya & Arjun",
      title: "Sangeet Ceremony",
      quote: "Perfect sangeet ceremony! Emcee Daya seamlessly managed all the ceremonies and kept the energy high. Our families from different generations all enjoyed the event together.",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "University Event",
      title: "College Festival",
      quote: "Booked Emcee Daya for our college fest and he was phenomenal! His ability to connect with the crowd and keep everyone engaged is unmatched. Pure talent!",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "The Grand Ballroom",
      title: "Cocktail Party",
      quote: "Professional, punctual, and absolutely brilliant! Our cocktail party was a huge success thanks to Emcee Daya's perfect hosting and smooth event flow.",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "Ravi & Sneha",
      title: "Engagement Party",
      quote: "Emcee Daya brought so much energy to our engagement party! Everyone was engaged and entertained from start to finish. He's definitely our go-to emcee now!",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "Cultural Society",
      title: "Cultural Event",
      quote: "Incredible hosting at our cultural event! Emcee Daya's knowledge of diverse events and his engaging hosting style created an unforgettable experience.",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "StartupHub",
      title: "Product Launch",
      quote: "Hired Emcee Daya for our product launch and he exceeded all expectations. His hosting perfectly complemented our brand vibe. Truly professional!",
      avatar: "/api/placeholder/50/50",
      rating: 5
    },
    {
      name: "Skybar Lounge",
      title: "New Year's Party",
      quote: "Amazing emcee with incredible talent! Our New Year's party was the talk of the town thanks to Emcee Daya's fantastic hosting and crowd engagement skills.",
      avatar: "/api/placeholder/50/50",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 overflow-x-hidden w-full max-w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            What My Clients Say
          </h2>
          <div className="w-24 h-1 gradient-daya mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear from the amazing clients who've experienced 
            <span className="text-[#fdbb2d] font-semibold"> unforgettable events</span> with my hosting
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col antialiased items-center justify-center relative w-full overflow-x-hidden"
        >
          <div className="w-full overflow-x-hidden">
            <InfiniteMovingCards
              items={clientTestimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="mb-8"
            />
          </div>
          
          {/* Second Row - Opposite Direction */}
          <div className="w-full overflow-x-hidden">
            <InfiniteMovingCards
              items={testimonials2}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-xl md:text-2xl font-bold text-white mb-6">
            Ready to create your own <span className="gradient-daya-text">amazing experience?</span>
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="gradient-daya text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-2xl backdrop-blur-sm cursor-pointer"
          >
            Book Your Event Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const testimonials2 = [
  {
    quote:
      "Emcee Daya is a master at his craft! Our anniversary party was a huge success thanks to his amazing hosting skills. He perfectly captured the mood we wanted and kept everyone entertained throughout.",
    name: "Anita & Suresh Gupta",
    title: "Anniversary Party",
  },
  {
    quote:
      "From the first announcement to the last thank you, Emcee Daya had complete control of the event. His energy is contagious and his hosting style is spot on. Highly recommend for any event!",
    name: "Meera Singh",
    title: "Corporate Event",
  },
  {
    quote:
      "We've worked with many emcees, but Emcee Daya stands out. His professionalism, communication skills, and most importantly, his ability to create the perfect atmosphere is unmatched.",
    name: "Event Planners Co.",
    title: "Event Management",
  },
  {
    quote:
      "Emcee Daya made our engagement party absolutely magical. The way he managed the ceremonies and kept the energy high was perfect. Our families loved every moment!",
    name: "Kavya & Amit",
    title: "Engagement Party",
  },
  {
    quote:
      "Incredible talent! Emcee Daya brought so much energy to our New Year's Eve party. His hosting and crowd engagement made it the highlight of the night. Simply amazing!",
    name: "Ravi Joshi",
    title: "New Year's Eve Party",
  },
]; 