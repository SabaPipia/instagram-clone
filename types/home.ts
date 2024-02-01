import { Dispatch, SetStateAction } from "react";

export interface StoryInterface {
  item: {
    id: string;
    name: string;
    owner?: boolean;
    image: any;
    hasPostedStory: boolean;
    hasPostedStoryOnCloseFriends: boolean;
    hasViewedStory: boolean;
  };
  setStoryData: Dispatch<SetStateAction<any[]>>;
  storyData: any[];
}
