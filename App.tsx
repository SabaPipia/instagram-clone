import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens import
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import AddScreen from "./pages/AddScreen";
import ReelsScreen from "./pages/ReelsScreen";
import ProfileScreen from "./pages/ProfileScreen";
// icons
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import CustomHeader from "./components/header";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();
type IconComponent = (props: { focused: boolean }) => JSX.Element;

const createTabOptions = (
  label: string,
  iconComponent: IconComponent,
  title: string
) => ({
  tabBarLabel: ({ focused }: { focused: boolean }) => (
    <Text style={{ fontWeight: focused ? "bold" : "normal", fontSize: 10 }}>
      {label}
    </Text>
  ),
  tabBarIcon: ({ focused }: { focused: boolean }) => iconComponent({ focused }),
  header: () => <CustomHeader title={title} />,
});

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={createTabOptions(
              "Home",
              ({ focused }) => (
                <AwesomeIcon
                  name="home"
                  size={25}
                  color={focused ? "#333" : "#999"}
                />
              ),
              "home"
            )}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Search"
            options={createTabOptions(
              "Search",
              ({ focused }) => (
                <AntIcon
                  name="search1"
                  size={25}
                  color={focused ? "#333" : "#999"}
                />
              ),
              "Notifications"
            )}
            component={SearchScreen}
          />
          <Tab.Screen
            name="Add"
            options={createTabOptions(
              "New Post",
              ({ focused }) => (
                <Ionicons
                  name="add-circle"
                  size={25}
                  color={focused ? "#333" : "#999"}
                />
              ),
              "Add"
            )}
            component={AddScreen}
          />
          <Tab.Screen
            name="Reels"
            options={createTabOptions(
              "Reels",
              ({ focused }) => (
                <FoundationIcon
                  name="play-video"
                  size={25}
                  color={focused ? "#333" : "#999"}
                />
              ),
              "Reels"
            )}
            component={ReelsScreen}
          />
          <Tab.Screen
            name="Profile"
            options={createTabOptions(
              "Profile",
              ({ focused }) => (
                <EvilIconsIcon
                  name="user"
                  size={25}
                  color={focused ? "#333" : "#999"}
                />
              ),
              "Profile"
            )}
            component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
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
