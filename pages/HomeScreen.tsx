import { Text, View, StyleSheet, ScrollView } from "react-native";
import Story from "../components/story";
import Devider from "../components/devider";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Story />
        <View>
          <Devider />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
            vitae quasi, repellat, deleniti animi ipsam earum repellendus
            excepturi beatae, perspiciatis tempore inventore sit expedita minus
            totam architecto quo dignissimos?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
