import { StyleSheet, View, FlatList, Image } from "react-native";
import { useState } from "react";
import { PostDataDummy } from "../config/DummyData/PostData";
import PostCard from "./postComponents/postWrapper";
import { PostInterface } from "../types/home";
import Reels from "./reelComponents/reelWrapper";

export default function Post() {
  const [postData, setPostData] = useState<PostInterface[]>(PostDataDummy);

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({ item, index }) => {
          return (
            <View>
              {index === 3 && (
                <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
                  <Reels />
                </View>
              )}
              <PostCard
                post={item}
                setPostData={setPostData}
                postData={postData}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postImage: {
    width: "auto",
    height: 350,
    marginVertical: 10,
  },
});
