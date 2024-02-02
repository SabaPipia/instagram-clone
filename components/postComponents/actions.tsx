import { View, StyleSheet, Pressable } from "react-native";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";
import { horizontalMarginContainer } from "../../constants";

export default function Actions({
  isLiked,
  LikePost,
}: {
  isLiked: boolean;
  LikePost: (indicator: boolean) => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          LikePost(!isLiked);
        }}
      >
        <FontAwesomeIcons
          name={isLiked ? "heart" : "heart-o"}
          size={28}
          color={isLiked ? "#FF3040" : "black"}
        />
      </Pressable>
      <Pressable>
        <FontAwesomeIcons name="comment-o" size={30} />
      </Pressable>
      <Pressable>
        <FeatherIcons name="send" size={28} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: horizontalMarginContainer,
    gap: 10,
  },
});
