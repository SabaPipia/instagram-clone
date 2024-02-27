import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import Story from "../components/story";
import Devider from "../components/devider";

import Feed from "../components/feed";
import { useCallback, useState } from "react";

export default function HomeScreen() {
  const data = [{ key: "story" }, { key: "feed" }];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
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
