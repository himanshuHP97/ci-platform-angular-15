export interface Mission {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  country: string;
  city: string;
  organisationName: string;
  organisationDetail: string;
  startdate: Date;
  enddate: Date;
  documents: [];
  Availability: boolean;
  videoUrl: string;
}

// Type (Time/Goal): string;
// Total   Seats (If mission type is "Time"): string;
// registration deadline (If mission type is "Time"): string;
// Theme (Single Select): string;
// Skills (Multi-selection): string;
// Images (Give Ability to mark any one uploaded image as "Default"): string;
