import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { suggestionDataDummy } from "../../config/DummyData/userSuggestion";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { horizontalMarginContainer } from "../../constants";

export default function Suggestions() {
  const data = [{ key: "story" }, { key: "feed" }];

  return (
    <FlatList
      style={{ marginHorizontal: horizontalMarginContainer }}
      data={suggestionDataDummy}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.close}>
              <AntDesignIcons name="close" size={15} />
            </View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.userInfo}>
              <Text style={styles.bold}>{item.name}</Text>
              <Text style={styles.suggText}>
                {item.mutuals.length > 0
                  ? "Followed by your followers"
                  : "Suggested for you"}
              </Text>
            </View>
            <Pressable style={styles.followBtn}>
              <Text style={styles.followTxt}>Follow</Text>
            </Pressable>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(235,235,235)",
    padding: 10,
    marginRight: 5,
    borderRadius: 7,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 999,
    marginVertical: 5,
  },
  close: {
    alignItems: "flex-end",
  },
  bold: {
    fontWeight: "600",
  },
  suggText: {
    color: "#7F8489",
    fontSize: 12,
    // width: 120,
  },
  userInfo: {
    alignItems: "center",
    gap: 10,
  },
  followBtn: {
    backgroundColor: "#0098FD",
    color: "#fff",
    padding: 6,
    marginTop: 14,
    borderRadius: 7,
  },
  followTxt: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});
