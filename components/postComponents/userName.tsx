import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";

export default function UserName({ name }: { name: string }) {
  return (
    <Pressable>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "700",
  },
});
