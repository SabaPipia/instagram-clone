import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { StoryInterface } from "../types/home";

export default function StoryItem({
  item,
  setStoryData,
  storyData,
}: StoryInterface) {
  const [storyGradient, setStoryGradient] = useState<string[]>([
    "rgb(249,206,52)",
    "rgba(238,42,123,1)",
    "rgba(98,40,215,1)",
  ]);

  useEffect(() => {
    if (!item.hasPostedStory && !item.hasPostedStoryOnCloseFriends) {
      setStoryGradient(["transparent", "transparent"]);
    } else if (item.hasViewedStory) {
      setStoryGradient(["#cbcbcb", "#cbcbcb"]);
    } else if (item.hasPostedStoryOnCloseFriends) {
      setStoryGradient(["rgb(0,170,0)", "rgb(0,170,0)"]);
    }
  }, [storyData]);

  const viewStoryHandler = () => {
    const updatedStoryData = storyData.map((story) => {
      if (story.id === item.id) {
        return { ...story, hasViewedStory: true };
      }
      return story;
    });
    setStoryData(updatedStoryData);
  };

  return (
    <Pressable onPress={viewStoryHandler}>
      <View style={styles.container}>
        <LinearGradient
          colors={storyGradient}
          style={styles.storyBorder}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image style={styles.userImage} source={item.image} />
        </LinearGradient>
        {item.owner ? (
          <Pressable style={styles.addStory}>
            <AntDesignIcons name="pluscircle" size={20} color={"#007FFF"} />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.userName}>
        {item.owner ? "Your story" : item.name}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  addStory: {
    position: "absolute",
    bottom: 5,
    right: 10,
    padding: 2,
    borderRadius: 99,
    backgroundColor: "#fff",
  },
  storyBorder: {
    borderRadius: 9999,
    padding: 2,
    // width: 75,
    // marginBottom: 5,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  userImage: {
    borderColor: "#fff",
    borderWidth: 2,
    width: 75,
    height: 75,
    borderRadius: 9999,
  },
  userName: {
    textAlign: "center",
  },
});
