import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  IconMusic,
  IconMicrophone2,
  IconHeadphones,
  IconDeviceSpeaker,
  IconVolume,
  IconCalendarEvent,
  IconStar,
} from "@tabler/icons-react";

export function DJFeaturesSection() {
  const features = [
    {
      title: "Professional Hosting",
      description:
        "Expert hosting with engaging presence and smooth transitions that keep your event lively and memorable throughout.",
      icon: <IconMicrophone2 />,
    },
    {
      title: "Engaging Announcements",
      description:
        "Clear, charismatic announcements with perfect timing and energy to enhance every moment of your event.",
      icon: <IconDeviceSpeaker />,
    },
    {
      title: "Event Scripting",
      description:
        "Personalized event scripts tailored to your occasion, audience, and special moments for a customized experience.",
      icon: <IconMusic />,
    },
    {
      title: "Crowd Engagement",
      description: "Professional crowd interaction and audience participation to keep your event flowing smoothly and energetically.",
      icon: <IconMicrophone2 />,
    },
    {
      title: "Multi-Event Expertise",
      description: "From weddings to corporate events, covering all types of celebrations with versatile hosting skills.",
      icon: <IconHeadphones />,
    },
    {
      title: "Event Flow Management",
      description:
        "Perfect pacing for every moment - from intimate ceremonies to high-energy celebrations, ensuring seamless transitions.",
      icon: <IconVolume />,
    },
    {
      title: "Seamless Coordination",
      description:
        "Expert timing and coordination with your event schedule and vendors for a stress-free celebration.",
      icon: <IconCalendarEvent />,
    },
    {
      title: "5-Star Experience",
      description: "Premium service quality that exceeds expectations and creates unforgettable memories for you and your guests.",
      icon: <IconStar />,
    },
  ];
  return (
    <section
      id="emcee-services"
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#fdbb2d]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#b21f1f]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-slate-700/30",
        (index === 0 || index === 4) && "lg:border-l border-slate-700/30",
        index < 4 && "lg:border-b border-slate-700/30"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-800/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#fdbb2d] group-hover/feature:text-[#ffd700] transition-colors duration-200">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-600 group-hover/feature:bg-gradient-to-b group-hover/feature:from-[#fdbb2d] group-hover/feature:to-[#b21f1f] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
}; 