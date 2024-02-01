import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StoryDataDummy } from "../config/DummyData/StoryData";
import StoryItem from "./storyItem";
import { sortStoryData } from "../utils/story/storySorting";

// pluscircle for dark more

export default function Story() {
  const [storyData, setStoryData] = useState(StoryDataDummy);

  return (
    <View style={styles.container}>
      <FlatList
        data={sortStoryData(storyData)}
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
