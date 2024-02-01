import { StyleSheet, View, Image } from "react-native";
import PostHeader from "./postComponents/header";
import Actions from "./postComponents/actions";
import Details from "./postComponents/details";

export default function Post() {
  return (
    <View>
      <PostHeader />
      <Image
        style={styles.postImage}
        source={require("../assets/postImages/post2.jpg")}
      />
      <Actions />
      <Details />
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
