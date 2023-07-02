import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* name is the title of the header of the screen */}
      <Stack.Screen
        // name="Root"
        // component={BottomTabNavigator}
        // // hide header
        // options={{ headerShown: false }}
        name="HomeScreen"
        //@ts-ignore
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Product"
        //@ts-ignore

        component={ProductScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="Cart"
        //@ts-ignore

        component={CartScreen}
        options={{ presentation: "containedModal" }}
      /> */}
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
// const ShopStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        //@ts-ignore
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

// function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator
//       screenOptions={() => ({
//         tabBarStyle: {
//           // backgroundColor: "#67e8f9",
//         },
//       })}
//     >
//       <BottomTab.Screen
//         name="Home"
//         //@ts-ignore
//         component={HomeStackScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Feather name="home" size={22} color={color} />
//           ),
//           // tabBarShowLabel: false,
//           headerShown: false,
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontFamily: "jost-medium",
//           },
//         }}
//       />

//       <BottomTab.Screen
//         name="Search"
//         //@ts-ignore

//         component={SearchScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Feather name="search" size={22} color={color} />
//           ),
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontFamily: "jost-medium",
//           },
//           // tabBarShowLabel: false,
//           // headerShown: false,
//         }}
//       />
//       <BottomTab.Screen
//         name="Wish List"
//         //@ts-ignore

//         component={WishListScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <AntDesign name="heart" size={22} color={color} />
//           ),
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontFamily: "jost-medium",
//           },
//           // tabBarShowLabel: false,
//         }}
//       />
//       <BottomTab.Screen
//         name="Account"
//         //@ts-ignore

//         component={AccountScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <FontAwesome5 name="user-alt" size={22} color={color} />
//           ),
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontFamily: "jost-medium",
//           },
//           // tabBarShowLabel: false,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

export default Navigation;
