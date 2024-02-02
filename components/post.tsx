import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import { PostDataDummy } from "../config/DummyData/PostData";
import PostCard from "./postComponents/postWrapper";

export default function Post() {
  const [postData, setPostData] = useState<any[]>(PostDataDummy);

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({ item }) => {
          return <PostCard post={item} />;
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
