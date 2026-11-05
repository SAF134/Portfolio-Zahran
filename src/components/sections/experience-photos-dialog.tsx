"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { ExperienceItem } from "@/types";
import { useLanguage } from "@/context/language-context";
import { EXPERIENCE_SECTION } from "@/data/experience";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface ExperiencePhotosDialogProps {
  experience: ExperienceItem;
}

export function ExperiencePhotosDialog({
  experience,
}: ExperiencePhotosDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { language } = useLanguage();
  const section = EXPERIENCE_SECTION[language];
  const photos = experience.activityPhotos ?? [];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setActiveIndex(0);
    }
  };

  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Navigasi keyboard (panah kiri/kanan)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext]);

  const activePhoto = photos[activeIndex];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* Tombol Pemicu Bukti Foto Kegiatan pada Kartu */}
      <DialogTrigger
        render={
          <Button className="border-border bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border-2 px-5 text-sm font-semibold shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto" />
        }
      >
        <Images className="size-4 shrink-0" aria-hidden="true" />
        <span>{section.activityPhotosButtonText}</span>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="border-border bg-card fixed top-1/2 left-1/2 z-50 flex h-[82vh] max-h-[90vh] w-[94vw] -translate-x-1/2 -translate-y-1/2 touch-manipulation flex-col overflow-hidden overscroll-none rounded-2xl border-2 p-3 shadow-[6px_6px_0_0_var(--border)] transition-all duration-200 outline-none select-none sm:w-[92vw] sm:p-5 md:h-[85vh] md:max-w-3xl md:p-6 lg:max-w-4xl"
      >
        {isOpen && (
          <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
            {/* 1. Header Responsif & Tombol Tutup Tunggal */}
            <div className="border-border/40 flex shrink-0 items-start justify-between gap-4 border-b pb-3 md:pb-4">
              {/* Kiri: Judul dan Subjudul (fleksibel tanpa pemotongan kaku) */}
              <DialogHeader className="min-w-0 flex-1 text-left">
                <DialogTitle className="text-foreground text-base leading-snug font-semibold sm:text-lg md:text-xl md:font-bold">
                  {section.dialogTitle} - {experience.company}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-0.5 text-xs leading-relaxed md:text-sm">
                  {experience.role} • {experience.period}
                </DialogDescription>
              </DialogHeader>

              {/* Kanan: HANYA Tombol Tutup [X] */}
              <DialogClose
                render={
                  <button
                    type="button"
                    aria-label={section.closeText}
                    className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 shadow-[2px_2px_0_0_var(--border)] transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none sm:size-10"
                  >
                    <X className="size-4 sm:size-5" aria-hidden="true" />
                  </button>
                }
              />
            </div>

            {/* 2. Container Foto Tunggal Responsif */}
            {photos.length > 0 && activePhoto ? (
              <div className="flex min-h-0 w-full flex-1 items-center justify-center pt-3 md:pt-4">
                <div className="border-border relative flex size-full items-center justify-center overflow-hidden rounded-xl border-2 bg-neutral-900 shadow-inner">
                  {/* Foto Utama menggunakan object-contain agar foto portrait maupun landscape selalu proporsional */}
                  <div className="relative flex size-full items-center justify-center p-2 sm:p-4">
                    <Image
                      src={activePhoto.url}
                      alt={activePhoto.caption || experience.company}
                      fill
                      sizes="(max-width: 1024px) 94vw, 1000px"
                      className="pointer-events-none size-full object-contain select-none"
                      priority
                    />
                  </div>

                  {/* Tombol Navigasi Panah Kiri & Kanan (Floating Semi-Transparan) */}
                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label={section.prevPhotoText}
                        className="focus-visible:ring-primary absolute top-1/2 left-2 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-white hover:bg-black/85 focus-visible:ring-2 focus-visible:outline-none active:scale-95 md:left-4 md:size-11"
                      >
                        <ChevronLeft
                          className="size-5 md:size-6"
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label={section.nextPhotoText}
                        className="focus-visible:ring-primary absolute top-1/2 right-2 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-white hover:bg-black/85 focus-visible:ring-2 focus-visible:outline-none active:scale-95 md:right-4 md:size-11"
                      >
                        <ChevronRight
                          className="size-5 md:size-6"
                          aria-hidden="true"
                        />
                      </button>
                    </>
                  )}

                  {/* Indikator Counter Foto ("1 / 8") Melayang di Bawah Tengah */}
                  {photos.length > 1 && (
                    <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 md:bottom-4">
                      <div className="rounded-full border border-white/20 bg-black/75 px-3.5 py-1 text-xs font-bold tracking-wider text-white shadow-lg backdrop-blur-md md:px-4 md:text-sm">
                        {activeIndex + 1} / {photos.length}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="border-border bg-muted/20 flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-dashed py-12 text-center">
                <Images
                  className="text-muted-foreground size-8"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground text-sm">
                  {section.emptyPhotosText}
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
