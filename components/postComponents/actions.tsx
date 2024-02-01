import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";
import Fontist from "react-native-vector-icons/Fontisto";

export default function Actions() {
  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesomeIcons name="heart-o" size={28} />
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
    marginHorizontal: 10,
    gap: 10,
  },
});
