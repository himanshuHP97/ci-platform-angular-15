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
  status: StoryStatus;
  isActive:boolean;
  date: string;
}

enum StoryStatus {
  view,
  puslish,
  decline,
  delete,
}
