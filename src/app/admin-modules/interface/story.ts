export interface Story {
  id: number;
  title: string;
  missionTitle: string;
  description: string;
  photos: [];
  videos: [];
  status: StoryStatus;
}

enum StoryStatus {
  puslish,
  decline,
  delete,
}
