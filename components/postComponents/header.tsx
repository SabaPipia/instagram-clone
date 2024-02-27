import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import EntypoIcons from "react-native-vector-icons/Entypo";
import UserName from "./userName";
import { horizontalMarginContainer } from "../../constants";
import { SetStateAction } from "react";
import { PostInterface } from "../../types/home";

export default function PostHeader({
  profilePic,
  userName,
  isFollowing,
  setPostData,
}: {
  profilePic: any;
  userName: string;
  isFollowing: boolean;
  setPostData: React.Dispatch<SetStateAction<PostInterface[]>>;
}) {
  const toggleFollow = (userName: string) => {
    setPostData((prevPosts) =>
      prevPosts.map((post) => {
        if (post.name === userName) {
          return { ...post, isFollowing: !post.isFollowing };
        }
        return post;
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>
        <Image style={styles.profileImage} source={profilePic} />
        <UserName name={userName} />
      </View>
      <View style={styles.sideContainer}>
        <Pressable
          onPress={() => toggleFollow(userName)}
          style={[
            isFollowing ? styles.follwingBtn : styles.followBtn,
            styles.btn,
          ]}
        >
          <Text
            style={[
              isFollowing ? styles.followingText : styles.followText,
              styles.text,
            ]}
          >
            {isFollowing ? "Following" : "Follow"}
          </Text>
        </Pressable>
        <Pressable>
          <EntypoIcons name="dots-three-horizontal" size={15} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: horizontalMarginContainer,
    justifyContent: "space-between",
  },
  sideContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 9999,
  },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 10,
  },
  follwingBtn: {
    backgroundColor: "#fff",
    borderColor: "#252A2F",
    borderWidth: 1,
  },
  followBtn: {
    backgroundColor: "#252A2F",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
  followText: {
    color: "#fff",
  },
  followingText: {
    color: "#252A2F",
  },
});
