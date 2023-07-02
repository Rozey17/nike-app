import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { s } from "react-native-wind";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    </SafeAreaView>
  );
};

export default HomeScreen;
