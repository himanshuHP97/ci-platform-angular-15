export interface Mission {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  country: string;
  city: string;
  organisationName: string;
  organisationDetail: string;
  startDate: Date;
  endDate: Date;
  documents: Document[];
  Availability: boolean;
  videoUrl: string;
  type: string;
  totalSeats: number;
  deadline: string;
  theme: string;
  skills: string[];
  images: Image[];
  rating: Rating;
  isApplied:boolean;
}

export interface Image {
  image: string;
}

export interface Document {
  name: string;
  extension: string;
}

export interface Rating {
  id: number;
  userId: number;
  missionId: number;
  rating: number;
}

