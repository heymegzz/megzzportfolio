export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  dateRange: string;
  cgpa: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "University of Technology",
    degree: "B.Tech in Computer Science",
    specialization: "Specializing in AI/ML and Data Science",
    dateRange: "2022 – 2026",
    cgpa: "8.75",
  },
];
