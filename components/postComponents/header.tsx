import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import EntypoIcons from "react-native-vector-icons/Entypo";

export default function PostHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/userImages/user1.jpg")}
        />
        <Pressable>
          <Text style={styles.userName}>Oliver</Text>
        </Pressable>
      </View>
      <View style={styles.sideContainer}>
        <Pressable style={styles.followBtn}>
          <Text style={styles.followText}>Follow</Text>
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
    marginHorizontal: 10,
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
  userName: {
    fontWeight: "700",
  },
  followBtn: {
    backgroundColor: "#252A2F",
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 10,
  },
  followText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
});