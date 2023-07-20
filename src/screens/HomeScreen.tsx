import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { s } from "react-native-wind";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import MenScreen from "./MenScreen";

const FirstRoute = () => <MenScreen />;

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
    { key: "fourth", title: "Fourth" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={s`flex-1 pt-10 p-4 bg-white`}>
      <View style={s`flex-row justify-between items-center`}>
        <View style={s`flex-row items-center`}>
          <Ionicons name="menu" size={24} color="black" />
          <Text style={s`ml-5 text-lg font-semibold`}>Boutique</Text>
        </View>
        <View style={s`flex-row items-center justify-between`}>
          <TouchableOpacity style={s`mr-3`}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TabViewExample />
    </SafeAreaView>
  );
};

export default HomeScreen;
