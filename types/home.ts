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

export interface SortingStoryInterface {
  id: string;
  name: string;
  owner?: boolean;
  image: any;
  hasPostedStory: boolean;
  hasPostedStoryOnCloseFriends: boolean;
  hasViewedStory: boolean;
}

export interface PostInterface {
  id: string;
  name: string;
  userPic: any;
  image: any;
  isLiked: boolean;
  isFavourited: boolean;
  likesCount: string;
  commentsCount: number;
  caption: string;
  date: string;
  isFollowing: boolean;
}
