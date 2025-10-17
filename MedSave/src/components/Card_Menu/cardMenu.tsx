import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./style";

const icons = {
  "icon-pilula.png": require("../../icon/icon-pilula.png"),
  "icon-coracao.png": require("../../icon/icon-coracao.png"),
  "icon-user.png": require("../../icon/icon-user.png"),
  "icon-search.png": require("../../icon/icon-search.png"),

};

type CardItem = {
  id: string; // 👈 identificador único
  title: string;
  imageSource: keyof typeof icons;
};

type Card_MenuProps = {
  items: CardItem[];
  onItemPress?: (id: string) => void; // 👈 callback para o clique
};

export default function Card_Menu({ items, onItemPress }: Card_MenuProps) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.tile}
          onPress={() => onItemPress?.(item.id)}
        >
          <Image
            source={icons[item.imageSource]}
            style={{ width: 50, height: 40 }}
            resizeMode="contain"
          />
          <Text style={styles.tileText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
