export interface Story {
  id: number;
  missionId:number;
  userId:number;
  userFullName:string;
  title: string;
  missionTitle: string;
  description: string;
  images: string[];
  videoUrl:string;
  date: string;
  isActive:boolean;
  status: StoryStatus;
}


enum StoryStatus {
  view,
  puslish,
  decline,
  delete,
}
