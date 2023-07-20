// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={(props) => {
//         const {
//           route: { name: routeName },
//         } = props;
//         return {
//           tabBarIcon: renderTabBarIcon(routeName),
//           tabBarStyle: {
//             paddingVertical: 5,
//             // paddingHorizontal: 5,
//           },
//           headerShown: false,
//         };
//       }}
//     >
//       <Tab.Screen
//         name="Search"
//         component={SearchStack}
//         options={{
//           tabBarLabelStyle: {
//             fontFamily: "catamaran-medium",
//             textTransform: "uppercase",
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Booking"
//         component={Booking}
//         options={{
//           tabBarLabelStyle: {
//             fontFamily: "catamaran-medium",
//             textTransform: "uppercase",
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Tickets"
//         component={Tickets}
//         options={{
//           tabBarLabelStyle: {
//             fontFamily: "catamaran-medium",
//             textTransform: "uppercase",
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Support"
//         component={Support}
//         options={{
//           tabBarLabelStyle: {
//             fontFamily: "catamaran-medium",
//             textTransform: "uppercase",
//           },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{
//           tabBarLabelStyle: {
//             fontFamily: "catamaran-medium",
//             textTransform: "uppercase",
//           },
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigation;
