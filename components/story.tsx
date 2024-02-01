import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StoryData } from "../config/DummyData/StoryData";
import StoryItem from "./storyItem";

// pluscircle for dark more

export default function Story() {
  return (
    <View style={styles.container}>
      <FlatList
        data={StoryData}
        renderItem={({ item }) => {
          return (
            <StoryItem name={item.name} owner={item.owner} image={item.image} />
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
