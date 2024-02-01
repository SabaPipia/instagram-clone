import { View, Image, StyleSheet, Platform, Pressable } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome6";

/*
TODO:
1) create header for search screen, reels, profile for now.
2) create dropdown for logo.
2) create notifications tab
*/

export default function CustomHeader({ title }: { title: string }) {
  // for development only
  const checkFunc = (name: string) => {
    console.log(`pressed ${name}`);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => checkFunc("logo")}>
        <View style={styles.leftSideContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logos/instagram-header-logo.png")}
          />
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            color="#333"
            style={{
              alignSelf: "center",
            }}
          />
        </View>
      </Pressable>
      <View style={styles.rightSideContainer}>
        <Pressable
          style={styles.icons}
          onPress={() => checkFunc("notifications")}
        >
          <EvilIconsIcon name="heart" size={40} color="#333" />
        </Pressable>
        <Pressable style={styles.icons} onPress={() => checkFunc("messenger")}>
          <FontAwesomeIcon name="facebook-messenger" size={30} color={"#333"} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 30 : 25,
    paddingHorizontal: Platform.OS === "ios" ? 40 : 20,
    backgroundColor: "white",
  },
  logo: {
    width: 130,
    height: 60,
    objectFit: "fill",
  },
  leftSideContainer: {
    flexDirection: "row",
  },
  rightSideContainer: {
    flexDirection: "row",
  },
  icons: {
    padding: 3,
  },
});
