import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StoryDataDummy } from "../config/DummyData/StoryData";
import StoryItem from "./storyItem";

// pluscircle for dark more

export default function Story() {
  const [storyData, setStoryData] = useState(StoryDataDummy);
  const sortedStoryData = [...storyData].sort((a, b) =>
    a.owner && !b.owner
      ? -1
      : !a.owner && b.owner
      ? 1
      : a.hasViewedStory && !b.hasViewedStory
      ? 1
      : !a.hasViewedStory && b.hasViewedStory
      ? -1
      : !a.hasPostedStoryOnCloseFriends && b.hasPostedStoryOnCloseFriends
      ? 1
      : 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedStoryData}
        renderItem={({ item }) => {
          return (
            <StoryItem
              item={item}
              storyData={storyData}
              setStoryData={setStoryData}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
