import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import Story from "../components/story";
import Devider from "../components/devider";

import Feed from "../components/feed";

export default function HomeScreen() {
  const data = [{ key: "story" }, { key: "feed" }];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        switch (item.key) {
          case "story":
            return <Story />;
          case "feed":
            return <Feed />;
          default:
            break;
        }
        return null;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
