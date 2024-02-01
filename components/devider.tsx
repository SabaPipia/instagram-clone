import { View, StyleSheet } from "react-native";

export default function Devider() {
  return <View style={styles.devider}></View>;
}

const styles = StyleSheet.create({
  devider: {
    backgroundColor: "#e9e9e9",
    height: 1,
  },
});
