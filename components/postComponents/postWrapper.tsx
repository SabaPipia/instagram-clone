import { StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import PostHeader from "./header";
import Actions from "./actions";
import Details from "./details";

export default function PostCard({
  post,
}: {
  post: {
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
  };
}) {
  return (
    <View style={styles.container}>
      <PostHeader profilePic={post.userPic} userName={post.name} />
      <Image style={styles.postImage} source={post.image} />
      <Actions isLiked={post.isLiked} />
      <Details
        likeCount={post.likesCount}
        caption={post.caption}
        commentCount={post.commentsCount}
        date={post.date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  postImage: {
    width: "auto",
    height: 350,
    marginVertical: 10,
  },
});
