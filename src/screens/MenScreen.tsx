import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";

const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThehAa_kwqLdOPWrp39c_jXYdZQUI1w-JZMA&usqp=CAU",
    text: `Jusqu'à 50%`,
  },
  {
    image:
      "https://www.groupebarriere.com/content/dam/corporate/notre-actualite/communiques-de-presse/images/1247x681/blaise-matuidi-barrierebet-477x575.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg",
    text: `Tenues des équipes nationales`,
  },
  {
    image:
      "https://www.footkorner.com/cdn/shop/products/footkorner-veste-nike-tech-fleece-blanc-noir-cu4489-030_3.png?v=1669911544",
    text: "Sorties quotidiennes",
  },
];

const MenScreen = () => {
  return (
    <View style={{ gap: 24 }}>
      <Text style={s`text-xl font-bold`}>
        Indispensables, meilleures ventes
      </Text>

      {/* <FlatList
        data={data}
        horizontal
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={s`h-60 w-60 rounded-lg overflow-hidden`}
          >
            <Image
              source={{ uri: item.image }}
              style={s`object-cover object-center h-full w-full`}
            />
          </TouchableOpacity>
        )}
      ></FlatList> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 5 }}
      >
        {data.map((item, index) => (
          <Pressable key={index} style={{ gap: 5 }}>
            <Image
              source={{ uri: item.image }}
              style={s`object-cover object-center h-40 w-40 rounded-lg overflow-hidden`}
            />
            <Text style={s`w-32 font-semibold`}>{item.text}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenScreen;
