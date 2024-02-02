import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import { PostDataDummy } from "../config/DummyData/PostData";
import PostCard from "./postComponents/postWrapper";
import { PostInterface } from "../types/home";

export default function Post() {
  const [postData, setPostData] = useState<PostInterface[]>(PostDataDummy);

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({ item }) => {
          return (
            <PostCard
              post={item}
              setPostData={setPostData}
              postData={postData}
            />
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
