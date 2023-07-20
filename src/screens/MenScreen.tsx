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
      <View style={{ gap: 10 }}>
        <Text style={s`text-xl font-bold p-3`}>
          Indispensables, meilleures ventes
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 5, paddingHorizontal: 14 }}
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

      <View style={{ gap: 5 }}>
        <TouchableOpacity
          style={s`h-24 flex-row justify-between items-center bg-red-300 pl-5`}
        >
          <Text style={s`font-bold text-white text-xl`}>Nouveautés</Text>
          <Image
            source={{
              uri: "https://www.pngkit.com/png/full/766-7664698_nike-flash-sale-transparent-background-nike-trainers-air.png",
            }}
            style={s`w-40 h-20`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={s`h-24 flex-row justify-between items-center bg-red-300 pl-5`}
        >
          <Text style={s`font-bold text-white text-xl`}>Nouveautés</Text>
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/2358/2817/products/nike-sb-dunk-high-pro-iso-kentucky-1-wethenew.png?v=1648224266",
            }}
            style={s`w-40 h-20`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={s`h-24 flex-row justify-between items-center bg-red-300 px-5`}
        >
          <Text style={s`font-bold text-white text-xl`}>Nouveautés</Text>
          <Image
            source={{
              uri: "https://www.nicepng.com/png/full/988-9882647_nike-soccer-ball.png",
            }}
            style={s`w-20 h-20`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenScreen;
