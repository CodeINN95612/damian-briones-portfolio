export type Experience = {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  skills: string[];
  current?: boolean;
};

export type Education = {
  degreeTitle: string;
  institution: string;
  location: string;
  dateRange: string;
  topics: string[];
  current?: boolean;
};

export type Certification = "string";
