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
import { useState } from "react";

export default function Suggestions() {
  const [suggestionData, setSuggestionData] =
    useState<any[]>(suggestionDataDummy);

  const removeSuggestions = (id: string) => {
    const filter = suggestionData.filter((item) => item.id !== id);
    setSuggestionData(filter);
  };

  return (
    <View>
      {suggestionData.length < 1 ? null : (
        <View style={styles.head}>
          <Text style={styles.bold}>Suggested for you</Text>
          <Pressable>
            <Text style={[styles.bold, styles.seeAll]}>See all</Text>
          </Pressable>
        </View>
      )}
      <FlatList
        style={{ marginHorizontal: horizontalMarginContainer }}
        data={suggestionData}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.close}>
                <Pressable
                  style={styles.pressClose}
                  onPress={() => removeSuggestions(item.id)}
                >
                  <AntDesignIcons name="close" size={15} />
                </Pressable>
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
              <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                  styles.followBtn,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.followTxt}>Follow</Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    marginHorizontal: horizontalMarginContainer,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  seeAll: {
    color: "#0086E1",
  },
  container: {
    backgroundColor: "rgb(235,235,235)",
    padding: 10,
    marginRight: 5,
    borderRadius: 7,
    marginBottom: 10,
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
  pressClose: {
    padding: 3,
  },
  bold: {
    fontWeight: "600",
  },
  suggText: {
    color: "#7F8489",
    fontSize: 12,
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
  buttonPressed: {
    opacity: 0.5,
  },
});
