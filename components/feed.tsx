import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState } from "react";
import { PostDataDummy } from "../config/DummyData/PostData";
import PostCard from "./postComponents/postWrapper";
import { PostInterface } from "../types/home";
import Reels from "./reelComponents/reelWrapper";
import Suggestions from "./user-suggestion/suggestionWrapper";
import { horizontalMarginContainer } from "../constants";

export default function Feed() {
  const [postData, setPostData] = useState<PostInterface[]>(PostDataDummy);

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({ item, index }) => {
          return (
            <View>
              {index === 3 && (
                <View
                  style={{
                    marginHorizontal: horizontalMarginContainer,
                    marginBottom: 20,
                  }}
                >
                  <Reels />
                </View>
              )}
              <PostCard
                post={item}
                setPostData={setPostData}
                postData={postData}
              />
              {index === postData.length - 1 && <Suggestions />}
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
