export type Language = "id" | "en";

export type NavigationSectionId =
  | "profil"
  | "pendidikan"
  | "keahlian"
  | "pengalaman"
  | "organisasi"
  | "proyek"
  | "sertifikat";

export type NavIconName =
  | "User"
  | "GraduationCap"
  | "Wrench"
  | "Briefcase"
  | "Users"
  | "FolderKanban"
  | "Award";

export interface NavigationItem {
  id: NavigationSectionId;
  label: string;
  iconName: NavIconName;
}

export interface ProfileData {
  greeting: string;
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
  avatarAlt: string;
  cvUrl: string;
  cvButtonText: string;
  contactButtonText: string;
  email: string;
  linkedinUrl: string;
  linkedinAriaLabel: string;
  instagramUrl: string;
  instagramAriaLabel: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  major: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category?: "Hard Skill" | "Soft Skill";
}

export interface ActivityPhoto {
  id: string;
  url: string;
  caption: string;
  alt?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
  technologies?: string[];
  activityPhotos?: ActivityPhoto[];
}

export interface OrganizationItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  points: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  pdfUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}
