import React from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface TimelineCardProps {
  icon: React.ReactNode;
  title: string;
  role: string;
  roleIcon?: React.ReactNode;
  location?: string;
  period: string;
  description?: string;
  points?: string[];
  tags?: string[];
  actions?: React.ReactNode;
}

export function TimelineCard({
  icon,
  title,
  role,
  roleIcon,
  location,
  period,
  description,
  points,
  tags,
  actions,
}: TimelineCardProps) {
  return (
    <article className="group border-border bg-card rounded-2xl border-2 p-5 shadow-[4px_4px_0_0_var(--border)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--border)] md:p-6">
      {/* Header Kartu */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* Ikon/Logo Bulat Kiri */}
          <div className="border-border bg-background text-primary flex size-12 shrink-0 items-center justify-center rounded-full border-2 shadow-[2px_2px_0_0_var(--border)]">
            {icon}
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Judul Instansi / Organisasi / Kampus */}
            <h3 className="text-foreground text-lg font-bold md:text-xl">
              {title}
            </h3>

            {/* Badge Periode (Mobile: langsung di bawah judul) */}
            <div className="sm:hidden">
              <Badge
                variant="outline"
                className="border-border bg-background text-foreground rounded-full border-2 px-3 py-0.5 text-xs font-bold shadow-[1px_1px_0_0_var(--border)]"
              >
                {period}
              </Badge>
            </div>

            {/* Baris Program Studi / Posisi / Divisi */}
            <div className="text-primary flex items-center gap-1.5 text-sm font-semibold">
              {roleIcon && (
                <span className="shrink-0" aria-hidden="true">
                  {roleIcon}
                </span>
              )}
              <span>{role}</span>
            </div>

            {/* Baris Lokasi / Alamat */}
            {location && (
              <div className="text-muted-foreground flex items-center gap-1.5 text-xs md:text-sm">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Badge Periode (Tablet & Desktop: kanan atas) */}
        <div className="hidden shrink-0 sm:block">
          <Badge
            variant="outline"
            className="border-border bg-background text-foreground rounded-full border-2 px-3 py-1 text-xs font-bold shadow-[2px_2px_0_0_var(--border)]"
          >
            {period}
          </Badge>
        </div>
      </div>

      {/* Deskripsi (Bila ada) */}
      {description && (
        <p className="text-muted-foreground mt-4 text-justify text-sm leading-relaxed md:text-base">
          {description}
        </p>
      )}

      {/* Poin Jobdesk / Capaian (Bila ada) */}
      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2">
          {points.map((point, index) => (
            <li
              key={index}
              className="text-foreground/90 flex items-start gap-2.5 text-sm md:text-base"
            >
              <span
                className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                aria-hidden="true"
              />
              <span className="text-justify">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Badge Teknologi / Alat (Bila ada) */}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 pt-1">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="border-border bg-background text-foreground rounded-full border px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Tombol Aksi Tambahan (Bila ada) */}
      {actions && (
        <div className="border-border/40 mt-5 flex flex-wrap items-center gap-3 border-t pt-4">
          {actions}
        </div>
      )}
    </article>
  );
}
