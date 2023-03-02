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
  missionType: string;
  totalSeats: number;
  Deadline: string;
  theme: string;
  skills: string[];
  images: Image[];
  rating: Rating;
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

