"use client";

import { Briefcase, Building2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { EXPERIENCE_DATA, EXPERIENCE_SECTION } from "@/data/experience";
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineCard } from "@/components/ui/timeline-card";
import { ExperiencePhotosDialog } from "@/components/sections/experience-photos-dialog";

export function ExperienceSection() {
  const { language } = useLanguage();
  const section = EXPERIENCE_SECTION[language];
  const items = EXPERIENCE_DATA[language];

  return (
    <section
      id="pengalaman"
      aria-labelledby="pengalaman-heading"
      className="scroll-mt-20 py-16 md:scroll-mt-24 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {items.map((item) => (
            <TimelineCard
              key={item.id}
              icon={<Briefcase className="size-6" aria-hidden="true" />}
              title={item.company}
              role={item.role}
              roleIcon={<Building2 className="size-4" aria-hidden="true" />}
              location={item.location}
              period={item.period}
              points={item.points}
              tags={item.technologies}
              actions={
                item.activityPhotos ? (
                  <ExperiencePhotosDialog experience={item} />
                ) : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
