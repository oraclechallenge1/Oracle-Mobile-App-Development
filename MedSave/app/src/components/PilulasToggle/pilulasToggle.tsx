import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

type Opcao = string;

type Props = {
  opcoes: Opcao[];
  valor?: Opcao | null;
  aoMudar: (novo: Opcao) => void;
  cor?: string; // cor primária
};

export default function PilulasToggle({ opcoes, valor, aoMudar, cor = "#E53935" }: Props) {
  return (
    <View style={styles.linha}>
      {opcoes.map((op) => {
        const selecionado = valor === op;
        return (
          <TouchableOpacity
            key={op}
            style={[styles.pilula, selecionado ? { backgroundColor: cor, borderColor: cor } : styles.pilulaFantasma]}
            onPress={() => aoMudar(op)}
          >
            <Text style={selecionado ? styles.textoPreenchido : styles.textoFantasma}>{op}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

