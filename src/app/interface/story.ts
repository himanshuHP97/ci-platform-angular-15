export interface Story {
  id: number;
  missionId:number;
  userId:number;
  userFullName:string;
  title: string;
  missionTitle: string;
  description: string;
  photos: [];
  videoUrl:string;
  status: StoryStatus;
  isActive:boolean;
}

enum StoryStatus {
  puslish,
  decline,
  delete,
}
