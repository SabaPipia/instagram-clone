import { StyleSheet, View, Image, Pressable } from "react-native";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import PostHeader from "./header";
import Actions from "./actions";
import Details from "./details";
import { PostInterface } from "../../types/home";
import { GestureHandlerRefContext } from "@react-navigation/stack";

export default function PostCard({
  post,
  setPostData,
  postData,
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
    isFollowing: boolean;
  };
  setPostData: Dispatch<SetStateAction<PostInterface[]>>;
  postData: PostInterface[];
}) {
  const [tapCount, setTapCount] = useState(0);
  const lastTapRef = useRef<number | null>(null);

  const LikePost = (likeIndicator: boolean) => {
    const updatedStoryData = postData.map((item) => {
      if (item.id === post.id) {
        return { ...item, isLiked: likeIndicator };
      }
      return item;
    });
    setPostData(updatedStoryData);
  };

  const handlePress = () => {
    const now = Date.now();
    if (lastTapRef.current && now - lastTapRef.current < 300) {
      setTapCount((prevCount) => prevCount + 1);
      LikePost(true);
    } else {
      setTapCount(1);
    }
    lastTapRef.current = now;
  };

  return (
    <View style={styles.container}>
      <PostHeader
        profilePic={post.userPic}
        userName={post.name}
        isFollowing={post.isFollowing}
        setPostData={setPostData}
      />
      <Pressable onPress={handlePress}>
        <Image style={styles.postImage} source={post.image} />
      </Pressable>
      <Actions isLiked={post.isLiked} LikePost={LikePost} />
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
