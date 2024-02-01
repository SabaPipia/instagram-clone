import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>57 229 likes</Text>
      <View style={styles.caption}>
        <Pressable>
          <Text style={styles.bold}>Oliver</Text>
        </Pressable>
        <Text>Best Day</Text>
      </View>
      <Text style={styles.comments}>View all 82 comments</Text>
      <View style={styles.addComment}>
        <Image
          style={styles.ownerProfilePic}
          source={require("../../assets/userImages/owner.png")}
        />
        <TextInput placeholder="Add a comment..." />
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>17 hours ago </Text>
        <Text
          style={[
            {
              fontSize: 8,
              alignSelf: "center",
            },
            styles.dateText,
          ]}
        >
          ●
        </Text>
        <Text style={styles.dateText}> Suggested for you</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  bold: {
    fontWeight: "700",
  },
  caption: {
    flexDirection: "row",
    gap: 4,
  },
  comments: {
    marginVertical: 10,
    color: "#555",
    fontWeight: "600",
  },
  ownerProfilePic: {
    width: 25,
    height: 25,
    borderRadius: 999,
  },
  addComment: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
  },
  date: {
    flexDirection: "row",
  },
  dateText: {
    color: "#777",
    fontWeight: "500",
  },
});