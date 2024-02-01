import { Text, View, StyleSheet } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>This is notofication</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
