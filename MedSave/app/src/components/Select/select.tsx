import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

type Props = {
  rotulo: string;
  valor?: string;
  placeholder?: string;
  aoPressionar: () => void;
};

export default function SeletorLinha({ rotulo, valor, placeholder = "Selecione", aoPressionar }: Props) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TouchableOpacity style={styles.seletor} onPress={aoPressionar}>
        <Text style={valor ? styles.valorSeletor : styles.placeholderSeletor}>
          {valor || placeholder}
        </Text>
        <Text style={styles.seta}>▼</Text>
      </TouchableOpacity>
    </View>
  );
}


