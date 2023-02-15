export interface MissionCard {
  id: number;
  themeId: number;
  skillId: number;
  title: string;
  description: string;
  organisationName: string;
  organisationDetail: string;
  startDate: Date;
  endDate: Date;
  type: string;
  totalSheets: number;
  registrationDeadLine: Date;
  images: any;
  missionDocuments: any;
  missionAvilability: string;
  misssionVideoUrl: string;
  missionThemeName: string;
  missionSkillName: string;
  missionStatus: string;
  missionApplyStatus: string;
  missionDateStatus: any;
  missionDeadLineStatus: any;
  missionFavouriteStatus: any;
  rating: any;
  country: Country;
  city: City;
  isActive:boolean
}

export interface Country {
  id: number;
  countryName: string;
}

export interface City {
  id: number;
  countryId: number;
  cityName: string;
}
