import { SortingStoryInterface } from "../../types/home";

export const sortStoryData = (storyData: SortingStoryInterface[]) => {
  return [...storyData].sort((a, b) => {
    if (a.owner && !b.owner) {
      return -1;
    }
    if (!a.owner && b.owner) {
      return 1;
    }

    if (a.hasViewedStory && !b.hasViewedStory) {
      return 1;
    }
    if (!a.hasViewedStory && b.hasViewedStory) {
      return -1;
    }

    if (a.hasPostedStoryOnCloseFriends && !b.hasPostedStoryOnCloseFriends) {
      return -1;
    }
    if (!a.hasPostedStoryOnCloseFriends && b.hasPostedStoryOnCloseFriends) {
      return 1;
    }

    return 0;
  });
};
