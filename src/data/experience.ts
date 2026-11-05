import { ExperienceItem, Language } from "@/types";

export const EXPERIENCE_SECTION: Record<
  Language,
  {
    title: string;
    subtitle: string;
    activityPhotosButtonText: string;
    dialogTitle: string;
    photoCounterText: string;
    prevPhotoText: string;
    nextPhotoText: string;
    emptyPhotosText: string;
    allPhotosText: string;
    backToSingleViewText: string;
    fullscreenText: string;
    exitFullscreenText: string;
    closeText: string;
  }
> = {
  id: {
    title: "Pengalaman Kerja",
    subtitle:
      "Riwayat pengalaman kerja dan magang di bidang operasional logistik dan manajemen rantai pasok.",
    activityPhotosButtonText: "Bukti Foto Kegiatan",
    dialogTitle: "Bukti Foto Kegiatan",
    photoCounterText: "Foto {current} dari {total}",
    prevPhotoText: "Foto sebelumnya",
    nextPhotoText: "Foto berikutnya",
    emptyPhotosText: "Belum ada foto kegiatan yang dilampirkan.",
    allPhotosText: "Semua Foto",
    backToSingleViewText: "Tutup Grid",
    fullscreenText: "Layar Penuh",
    exitFullscreenText: "Keluar Layar Penuh",
    closeText: "Tutup",
  },
  en: {
    title: "Work Experience",
    subtitle:
      "Professional work and internship background in logistics operations and supply chain management.",
    activityPhotosButtonText: "Activity Photos",
    dialogTitle: "Activity Photos",
    photoCounterText: "Photo {current} of {total}",
    prevPhotoText: "Previous photo",
    nextPhotoText: "Next photo",
    emptyPhotosText: "No activity photos attached yet.",
    allPhotosText: "All Photos",
    backToSingleViewText: "Close Grid",
    fullscreenText: "Fullscreen",
    exitFullscreenText: "Exit Fullscreen",
    closeText: "Close",
  },
};

export const EXPERIENCE_DATA: Record<Language, ExperienceItem[]> = {
  id: [
    {
      id: "exp-1",
      // TODO: ganti nama perusahaan / instansi magang
      company: "PT Pelita Air Service",
      // TODO: ganti lokasi instansi
      location: "Jakarta, Indonesia",
      // TODO: ganti posisi/divisi magang
      role: "Supply Chain Management (Departemen Logistik)",
      // TODO: ganti periode kerja/magang
      period: "Juli - September 2025",
      // TODO: ganti poin jobdesk pengalaman
      points: [
        "Bertanggung jawab dalam mendukung operasional rantai pasok penerbangan, meliputi pengelolaan data invoice, pembayaran, dan penerbitan Payment Voucher via MySAP, pengurusan administrasi kepabeanan (dokumen RKIP, SKTD, dan PIB), serta pembuatan SOP Pengadaan Barang dan Jasa Khusus. Di area operasional dan gudang Pondok Cabe, melakukan kontrol stok spare part, proses pengemasan (packing), serta ikut serta dalam eksekusi pengiriman engine helikopter ke Pelabuhan Tanjung Priok sekaligus menganalisis pemilihan moda transportasi darat pendukungnya. Berperan aktif juga dalam mendampingi rapat koordinasi bersama Garuda Maintenance Facility (GMF).",
      ],
      technologies: ["Microsoft Office", "Spreadsheet", "MySap"],
      // Lampiran foto bukti kegiatan di folder public/assets/
      activityPhotos: [
        {
          id: "pelita-photo-1",
          url: "/assets/magang1.jpeg",
          caption:
            "Dokumentasi kegiatan operasional rantai pasok dan logistik di lingkungan kerja.",
        },
        {
          id: "pelita-photo-2",
          url: "/assets/magang2.jpeg",
          caption:
            "Pemeriksaan dan pencatatan inventaris suku cadang (spare parts) penerbangan di gudang.",
        },
        {
          id: "pelita-photo-3",
          url: "/assets/magang3.jpeg",
          caption:
            "Proses pengemasan (packing) suku cadang dan material pendukung armada penerbangan.",
        },
        {
          id: "pelita-photo-4",
          url: "/assets/magang4.jpeg",
          caption:
            "Koordinasi pemuatan dan pengecekan fisik material logistik sebelum distribusi.",
        },
        {
          id: "pelita-photo-5",
          url: "/assets/magang5.jpeg",
          caption:
            "Pelaksanaan dan pengawalan pengiriman kargo suku cadang ke pelabuhan tujuan.",
        },
        {
          id: "pelita-photo-6",
          url: "/assets/magang6.jpeg",
          caption:
            "Monitoring kelengkapan dokumen pengiriman logistik kepabeanan dan administrasi.",
        },
        {
          id: "pelita-photo-7",
          url: "/assets/magang7.jpeg",
          caption:
            "Diskusi dan rapat koordinasi alur rantai pasok bersama tim teknis di lapangan.",
        },
        {
          id: "pelita-photo-8",
          url: "/assets/magang8.jpeg",
          caption:
            "Aktivitas kerja operasional dan dokumentasi pelaksanaan kegiatan magang.",
        },
      ],
    },
  ],
  en: [
    {
      id: "exp-1",
      company: "PT Pelita Air Service",
      location: "Jakarta, Indonesia",
      role: "Supply Chain Management (Logistics Department)",
      period: "July - September 2025",
      points: [
        "Responsible for supporting aviation supply chain operations, including invoice and payment processing, issuing Payment Vouchers via MySAP, customs documentation management (RKIP, SKTD, and PIB documents), and drafting SOPs for Special Procurement of Goods & Services. At the Pondok Cabe operational facility and warehouse, managed spare parts inventory control, packaging operations, and participated in executing helicopter engine transport to Tanjung Priok Port while analyzing optimal supporting land transport modes. Actively participated in cross-functional coordination meetings with Garuda Maintenance Facility (GMF).",
      ],
      technologies: ["Microsoft Office", "Spreadsheet", "MySap"],
      activityPhotos: [
        {
          id: "pelita-photo-1",
          url: "/assets/magang1.jpeg",
          caption:
            "Operational documentation of supply chain and logistics activities in the work environment.",
        },
        {
          id: "pelita-photo-2",
          url: "/assets/magang2.jpeg",
          caption:
            "Inspection and recording of aviation spare parts inventory at the warehouse.",
        },
        {
          id: "pelita-photo-3",
          url: "/assets/magang3.jpeg",
          caption:
            "Packing process of spare parts and supporting materials for the aviation fleet.",
        },
        {
          id: "pelita-photo-4",
          url: "/assets/magang4.jpeg",
          caption:
            "Coordination of loading and physical checks of logistics materials prior to distribution.",
        },
        {
          id: "pelita-photo-5",
          url: "/assets/magang5.jpeg",
          caption:
            "Execution and monitoring of spare parts cargo shipment to the destination port.",
        },
        {
          id: "pelita-photo-6",
          url: "/assets/magang6.jpeg",
          caption:
            "Monitoring completion of customs and administrative logistics shipping documents.",
        },
        {
          id: "pelita-photo-7",
          url: "/assets/magang7.jpeg",
          caption:
            "Discussion and supply chain workflow coordination meeting with the field technical team.",
        },
        {
          id: "pelita-photo-8",
          url: "/assets/magang8.jpeg",
          caption:
            "Operational workflow activities and documentation of the internship program.",
        },
      ],
    },
  ],
};
